import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

const isExternal = (id: string) => !id.startsWith('.') && !path.isAbsolute(id);

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['formatjs'],
      },
    }),
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: isExternal,
      output: {
        sourcemapExcludeSources: true,
        preserveModules: true,
        banner: (chunkInfo) => {
          const react = chunkInfo.importedBindings['react'];
          if (react && react.find((v) => v === 'useEffect')) {
            return `'use client';`;
          }
          return '';
        },
      },
    },
    sourcemap: true,
    minify: false,
  },
});
