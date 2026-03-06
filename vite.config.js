import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default {
  plugins: [
    cssInjectedByJsPlugin()
  ],
  build: {
    minify: false,
    outDir: '_dist-vite',
    emptyOutDir: false,
    cssCodeSplit: false,
    lib: { 
      entry: './index.jsx', 
      formats: ['iife'],
      name: 'myApp'
    },
    rollupOptions: {
      output: {
        entryFileNames: 'bundle.js'
      }
    }
  }
}