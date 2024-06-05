// src/App.js
import './index.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookSearchPage from './pages/BookSearchPage';
import BookShelfPage from './pages/BookShelfPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookSearchPage />} />
        <Route path="/library" element={<BookShelfPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
