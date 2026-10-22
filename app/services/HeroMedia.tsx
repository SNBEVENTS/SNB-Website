"use client";

import { useSyncExternalStore } from "react";

const WIDE = "(min-width: 768px)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(WIDE);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/*
  event-reel.mp4 is a 16:9 clip sitting inside a 720x1280 portrait frame — only
  rows 437-842 carry picture, so 68% of every frame is black. A portrait hero
  crops it sideways and would show all of that black, so phones get the still.

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
        // scale-[1.45] pushes the letterbox bars outside the hero. It holds
        // until the window is taller than about 0.81 x its width, which covers
        // a maximised browser on any normal laptop or monitor.
        <video
          src="/event-reel.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.45]"
        />
      )}
    </>
  );
}
