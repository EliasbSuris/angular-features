/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@spartan-ng/ui-core/hlm-tailwind-preset')],
  content: ['./src/**/*.{html,ts}', './libs/ui/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'content-background': 'hsl(var(--content-background))',
        'header-background': 'hsl(var(--header-background))',
      },
      height: {
        'header-height': 'var(--header-height)',
      },
      borderRadius: {
        'circle': '50%'
      }
    },
  },
  plugins: [],
};
