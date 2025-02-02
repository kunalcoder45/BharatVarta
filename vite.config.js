import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: { 
    outDir: "dist",
    sourcemap: true,
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://newsapi.org', // Target the actual API URL
        changeOrigin: true, // Needed for virtual hosted sites
        rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite the URL to remove '/api' prefix
      },
    },
  },
});
