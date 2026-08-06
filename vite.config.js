import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves a project repo from a sub-path (/Coloring-site/), not the domain
// root, so every asset URL has to be prefixed. BASE_PATH is set by the Pages workflow;
// locally and on Netlify/Vercel it stays '/' so nothing changes there.
const base = process.env.BASE_PATH || '/'

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 3050,
  },
})
