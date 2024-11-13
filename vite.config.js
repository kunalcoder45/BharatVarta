import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
}

build: {
    rollupOptions: {
      external: ['aos']
    }
  }
}

build: {
    rollupOptions: {
      external: ['@fortawesome/react-fontawesome']
    }
  }
                           
)

