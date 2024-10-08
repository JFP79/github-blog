import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home/Home.tsx';
import IssueDetail from './pages/Issue/IssueDetail.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/issue/:id" element={<IssueDetail />} />
      </Routes>
    </Router>
  </StrictMode>,
);
