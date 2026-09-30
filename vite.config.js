import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' so the built site works from any folder (e.g. `python -m http.server` inside dist/)
export default defineConfig({
  plugins: [react()],
  base: './',
});
