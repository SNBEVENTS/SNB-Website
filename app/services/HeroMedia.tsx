"use client";

import { useSyncExternalStore } from "react";

const WIDE = "(min-width: 768px)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(WIDE);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/*
  event-reel.mp4 is 16:9. A portrait hero crops it sideways, which on a phone
  would leave a letterbox strip in a mostly empty box, so phones get the still.

  The video has to mount and unmount rather than use `hidden md:block`, because
  a display:none video with autoPlay still downloads: measured on a 375px
  viewport, the phone buffered all 18.7s of it. The server snapshot is
  deliberately false, so the markup ships the photo and never the video.

  The photo stays underneath on every screen. It is what phones see, and on
  desktop it covers the moment between first paint and the video's first frame,
  so the hero never flashes empty.
*/
export default function HeroMedia() {
  const wide = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(WIDE).matches,
    () => false
  );

  return (
    <>
      <img
        src="/gallery-outdoor.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-[center_60%]"
      />
      {wide && (
        <video
          src="/event-reel.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      )}
    </>
  );
}
