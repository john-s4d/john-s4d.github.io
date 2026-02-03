// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './styles/global.css';
import Home from './pages/Home';
import JarvisCaseStudy from './pages/JarvisCaseStudy';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jarvisgpt' element={<JarvisCaseStudy />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
