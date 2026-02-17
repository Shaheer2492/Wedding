import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Mock /api/rsvp in development so the RSVP form completes locally.
    // This only runs during `npm run dev` — never in production builds.
    {
      name: 'mock-rsvp-api',
      configureServer(server) {
        server.middlewares.use('/api/rsvp', (req, res, next) => {
          if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
              console.log('[DEV MOCK] RSVP submission received:', body);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true }));
            });
          } else {
            next();
          }
        });
      },
    },
  ],
})
