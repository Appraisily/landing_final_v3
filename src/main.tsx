import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DevNav from './components/DevNav';

import PaintingAppraisal from './pages/PaintingAppraisal';
import ArtAppraiser from './pages/ArtAppraiser';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Navigate to="/painting-value" replace />} />
          <Route path="/painting-value" element={<PaintingAppraisal />} />
          <Route path="/art-appraiser" element={<ArtAppraiser />} />
        </Routes>
        <DevNav />
      </div>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);