// One-off: derives two alpha stencils from public/GIARAnewlogo4.png so the
// wordmark can be painted with CSS colours instead of shipped as a picture.
//   giara-wordmark-mask.png       -> the whole wordmark
//   giara-wordmark-peak-mask.png  -> just the sage "A"
// Re-run this if the logo artwork ever changes.
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const PUBLIC = path.join(__dirname, "..", "public");
const SRC = path.join(PUBLIC, "GIARAnewlogo4.png");
const TARGET_WIDTH = 1200; // ~8x the nav's rendered size; plenty for any screen

function decodePng(file) {
  const b = fs.readFileSync(file);
  let p = 8;
  let w = 0;
  let h = 0;
  const idat = [];
  while (p < b.length) {
    const len = b.readUInt32BE(p);
    const type = b.slice(p + 4, p + 8).toString();
    const data = b.slice(p + 8, p + 8 + len);
    if (type === "IHDR") {
      w = data.readUInt32BE(0);
      h = data.readUInt32BE(4);
      if (data[8] !== 8 || data[9] !== 6) throw new Error("expected 8-bit RGBA source");
    }
    if (type === "IDAT") idat.push(data);
    if (type === "IEND") break;
    p += 12 + len;
  }
  const raw = zlib.inflateSync(Buffer.concat(idat));
  const bpp = 4;
  const stride = w * bpp;
  const out = Buffer.alloc(h * stride);
  let pos = 0;
  for (let y = 0; y < h; y++) {
    const filter = raw[pos++];
    const line = raw.slice(pos, pos + stride);
    pos += stride;
    for (let x = 0; x < stride; x++) {
      const a = x >= bpp ? out[y * stride + x - bpp] : 0;
      const b2 = y > 0 ? out[(y - 1) * stride + x] : 0;
      const c = x >= bpp && y > 0 ? out[(y - 1) * stride + x - bpp] : 0;
      let v = line[x];
      switch (filter) {
        case 1: v += a; break;
        case 2: v += b2; break;
        case 3: v += (a + b2) >> 1; break;
        case 4: {
          const pp = a + b2 - c;
          const pa = Math.abs(pp - a);
          const pb = Math.abs(pp - b2);
          const pc = Math.abs(pp - c);
          v += pa <= pb && pa <= pc ? a : pb <= pc ? b2 : c;
          break;
        }
      }
      out[y * stride + x] = v & 255;
    }
  }
  return { width: w, height: h, data: out };
}

// Box-filter downscale of a coverage map, which keeps the letterform edges
// smooth instead of jagged.
function downscale(cov, w, h, tw, th) {
  const out = new Float64Array(tw * th);
  for (let oy = 0; oy < th; oy++) {
    const y0 = Math.floor((oy * h) / th);
    const y1 = Math.max(y0 + 1, Math.floor(((oy + 1) * h) / th));
    for (let ox = 0; ox < tw; ox++) {
      const x0 = Math.floor((ox * w) / tw);
      const x1 = Math.max(x0 + 1, Math.floor(((ox + 1) * w) / tw));
      let sum = 0;
      let n = 0;
      for (let y = y0; y < y1; y++) {
        for (let x = x0; x < x1; x++) {
          sum += cov[y * w + x];
          n++;
        }
      }
      out[oy * tw + ox] = sum / n;
    }
  }
  return out;
}

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

// Greyscale + alpha: only the alpha channel matters to CSS mask-image.
function encodeMask(cov, w, h, file) {
  const stride = w * 2;
  const raw = Buffer.alloc(h * (stride + 1));
  for (let y = 0; y < h; y++) {
    const rowStart = y * (stride + 1);
    raw[rowStart] = 0; // filter: none
    for (let x = 0; x < w; x++) {
      const a = Math.round(Math.min(1, Math.max(0, cov[y * w + x])) * 255);
      raw[rowStart + 1 + x * 2] = 255;
      raw[rowStart + 1 + x * 2 + 1] = a;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 4; // colour type: greyscale + alpha
  const png = Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", zlib.deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
  fs.writeFileSync(file, png);
  return png.length;
}

const { width, height, data } = decodePng(SRC);
const srcFull = new Float64Array(width * height);
const srcPeak = new Float64Array(width * height);

for (let i = 0, px = 0; i < data.length; i += 4, px++) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const a = data[i + 3] / 255;
  srcFull[px] = a;
  const mx = Math.max(r, g, b);
  const mn = Math.min(r, g, b);
  const isSage = !(mn > 200 && mx - mn < 25) && g >= r && g >= b && mx - mn > 10;
  if (isSage) srcPeak[px] = a;
}

// Trim the artwork's transparent margin. Without this the stencil's box is
// mostly empty space and every `h-*` on the component means something other
// than the height of the letterforms.
let x0 = width, y0 = height, x1 = -1, y1 = -1;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    if (srcFull[y * width + x] > 0.15) {
      if (x < x0) x0 = x;
      if (x > x1) x1 = x;
      if (y < y0) y0 = y;
      if (y > y1) y1 = y;
    }
  }
}
const cw = x1 - x0 + 1;
const chh = y1 - y0 + 1;

function crop(src) {
  const out = new Float64Array(cw * chh);
  for (let y = 0; y < chh; y++) {
    for (let x = 0; x < cw; x++) out[y * cw + x] = src[(y + y0) * width + (x + x0)];
  }
  return out;
}

const tw = TARGET_WIDTH;
const th = Math.round((chh * TARGET_WIDTH) / cw);

const a = encodeMask(downscale(crop(srcFull), cw, chh, tw, th), tw, th, path.join(PUBLIC, "giara-wordmark-mask.png"));
const b = encodeMask(downscale(crop(srcPeak), cw, chh, tw, th), tw, th, path.join(PUBLIC, "giara-wordmark-peak-mask.png"));

console.log(`source ${width}x${height} -> trimmed ${cw}x${chh} -> masks ${tw}x${th}`);
console.log(`aspect ratio for CSS: ${tw} / ${th}  (${(tw / th).toFixed(3)})`);
console.log(`  giara-wordmark-mask.png       ${(a / 1024).toFixed(1)} KB`);
console.log(`  giara-wordmark-peak-mask.png  ${(b / 1024).toFixed(1)} KB`);