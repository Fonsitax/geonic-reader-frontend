import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {                                                    // Proxy-Server for the API
      '/api': {
        target: 'http://localhost:3000',                         // Deine Backend-URL
        changeOrigin: true,                                     // Changes the origin of the host header to the target URL
        rewrite: (path) => path.replace(/^\/api/, ''),         // Rewrite the path to remove /api from the URL
      },
    },
  },
});
