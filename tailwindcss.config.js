import { Config } from 'tailwindcss'

const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      fontFamily: {
        playfair: ['"Playfair"', 'serif'],
        tinos: ['"Tinos"', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
