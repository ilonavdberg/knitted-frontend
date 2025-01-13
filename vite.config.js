import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';
import { defineConfig } from 'vite';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': '/src', // Alias '@' to the 'src' directory
    },
  },
})


