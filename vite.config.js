import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Tailwind eklentisi burada
  ],
  server: {
    // WSL kullanıcıları için dosya takibini zorunlu kılar
    watch: {
      usePolling: true, 
    },
    // Tarayıcının eski kodu göstermesini engeller
    headers: {
      "Cache-Control": "no-store",
    },
    // Hot Module Replacement (HMR) ayarları
    hmr: {
      overlay: true, 
    },
    port: 3000,
    open: true,
    host: true, 
  },
  // Bağımlılıkları sıfırdan kontrol etmeye zorlar
  optimizeDeps: {
    force: true,
  },
})