// animation-config.js
// This file contains reusable Framer Motion animations to keep consistency

export const fadeIn = (direction, delay) => {
    return {
      hidden: {
        y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
        x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        opacity: 0
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 0.8,
          delay,
          ease: [0.25, 0.25, 0.25, 0.75]
        }
      }
    };
  };
  
  export const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  export const textVariant = (delay) => {
    return {
      hidden: {
        y: 20,
        opacity: 0
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 1.25,
          delay
        }
      }
    };
  };
  
  export const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
        y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type,
          delay,
          duration,
          ease: 'easeOut'
        }
      }
    };
  };
  
  export const zoomIn = (delay, duration) => {
    return {
      hidden: {
        scale: 0,
        opacity: 0
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: 'tween',
          delay,
          duration,
          ease: 'easeOut'
        }
      }
    };
  };
  
  export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  export const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };
  
  export const buttonHoverVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)'
    },
    tap: { scale: 0.98 }
  };
  
  export const pulsateVariants = {
    initial: { scale: 1, opacity: 0.7 },
    animate: { 
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  export const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  export const rotateVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };
  
  export const gradientVariants = {
    initial: { backgroundPosition: '0% 50%' },
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  // For sections with the "parallax" effect based on scroll position
  export const parallaxVariants = {
    initial: (direction) => ({
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0
    }),
    animate: {
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 20,
        damping: 25
      }
    }
  };
  
  // Mouse follow effect (for custom cursors or spotlight effects)
  export const mouseFollowVariants = {
    default: { x: 0, y: 0 },
    follow: (position) => ({
      x: position.x,
      y: position.y,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }
    })
  };