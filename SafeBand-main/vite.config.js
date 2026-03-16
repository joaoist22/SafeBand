import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Permite que qualquer túnel ou dispositivo da rede aceda ao site
    allowedHosts: true, 
    // Garante que o servidor expõe o IP para a rede (útil para o telemóvel)
    host: true, 
  }
})