export default {
  build: {
    emptyOutDir: false,
    outDir: '_dist', // Sets the folder to _dist
    lib: { 
      entry: './index.jsx', 
      formats: ['es'], 
      fileName: 'bundle_vite' // Sets the file name to bundle_vite.js
    },
    emptyOutDir: true,
    minify: false
  }
}