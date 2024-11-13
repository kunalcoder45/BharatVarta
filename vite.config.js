import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

export default {
  build: {
    rollupOptions: {
      external: ['aos']
    }
  }
}
export default {
  build: {
    rollupOptions: {
      external: ['@fortawesome/react-fontawesome']
    }
  }
}
