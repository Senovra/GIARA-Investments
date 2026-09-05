const CLOUDINARY_VIDEO_UPLOAD = "/video/upload/";

/**
 * Inserts Cloudinary's `q_auto` into a video URL so it is delivered at a sane
 * bitrate.
 *
 * The uploaded masters are encoded far heavier than they need to be — the
 * Colombo hero is 82 MB and the others are 29–53 MB — which on a phone
 * saturates the connection and leaves the rest of the page half-loaded.
 * `q_auto` re-encodes to a perceptually equivalent result at roughly a third
 * of the size, with no change in resolution.
 *
 * Applied centrally rather than baked into the URLs so newly added videos get
 * it for free. Non-Cloudinary and already-transformed URLs pass through
 * untouched.
 */
export function optimizedVideo(src: string): string {
  const uploadAt = src.indexOf(CLOUDINARY_VIDEO_UPLOAD);
  if (uploadAt === -1) return src;

  const afterUpload = uploadAt + CLOUDINARY_VIDEO_UPLOAD.length;
  const rest = src.slice(afterUpload);

  // A transformation segment is anything before the version/public-id that
  // isn't a bare `v123456/`. If one is already present, leave it alone.
  const firstSegment = rest.split("/")[0];
  const isVersion = /^v\d+$/.test(firstSegment);
  if (!isVersion && firstSegment.includes("_")) return src;

  return `${src.slice(0, afterUpload)}q_auto/${rest}`;
}