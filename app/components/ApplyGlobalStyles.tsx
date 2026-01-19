"use client";

import { useEffect } from "react";

export default function ApplyGlobalStyles({
  backgroundImageUrl,
}: {
  backgroundImageUrl?: string;
}) {
  useEffect(() => {
    if (backgroundImageUrl) {
      document.body.style.setProperty(
        "--main-bg-image",
        `url(${backgroundImageUrl})`
      );
    }
  }, [backgroundImageUrl]);

  return null;
}
