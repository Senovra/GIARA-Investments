interface WordmarkProps {
  className?: string;
}

// Real vector artwork from the client's logo designer (not a traced
// approximation). viewBox and path data below are taken directly from
// the source SVG — do not hand-edit the "d"/"points" values.
//
// The charcoal parts use fill="currentColor" so the wordmark inherits
// whatever text color is applied via Tailwind classes on the parent
// (e.g. "h-4 text-foreground") — this is what lets it recolor in step
// with the rest of the nav under any repaint filter a browser applies,
// since it's genuine DOM/CSS content, not a picture.
//
// The sage "A" keeps its own fixed color (#69745b) matching the
// designer's file exactly, rather than the site's existing --accent
// token, since this is the confirmed final brand color for this mark.
const VIEW_BOX = "0 0 1169.1 161.1";
const SAGE = "#69745b";

export default function Wordmark({ className }: WordmarkProps) {
  return (
    <svg viewBox={VIEW_BOX} className={className} aria-label="GIARA">
      <path
        fill="currentColor"
        d="M140.9,92.7v-15.2c0,0,67.5,0,67.5,0l-.3,66.1c-9-7.9-21.7-10.2-32.9-5.8-51.9,20.4-131,13.4-158.4-30.4-13.4-21.6-9.7-47.7,7.8-66.3C63,.4,151-.2,198.6,32.7v14.3c-40.3-26.5-110.4-32.4-142.2,4.3-13.8,15.9-13.5,37.7,0,54.2,27.8,33.8,92.5,32.1,130.9,9.7v-22.4c0,0-46.3,0-46.3,0h0Z"
      />
      <polygon
        fill="currentColor"
        points="304 13.3 341.4 13.3 341.2 144.6 303.8 144.5 304 13.3"
      />
      <path
        fill={SAGE}
        d="M571.5,144.5c3.6-3.9,6.9-8.1,7-13l-54.5-79.6h0c0-.1-10.8-16.3-10.8-16.3,0,0,2.6,12.1-2.6,19.7h.1s-48.9,72.3-48.9,72.3c-1.1,1.8-3.5,5.8-2.4,7.5l5.4,9.2h-31.6c0-.1,67.1-99.2,67.1-99.2l21.2-31.6,21.1.3,87.7,130.5-58.9.3h0Z"
      />
      <path
        fill="currentColor"
        d="M895.1,144.3h-48.4c0,.1-50.2-49.8-50.2-49.8h-.2c0-.1-12.5-14.2-12.5-14.2l42.9-.2c15.9,0,30.6-8,31.8-23,.7-8.5-2.7-15.8-9.9-21.2-6.3-3.4-13.5-5.9-21-5.9h-72.8c0,.1-28.1.1-28.1.1,0,0,15.7,5,15.7,20.7h0c0,.1-.2,93.2-.2,93.2l-35.9.3V14.3s127.9.2,127.9.2c13,0,24.8,3.8,35.6,9.4,10.4,6.3,16.9,15.8,18,26.6,1.3,12.5-3,23.7-12.7,31.8-8.7,7.3-19.1,9.4-31.9,12.2l51.9,49.8h0Z"
      />
      <path
        fill="currentColor"
        d="M1107.6,136.8c1.6-2-.5-7.4-2.5-9.1l-50.6-75.8-5.5-8.3-5.3-8s2.6,12.1-2.6,19.7l-48,71.3c-1.9,2.7-4.7,6.9-3.9,9.3l6.7,8.6-32.2-.6,88.2-130.1,21.1-.5,87.5,130.9h-58.6c0,.1,5.8-7.4,5.8-7.4h0Z"
      />
    </svg>
  );
}