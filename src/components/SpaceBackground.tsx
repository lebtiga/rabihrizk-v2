import React, { useEffect, useRef } from 'react';

const EnhancedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(
        document.documentElement.scrollHeight,
        window.innerHeight
      );
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    document.addEventListener('scroll', handleResize);

    // Initialize particles
    const particlesArray = [];
    const particleCount = Math.min(120, Math.floor(window.innerWidth * 0.08));  // Responsive particle count
    const particleBaseSize = Math.max(1, Math.min(3, window.innerWidth / 1000)); // Responsive size
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * particleBaseSize + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.color = this.getRandomColor();
        this.opacity = Math.random() * 0.5 + 0.1;
        this.pulsating = Math.random() > 0.8; // Some particles will pulsate
        this.pulseSpeed = 0.03 + Math.random() * 0.03;
        this.pulseDirection = 1;
        this.pulseSize = this.size;
      }
      
      getRandomColor() {
        const colors = [
          [59, 130, 246],   // blue-500
          [99, 102, 241],   // indigo-500
          [139, 92, 246],   // purple-500
          [14, 165, 233],   // sky-500
          [6, 182, 212]     // cyan-500
        ];
        
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return `rgba(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]}, ${this.opacity})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        
        // Pulsating effect for some particles
        if (this.pulsating) {
          this.pulseSize += this.pulseDirection * this.pulseSpeed;
          
          if (this.pulseSize > this.size * 1.5) {
            this.pulseDirection = -1;
          } else if (this.pulseSize < this.size * 0.5) {
            this.pulseDirection = 1;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.pulsating ? this.pulseSize : this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    function createParticles() {
      for (let i = 0; i < particleCount; i++) {
        particlesArray.push(new Particle());
      }
    }
    
    function connectParticles() {
      const maxDistance = 150 * (window.innerWidth / 1920); // Responsive connection distance
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            // Calculate line opacity based on distance
            const opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }
    
    // Animation
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      connectParticles();
    }
    
    createParticles();
    animate();
    
    // Mousemove effect
    const mouseMoveHandler = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY + window.scrollY;
      
      // Push particles away from mouse
      for (let i = 0; i < particlesArray.length; i++) {
        const dx = particlesArray[i].x - mouseX;
        const dy = particlesArray[i].y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          const force = (100 - distance) / 100;
          
          particlesArray[i].speedX += Math.cos(angle) * force * 0.5;
          particlesArray[i].speedY += Math.sin(angle) * force * 0.5;
        }
      }
    };
    
    document.addEventListener('mousemove', mouseMoveHandler);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('scroll', handleResize);
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ 
        background: 'linear-gradient(to bottom, #0A051E, #0F0A2A)',
        opacity: 0.8
      }}
    />
  );
};

export default EnhancedBackground;