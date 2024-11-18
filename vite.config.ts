import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { splitVendorChunkPlugin } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin()
  ],
  build: {
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
    modulePreload: {
      polyfill: false
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'lucide': ['lucide-react'],
          'components': [
            './src/components/ui/Button.tsx',
            './src/components/ui/Card.tsx',
            './src/components/ui/Container.tsx',
            './src/components/ui/Grid.tsx',
            './src/components/ui/Icon.tsx'
          ],
          'features': [
            './src/components/Hero.tsx',
            './src/components/Services.tsx',
            './src/components/Process.tsx'
          ],
          'secondary': [
            './src/components/FAQ.tsx',
            './src/components/Pricing.tsx',
            './src/components/Testimonials.tsx'
          ]
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
    exclude: ['@tawk.to/tawk-messenger-react']
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000'
    }
  }
});