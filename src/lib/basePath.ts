// Next's automatic basePath prefixing for next/image isn't reliably
// applying under output:"export" + images.unoptimized in this setup, so
// local-asset paths are prefixed explicitly here instead. Must match
// the `basePath` value in next.config.js exactly.
export const basePath =
  process.env.NODE_ENV === "production" ? "/GIARA-Investments" : "";