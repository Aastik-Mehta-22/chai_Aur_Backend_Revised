import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/api': 'http://localhost:3000/' // proxy matlab like jo request aaa rhi h vo same url se aa rhi h or append ho jayeti proxy key ke aage 
    }
  },
  plugins: [react()],
})
