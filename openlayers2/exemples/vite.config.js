/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'ol-6_couches_vecteur': resolve(__dirname, 'ol-6_couches_vecteur/demo.html'),
      },
    },
  },
});
