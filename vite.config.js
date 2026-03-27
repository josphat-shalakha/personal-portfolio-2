import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // This line will now work!

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
