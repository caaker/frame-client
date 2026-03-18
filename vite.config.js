import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({

  // required boilerplate for react 
  plugins: [react()],
  publicDir: '_public',
  build: {
    outDir: '_dist-vite',
    rollupOptions: {
      output: {

        // tells vite to create one file
        manualChunks: undefined,

        // this is the output file
        entryFileNames: 'bundles.js',
      },
    },
  },
});
