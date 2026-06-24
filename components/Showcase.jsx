"use client";

import { useEffect, useRef } from "react";

// Vertical treatment clips. Play only while on screen to stay light on mobile.
const CLIPS = [
  { src: "/media/clip-1.mp4", poster: "/media/clip-1.jpg" },
  { src: "/media/clip-2.mp4", poster: "/media/clip-2.jpg" },
  { src: "/media/clip-3.mp4", poster: "/media/clip-3.jpg" },
  { src: "/media/clip-4.mp4", poster: "/media/clip-4.jpg" },
  { src: "/media/clip-5.mp4", poster: "/media/clip-5.jpg" },
  { src: "/media/clip-6.mp4", poster: "/media/clip-6.jpg" },
  { src: "/media/clip-7.mp4", poster: "/media/clip-7.jpg" },
];

function Clip({ src, poster }) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className="clip"
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      tabIndex={-1}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default function Showcase() {
  return (
    <div className="showcase__grid">
      {CLIPS.map((c) => (
        <Clip key={c.src} src={c.src} poster={c.poster} />
      ))}
    </div>
  );
}
