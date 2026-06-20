import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Paleta «Tirma» — idéntica a la app (rosa chicle + beige).
        accent: '#C30F68',
        tirma: {
          pink: '#E6157F',
          deep: '#C30F68',
          beige: '#F1E2B3',
          cream: '#F6ECCB',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      typography: ({ theme }) => ({
        invert: {
          css: {
            '--tw-prose-links': theme('colors.tirma.beige'),
            '--tw-prose-headings': '#fff',
          },
        },
      }),
    },
  },
  plugins: [typography],
};
