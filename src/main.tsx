import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Lazy load App component
const App = lazy(() => import('./App'));

// Loading fallback
const LoadingFallback = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="animate-pulse text-primary">Loading...</div>
  </div>
);

createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<LoadingFallback />}>
    <App />
  </Suspense>
);