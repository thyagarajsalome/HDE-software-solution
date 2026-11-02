/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-raised': 'var(--bg-raised)',
        'bg-sunken': 'var(--bg-sunken)',
        ink: 'var(--ink)',
        'ink-strong': 'var(--ink-strong)',
        muted: 'var(--muted)',
        faint: 'var(--faint)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
        accent: 'var(--accent)',
        'accent-ink': 'var(--accent-ink)',
        'invert-bg': 'var(--invert-bg)',
        'invert-fg': 'var(--invert-fg)',
      },
      fontFamily: {
        display: ['var(--font-archivo)', 'Archivo', 'system-ui', 'sans-serif'],
        serif: ['var(--font-instrument)', '"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
