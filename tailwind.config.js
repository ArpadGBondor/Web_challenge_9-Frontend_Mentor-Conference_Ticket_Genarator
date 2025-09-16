module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        natural: {
          0: 'hsl(0, 0%, 100%)',
          300: 'hsl(252, 6%, 83%)',
          500: 'hsl(245, 15%, 58%)',
          700: 'hsl(245, 19%, 35%)',
          900: 'hsl(248, 70%, 10%)',
          '500-trans': 'hsla(245,15%,58%,0.15)',
        },
        orange: {
          500: 'hsl(7, 88%, 67%)',
          700: 'hsl(7, 71%, 60%)',
        },
      },
      screens: {
        xs: '450px',
      },
    },
  },
  plugins: [],
  safelist: [{ pattern: /^text-natural-(0|300|500|700|900)$/ }],
};
