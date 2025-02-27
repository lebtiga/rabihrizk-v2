import React, { useEffect, useRef } from 'react';

export default function EnhancedSpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = 0;
    
    // Track mouse position for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    // Set canvas dimensions
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(
        window.innerHeight,
        document.documentElement.scrollHeight
      );
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    window.addEventListener('scroll', setCanvasSize);

    // Star properties
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      color: string;
      twinkleSpeed: number;
      twinkleState: number;
    }> = [];
    
    // Nebula clouds
    const nebulae: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      opacity: number;
      speed: number;
    }> = [];
    
    // Create stars with varied properties
    const createStars = () => {
      const numStars = Math.floor(canvas.width * canvas.height / 5000); // Responsive star count
      
      for (let i = 0; i < numStars; i++) {
        // Generate colors from blue to purple spectrum
        const hue = Math.random() * 60 + 220; // 220-280 range (blue to purple)
        const saturation = 70 + Math.random() * 30; // 70-100%
        const lightness = 70 + Math.random() * 30; // 70-100%
        
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5, // 0.5 to 2.5
          speed: 0.05 + Math.random() * 0.2,
          color: `hsla(${hue}, ${saturation}%, ${lightness}%, 1)`,
          twinkleSpeed: 0.01 + Math.random() * 0.02,
          twinkleState: Math.random() * Math.PI * 2 // Random starting phase
        });
      }
    };
    
    // Create nebula clouds
    const createNebulae = () => {
      const numNebulae = 5;
      
      for (let i = 0; i < numNebulae; i++) {
        const hue = Math.random() * 60 + 220; // Blue to purple
        nebulae.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 100 + Math.random() * 200,
          color: `hsla(${hue}, 70%, 50%, 0.05)`,
          opacity: 0.03 + Math.random() * 0.05,
          speed: 0.1 + Math.random() * 0.1
        });
      }
    };
    
    createStars();
    createNebulae();

    // Animation loop
    const animate = (timestamp: number) => {
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      
      // Clear canvas with semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(10, 5, 30, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw nebulae
      nebulae.forEach(nebula => {
        const gradient = ctx.createRadialGradient(
          nebula.x, nebula.y, 0,
          nebula.x, nebula.y, nebula.radius
        );
        gradient.addColorStop(0, nebula.color.replace('0.05', String(nebula.opacity)));
        gradient.addColorStop(1, 'rgba(10, 5, 30, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Move nebula
        nebula.y -= nebula.speed * (deltaTime / 16);
        
        // Reset position if nebula moves off screen
        if (nebula.y + nebula.radius < 0) {
          nebula.y = canvas.height + nebula.radius;
          nebula.x = Math.random() * canvas.width;
        }
      });

      // Draw and update stars
      stars.forEach(star => {
        // Update twinkle state
        star.twinkleState += star.twinkleSpeed * (deltaTime / 16);
        
        // Calculate opacity based on twinkle state
        const opacity = 0.5 + Math.sin(star.twinkleState) * 0.5;
        
        // Draw star with glow effect
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 2
        );
        
        gradient.addColorStop(0, star.color);
        gradient.addColorStop(1, 'rgba(10, 5, 30, 0)');
        
        ctx.globalAlpha = opacity;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size + Math.sin(star.twinkleState) * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
        
        // Move star
        star.y -= star.speed * (deltaTime / 16);
        
        // Interactive effect - stars move away slightly from cursor
        const dx = star.x - mousePosition.current.x;
        const dy = star.y - mousePosition.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          const force = (100 - distance) / 2000;
          star.x += Math.cos(angle) * force * (deltaTime / 16);
          star.y += Math.sin(angle) * force * (deltaTime / 16);
        }
        
        // Reset position if star moves off screen
        if (star.y < -10) {
          star.y = canvas.height + 10;
          star.x = Math.random() * canvas.width;
          star.twinkleState = Math.random() * Math.PI * 2;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    lastTime = performance.now();
    animate(lastTime);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('scroll', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        background: 'linear-gradient(to bottom, #0A051E, #120A2E)',
        opacity: 0.6,
        zIndex: -1
      }}
    />
  );
}