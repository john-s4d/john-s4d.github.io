// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './styles/global.css';
import Home from './pages/Home';
import JarvisCaseStudyPage from './pages/JarvisCaseStudyPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jarvisgpt' element={<JarvisCaseStudyPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
