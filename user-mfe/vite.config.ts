import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

const PORT = 30724

const shared = {
  react: { singleton: true },
  'react-dom': { singleton: true },
  'react-router': { singleton: true, import: false as const },
}

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'userMfe',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.tsx',
      },
      shared,
      dts: false,
    }),
  ],
  server: {
    port: PORT,
    strictPort: true,
    cors: true,
    origin: `http://localhost:${PORT}`,
  },
  preview: { port: PORT, strictPort: true, cors: true },
  build: { target: 'esnext' },
})
