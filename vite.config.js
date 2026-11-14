import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      // Dev only: serve /privacy like Vercel's cleanUrls does in production
      name: 'clean-urls',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === '/privacy') req.url = '/privacy/'
          next()
        })
      }
    }
  ],
  build: {
    rollupOptions: {
      // One entry per page; add new pages here
      input: {
        main: 'index.html',
        privacy: 'privacy/index.html'
      }
    }
  },
  server: {
    port: 3000,
    strictPort: true,
    open: true
  }
})
