// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          dark: '#0A051E',      // Deep space blue (background)
          darker: '#080418',    // Even deeper space blue
          blue: {
            DEFAULT: '#3B82F6',  // Primary blue
            light: '#60A5FA',    // Lighter blue for hover states
            dark: '#2563EB',     // Darker blue for active states
          },
          purple: {
            DEFAULT: '#8B5CF6',  // Secondary purple
            light: '#A78BFA',    // Lighter purple
            dark: '#7C3AED',     // Darker purple
          },
          cyan: {
            DEFAULT: '#06B6D4',  // Accent cyan
            light: '#22D3EE',    // Lighter cyan
            dark: '#0891B2',     // Darker cyan
          },
          pink: {
            DEFAULT: '#EC4899',  // Accent pink
            light: '#F472B6',    // Lighter pink
            dark: '#DB2777',     // Darker pink
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20.83l2.83-2.83 1.41 1.41L1.41 22.24H0v-1.41zM0 3.06l2.83-2.83 1.41 1.41L1.41 4.47H0V3.06zm40 35.54l-2.83-2.83 1.41-1.41L40 36.59V38h-1.41zM40 20.83l-2.83-2.83 1.41-1.41L40 18.41v1.41l-1.41-1.41zM40 3.06l-2.83-2.83 1.41-1.41L40 1.41V2.82h-1.41zM20 18.41l2.83-2.83 1.41 1.41L21.41 20H20v-1.59zm0-17.76l2.83-2.83 1.41 1.41L21.41 2.06H20V.65zM2.83 21.65L5.66 18.82l1.41 1.41-2.83 2.83H2.83v-1.41zm0-17.76L5.66 1.06l1.41 1.41-2.83 2.83H2.83V3.89zm37.17 17.76l-2.83-2.83 1.41-1.41 2.83 2.83v1.41h-1.41zM22.83 21.65l-2.83-2.83 1.41-1.41 2.83 2.83v1.41h-1.41zM22.83 3.89l-2.83-2.83 1.41-1.41 2.83 2.83v1.41h-1.41zM37.17 3.89l-2.83-2.83 1.41-1.41 2.83 2.83v1.41h-1.41z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient': 'gradient 15s ease infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5), 0 0 10px rgba(59, 130, 246, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6)' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'blink-caret': {
          from: { borderColor: 'transparent' },
          '50%': { borderColor: 'rgba(59, 130, 246, 1)' },
          to: { borderColor: 'transparent' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 15px 5px rgba(59, 130, 246, 0.3)',
        'glow-purple': '0 0 15px 5px rgba(139, 92, 246, 0.3)',
        'glow-cyan': '0 0 15px 5px rgba(6, 182, 212, 0.3)',
        'inner-glow': 'inset 0 0 20px 5px rgba(59, 130, 246, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      spacing: {
        '128': '32rem',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-gradient-blue-purple': {
          background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-gradient-cyan-blue': {
          background: 'linear-gradient(90deg, #06B6D4, #3B82F6)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.bg-gradient-blue-purple': {
          background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)',
        },
        '.bg-gradient-cyan-blue': {
          background: 'linear-gradient(90deg, #06B6D4, #3B82F6)',
        },
        '.glassmorphism': {
          background: 'rgba(10, 5, 30, 0.5)',
          'backdrop-filter': 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
          'border': '1px solid rgba(59, 130, 246, 0.2)',
        },
        '.typing-animation': {
          overflow: 'hidden',
          'border-right': '0.15em solid rgba(59, 130, 246, 1)',
          'white-space': 'nowrap',
          'animation': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
        },
      };

      addUtilities(newUtilities);
    },
  ],
}