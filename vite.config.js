import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './', // ensures paths are relative
  build: {
    outDir: 'dist', // <-- make sure this matches firebase.json
  },
});

