import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: process.env.VITE_BASE_PATH || "/",

  // 👇 Add this server config
  server: {
    host: true,          // Equivalent to 0.0.0.0
    port: 5173,          // Optional: can be changed
    strictPort: true     // Fail if port is in use
  }
})
