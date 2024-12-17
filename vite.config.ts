import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { splitVendorChunkPlugin } from 'vite';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-transform-remove-console', { exclude: ['error', 'warn'] }]
        ]
      }
    }),
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
          'react-minimal': ['react', 'react-dom/client'],
          'icons': ['lucide-react'],
          'critical': [
            './src/components/Hero.tsx',
            './src/components/TrustBar.tsx',
            './src/components/Process.tsx'
          ],
          'main': [
            './src/components/Services.tsx',
            './src/components/ComparisonTable.tsx',
            './src/components/SampleReport.tsx'
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
    include: ['react', 'react-dom/client', 'lucide-react'],
    exclude: []
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000'
    }
  }
});