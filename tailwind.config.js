/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

// Typography overrides for markdown content
const typographyOverrides = {
  'code::before': false,
  'code::after': false,
  'blockquote p:first-of-type::before': false,
  'blockquote p:last-of-type::after': false,
  pre: false,
  code: false,
  'pre code': false,
  ':is(h1, h2, h3, h4, h5) a': {
    'font-weight': 'inherit',
    'text-decoration': 'inherit',
  },
};

// Content paths configuration
const contentPaths = [
  './src/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  './src/blog/**/*.{js,ts,jsx,tsx,mdx}',
  './src/mdx-components.tsx',
];

module.exports = {
  content: contentPaths,
  darkMode: 'class',
  theme: {
    extend: {
      // Typography configuration
      typography: {
        DEFAULT: { css: typographyOverrides },
        sm: { css: typographyOverrides },
        lg: { css: typographyOverrides },
        xl: { css: typographyOverrides },
        '2xl': { css: typographyOverrides },
      },
      // Font family configuration
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      // Screen breakpoints
      screens: {
        xs: '475px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
