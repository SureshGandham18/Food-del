import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true,
    watch: {
      usePolling: true, // Ensures file changes are detected
    }
  }
});

