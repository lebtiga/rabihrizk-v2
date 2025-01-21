import React, { useEffect, useRef } from 'react';

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Debounced canvas size handler
    let resizeTimeout: number;
    const setCanvasSize = () => {
      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout);
      }
      resizeTimeout = window.setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = Math.max(
          window.innerHeight,
          document.documentElement.scrollHeight
        );
      }, 100);
    };

    // Initial size
    setCanvasSize();

    // Handle window resize
    window.addEventListener('resize', setCanvasSize);
    window.addEventListener('scroll', setCanvasSize);

    // Star properties
    const stars: Array<{x: number; y: number; size: number; speed: number}> = [];
    const numStars = 200;
    const maxSize = 2;

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * maxSize,
        speed: 0.1 + Math.random() * 0.5
      });
    }

    // Animation
    let animationFrameId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 5, 30, 0.1)'; // dark purple with low opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      stars.forEach(star => {
        // Create gradient for glow effect
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 2
        );
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)'); // blue-500
        gradient.addColorStop(0.1, 'rgba(59, 130, 246, 0.3)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Move star
        star.y -= star.speed;
        
        // Reset position if star moves off screen
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('scroll', setCanvasSize);
      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20"
      style={{ background: 'linear-gradient(to bottom, #0A051E, #120A2E)' }}
    />
  );
}
