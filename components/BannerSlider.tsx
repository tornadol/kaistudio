"use client";

import { useEffect, useState } from "react";
import BackgroundSlider from "react-background-slider";

interface BannerSliderProps {
  images: string[];
}

export default function BannerSlider({ images }: BannerSliderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="w-full h-screen"
        style={{
          backgroundColor: "#1d1d20",
          backgroundImage: `url(${images[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    );
  }

  if (images.length === 0) return null;

  return (
    <div style={{ backgroundColor: "#1d1d20", minHeight: "100vh" }}>
      <BackgroundSlider images={images} duration={5} transition={2} />
    </div>
  );
}
