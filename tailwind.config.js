/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',
        secondary: '#00E5FF',
        accent: '#FF4D8D',
        bg: '#050816',
        card: 'rgba(255,255,255,0.08)',
        muted: '#A0AEC0',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(135deg, #6C63FF 0%, #00E5FF 100%)',
        'grad-accent': 'linear-gradient(135deg, #FF4D8D 0%, #6C63FF 100%)',
        'grad-full': 'linear-gradient(135deg, #6C63FF 0%, #00E5FF 50%, #FF4D8D 100%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(108,99,255,0.35)',
        'glow-cyan': '0 0 40px rgba(0,229,255,0.3)',
        'glow-pink': '0 0 40px rgba(255,77,141,0.3)',
        soft: '0 10px 40px rgba(0,0,0,0.35)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        blob: 'blob 12s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        marquee: 'marquee 30s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.9)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1, filter: 'brightness(1)' },
          '50%': { opacity: 0.85, filter: 'brightness(1.3)' },
        },
      },
    },
  },
  plugins: [],
}
