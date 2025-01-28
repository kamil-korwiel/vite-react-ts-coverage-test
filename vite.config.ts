import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import istanbul from 'vite-plugin-istanbul';

import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),viteTsconfigPaths(), svgrPlugin(),

    // With Out this will be no "window.__coverage__" in -> /test/baseFixureCoverage.ts
    istanbul({
      include: 'src/*',
      exclude: ['node_modules', 'test/'],
      extension: ['.js', '.ts', '.tsx'],
      // requireEnv: true,
    }),
  ],
  build: {
    outDir: 'build',
    sourcemap: true
  },
  server: {
    port: 3000,
  },
  
})
