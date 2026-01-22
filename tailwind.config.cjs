/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: '800', // Extra bold
              color: '#1a202c', // Dark gray
              marginTop: '1.5em',
              marginBottom: '0.75em',
              lineHeight: '1.2',
            },
            h2: {
              fontWeight: '700', // Bold
              color: '#2d3748', // Medium dark gray
              marginTop: '1.2em',
              marginBottom: '0.6em',
              paddingBottom: '0.2em',
              borderBottom: '1px solid #e2e8f0', // Light gray border
            },
            h3: {
              fontWeight: '600', // Semi-bold
              color: '#4a5568', // Light dark gray
              marginTop: '1em',
              marginBottom: '0.5em',
            },
            p: {
              fontSize: '1.05rem',
              lineHeight: '1.75',
              marginTop: '1em',
              marginBottom: '1em',
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.5em',
              marginTop: '1em',
              marginBottom: '1em',
            },
            ol: {
              listStyleType: 'decimal',
              paddingLeft: '1.5em',
              marginTop: '1em',
              marginBottom: '1em',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            a: {
              color: '#4c51bf', // Indigo color
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            blockquote: {
              borderLeftWidth: '0.25rem',
              borderLeftColor: '#cbd5e0', // Light gray
              paddingLeft: '1em',
              fontStyle: 'italic',
              color: '#718096', // Gray
            },
            code: {
              backgroundColor: '#e2e8f0', // Light gray background for inline code
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontSize: '0.9em',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              backgroundColor: '#2d3748', // Dark background for code blocks
              color: '#f7fafc', // Light text color
              borderRadius: '0.5rem',
              padding: '1em',
              lineHeight: '1.5',
            }
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};