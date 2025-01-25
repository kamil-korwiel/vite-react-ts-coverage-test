import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import istanbul from 'vite-plugin-istanbul';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),

    // With Out this will be no "window.__coverage__" in -> /test/baseFixureCoverage.ts
    istanbul({
      include: 'src/*',
      exclude: ['node_modules', 'test/'],
      extension: ['.js', '.ts', '.tsx'],
      // requireEnv: true,
    }),
  ],
  build: {
    sourcemap: true
  },
})
