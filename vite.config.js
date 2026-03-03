import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // ADICIONA ESTA LINHA COM O TEU CAMINHO EXATO:
  base: '/ist1106934/SafeBand/', 
  server: {
    allowedHosts: true, 
    host: true, 
  }
})