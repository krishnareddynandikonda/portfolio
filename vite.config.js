import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Hosted as a GitHub Pages project site at krishnareddynandikonda.github.io/portfolio/
// so assets must be served from the /portfolio/ base path.
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})
