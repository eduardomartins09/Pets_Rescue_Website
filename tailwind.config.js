/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'banner-animal': "url('../../public/adote.png')",
      },
      backgroundColor: {
        'black-transparent': 'rgba(61, 61, 61, 1)',
        'background-orange': 'rgba(240, 176, 76, 1)',
        'background-form': '#FFF3E7',
      },
      textColor: {
        'text-blue': '#003049'
      }
    },
  },
  plugins: [],
}
