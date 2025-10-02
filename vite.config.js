import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',
  build: {
    outDir: 'dist'
  },
  server: {
    host: true,      // ✅ allow external access (for ngrok)
    port: 5173,      // ✅ must match the port you expose via ngrok
    strictPort: true, // ✅ prevent auto-switching
    allowedHosts: [
      "87cfe8e80ddd.ngrok-free.app" // ✅ paste your current ngrok domain here
    ]
  }
})
