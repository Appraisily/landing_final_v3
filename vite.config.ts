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
    minify: 'esbuild',
    cssMinify: true,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-core': ['react', 'react-dom'],
          'icons': ['lucide-react'],
          'critical': [
            './src/components/Hero.tsx',
            './src/components/Process.tsx',
            './src/components/Services.tsx'
          ],
          'deferred': [
            './src/components/FAQ.tsx',
            './src/components/Pricing.tsx',
            './src/components/Testimonials.tsx',
            './src/components/WhyChooseUs.tsx',
            './src/components/CaseStudies.tsx'
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