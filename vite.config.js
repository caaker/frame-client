import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

const HOME = '/home/caaker'

export default defineConfig({
  plugins: [
    react(),

    // Clear console on rebuild (replacement for your webpack plugin)
    {
      name: 'clear-console',
      handleHotUpdate() {
        process.stdout.write('\x1Bc')
        console.log('DEBUG: console cleared via vite')
      }
    },

    // Copy bundle after build
    {
      name: 'copy-after-build',
      closeBundle() {
        const src = path.resolve(HOME, 'top/frame-server/dist/bundle.js')
        const dest = path.resolve(HOME, 'top/caaker.github.io/bundle.js')
        fs.copyFileSync(src, dest)
        console.log('Bundle copied to github directory')
      }
    }
  ],

  root: path.resolve(HOME, 'top/frame-client'),

  build: {
    outDir: path.resolve(HOME, 'top/frame-server/dist'),
    emptyOutDir: true,

    rollupOptions: {
      input: path.resolve(HOME, 'top/frame-client/index.jsx'),
      output: {
        entryFileNames: 'bundle.js'
      }
    }
  },

  resolve: {
    alias: {
      '@': path.resolve(HOME, 'top/frame-client')
    }
  },

  esbuild: {
    jsx: 'automatic'
  }
})
