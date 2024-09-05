import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    incude: ['react-icons/fa'],
  },
  build: {
    rollupOptions:{
      external:['react-icons']
    }
  }
});
