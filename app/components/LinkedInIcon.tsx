/*
  Drawn to sit beside InstagramIcon: same 24x24 box, same rounded-square
  outline, same 1.5 stroke. The "in" is stroked rather than the usual solid
  glyph so the two icons read as one set at small sizes.
*/
export default function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <path d="M8 10.75V17" />
      <circle cx="8" cy="7.75" r="1" fill="currentColor" stroke="none" />
      <path d="M12 17v-6.25" />
      <path d="M12 13.75a2.75 2.75 0 0 1 5.5 0V17" />
    </svg>
  );
}
