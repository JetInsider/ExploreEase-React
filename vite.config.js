import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Home', // 👈 This is what you need to add
  plugins: [react()],
})
