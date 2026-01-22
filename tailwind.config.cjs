/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        // Modern & Stylish Dark Theme Palette
        background: '#1a1a1a',       // Dark background
        'background-alt': '#2d2d2d', // Slightly lighter dark for cards/sections
        primary: '#3b82f6',          // A good blue (Tailwind's blue-500)
        secondary: '#60a5fa',        // Lighter blue for accents (Tailwind's blue-400)
        'text-base': '#f0f0f0',      // Near white for main text
        'text-muted': '#b0b0b0',     // Muted gray for secondary text
        'border-color': '#4a4a4a',   // Subtle border color
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: '800',
              color: 'var(--tw-prose-headings)',
              marginTop: '1.5em',
              marginBottom: '0.75em',
              lineHeight: '1.2',
            },
            h2: {
              fontWeight: '700',
              color: 'var(--tw-prose-headings)',
              marginTop: '1.2em',
              marginBottom: '0.6em',
              paddingBottom: '0.2em',
              borderBottom: '1px solid var(--tw-prose-hr)',
            },
            h3: {
              fontWeight: '600',
              color: 'var(--tw-prose-headings)',
              marginTop: '1em',
              marginBottom: '0.5em',
            },
            p: {
              fontSize: '1.05rem',
              lineHeight: '1.75',
              marginTop: '1em',
              marginBottom: '1em',
              color: 'var(--tw-prose-body)',
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.5em',
              marginTop: '1em',
              marginBottom: '1em',
              color: 'var(--tw-prose-body)',
            },
            ol: {
              listStyleType: 'decimal',
              paddingLeft: '1.5em',
              marginTop: '1em',
              marginBottom: '1em',
              color: 'var(--tw-prose-body)',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
              color: 'var(--tw-prose-body)',
            },
            a: {
              color: 'var(--tw-prose-a)',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            blockquote: {
              borderLeftWidth: '0.25rem',
              borderLeftColor: 'var(--tw-prose-quotes-border)',
              paddingLeft: '1em',
              fontStyle: 'italic',
              color: 'var(--tw-prose-quotes)',
            },
            code: {
              backgroundColor: 'var(--tw-prose-code-bg)',
              color: 'var(--tw-prose-code)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontSize: '0.9em',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              backgroundColor: 'var(--tw-prose-pre-bg)',
              color: 'var(--tw-prose-pre)',
              borderRadius: '0.5rem',
              padding: '1em',
              lineHeight: '1.5',
            }
          },
        },
        // Dark theme adjustments for prose
        invert: { // This applies when you use the 'prose-invert' class
          css: {
            '--tw-prose-body': '#f0f0f0',
            '--tw-prose-headings': '#f0f0f0',
            '--tw-prose-lead': '#b0b0b0',
            '--tw-prose-links': '#3b82f6',
            '--tw-prose-bold': '#f0f0f0',
            '--tw-prose-counters': '#b0b0b0',
            '--tw-prose-bullets': '#b0b0b0',
            '--tw-prose-hr': '#4a4a4a',
            '--tw-prose-quotes': '#b0b0b0',
            '--tw-prose-quotes-border': '#3b82f6',
            '--tw-prose-code': '#60a5fa',
            '--tw-prose-code-bg': '#2d2d2d',
            '--tw-prose-pre-code': '#f0f0f0',
            '--tw-prose-pre-bg': '#1a1a1a',
            '--tw-prose-th-borders': '#4a4a4a',
            '--tw-prose-td-borders': '#4a4a4a',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};