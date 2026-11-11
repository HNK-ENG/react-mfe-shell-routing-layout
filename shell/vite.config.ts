import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

const PORT = 8000

const shared = {
  react: { singleton: true },
  'react-dom': { singleton: true },
  'react-router': { singleton: true},
}

const remote = (name: string, port: number) => ({
  type: 'module' as const,
  name,
  entry: `http://localhost:${port}/remoteEntry.js`,
  entryGlobalName: name,
  shareScope: 'default',
})

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell',
      remotes: {
        productMfe: remote('productMfe', 30722),
        cartMfe: remote('cartMfe', 30723),
        userMfe: remote('userMfe', 30724),
      },
      shared,
      dts: false,
    }),
  ],
  server: { port: PORT, strictPort: true },
  preview: { port: PORT, strictPort: true },
  build: { target: 'esnext' },
})
