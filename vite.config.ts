import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Hash navigation works on GitHub Pages without server-side route rewrites.
  base: './',
});
