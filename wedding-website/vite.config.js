import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Site is served at shaheeralamkhan.com/wedding
  base: '/wedding/',
  plugins: [
    react(),
    // Mock /api/rsvp in development so the RSVP form completes locally.
    // This only runs during `npm run dev` — never in production builds.
    {
      name: 'mock-rsvp-api',
      configureServer(server) {
        const mockRsvp = (req, res, next) => {
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
        };
        // The app fetches `${BASE_URL}api/rsvp`; keep the bare path too.
        server.middlewares.use('/wedding/api/rsvp', mockRsvp);
        server.middlewares.use('/api/rsvp', mockRsvp);
      },
    },
  ],
})
