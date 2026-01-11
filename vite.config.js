import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Para Netlify usa base: '/'
  // Para GitHub Pages usa base: '/luna/'
  base: process.env.NETLIFY ? '/' : '/luna/',
})
