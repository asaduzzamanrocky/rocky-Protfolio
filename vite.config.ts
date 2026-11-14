import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Split rarely-changing libraries into their own cached chunks.
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['motion'],
        },
      },
      onwarn(warning, warn) {
        // framer-motion ships "use client" directives that are harmless here.
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
        warn(warning);
      },
    },
  },
});
