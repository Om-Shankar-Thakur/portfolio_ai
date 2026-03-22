"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollyCanvasProps {
  frameCount: number;
}

export default function ScrollyCanvas({ frameCount }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = new Array(frameCount);

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${frameIndex}.webp`;

      img.onload = () => {
        loadedImages[i - 1] = img;
        loadedCount++;
        if (loadedCount === frameCount) {
          setImages(loadedImages);
          setLoaded(true);
        }
      };
    }
  }, [frameCount]);

  // Handle scroll and draw
  useEffect(() => {
    if (!loaded || images.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const renderFrame = (index: number) => {
      const img = images[index];
      if (!img) return;

      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;

      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        drawHeight = canvas.width / imgRatio;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Trigger re-render based on current scroll position
      // For a scrollytelling component, typically the image sequence covers the first few viewports.
      // E.g., Hero section lasts for 300vh.
      const scrollHeight = 3000; // pixels assigned strictly for scrollytelling duration
      const scrollTop = document.documentElement.scrollTop;
      const scrollFraction = Math.min(1, Math.max(0, scrollTop / scrollHeight));
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );
      renderFrame(frameIndex);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial resize and draw phase

    let animationFrameId: number;

    const onScroll = () => {
      const scrollHeight = 3000; // Same as above, determines how long the scroll affects the canvas
      const scrollTop = document.documentElement.scrollTop;
      const scrollFraction = Math.min(1, Math.max(0, scrollTop / scrollHeight));
      
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );

      // Add a progressive blur or darkening when scrolling past the sequence
      let globalAlpha = 1;
      if (scrollTop > scrollHeight) {
        const fadeOutRange = 500;
        const fadeOutVal = (scrollTop - scrollHeight) / fadeOutRange;
        globalAlpha = Math.max(0, 1 - fadeOutVal);
      }
      
      canvas.style.opacity = globalAlpha.toString();

      animationFrameId = requestAnimationFrame(() => renderFrame(frameIndex));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    
    // Call once to ensure initial render
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [images, loaded, frameCount]);

  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-black">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover opacity-60 transition-opacity duration-300"
      />
      {/* Dimming overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
