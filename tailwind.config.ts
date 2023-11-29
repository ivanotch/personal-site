import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        slideInLeft: {
          from : { marginLeft: '25%' },
          to : { marginLeft: '0%' },
        }
      },
      animation: {
        slideInLeft: 'slideInLeft 0.7s linear',
      },
    },
    fontFamily: {
      main: ["Asap"],
      sub: ["Mukta"],
      subSub: ["Trirong"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["retro"],
  },
}
export default config
