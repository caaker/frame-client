import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: '_public-vite',
  build: {
    sourcemap: true,
    outDir: '_dist-vite',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'bundle.js',
      },
    },
  },
});
