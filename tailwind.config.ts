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
      colors:{
        'gold':'#e6dfca',
        'deep' :'#1c2a2a',
        'dime_green':'#387171',
        'dark_green':'#113030',
        'bg_green' :'#062f31',
        'pg_green':'#143437',
        'white_blue':'#b8eee7',
        'cream_blue':'#688787',
        'sea':'#3ec9c9',
        'brown':'#2f6a68',
        'dark_brown':'#352219',
        'glow':'#68fbf5',
        'cream_dark':'#bac8c8',
        'cream_white':'#e2e9eb',
        'vile_blue':'#233b40'
      },
      boxShadow:{
        'sm':'3px 2px 0px 0px rgb(0 0 0 / 0%), 0px 2px 4px 0px rgb(0 0 0 / 7%);',
        'card':'rgba(0, 0, 0, 0.052) 0px 4px 12px'
      }
    },
  },
  plugins: [],
}
export default config
