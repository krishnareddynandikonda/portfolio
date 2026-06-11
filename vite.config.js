import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Hosted as a GitHub Pages project site at username.github.io/krishnareddy/
// so assets must be served from the /krishnareddy/ base path.
export default defineConfig({
  base: '/krishnareddy/',
  plugins: [react()],
})
