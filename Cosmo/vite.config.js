import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',  // Esta línea es crucial para Netlify
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html',
        // Agrega otras páginas si tienes rutas múltiples
      }
    }
  },
  server: {
    historyApiFallback: true  // Importante para el routing
  }
})