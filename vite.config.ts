import path from 'path'
import react from '@vitejs/plugin-react-swc'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src'),
      '@': path.resolve(__dirname, './src')
    }
  },
  define: {
    'process.env': {}
  },
  optimizeDeps: {
    include: ['react-helmet-async']
  },
  server: {
    hmr: {
      overlay: true
    }
  }
})
