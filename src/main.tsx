import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header/Header.tsx'
import Home from './pages/Home/Home.tsx'
import Issues from './pages/Issues/Issues.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Issues/>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/issues" element={<Issues />} />
        </Routes>
      </Router>
  </StrictMode>,
)
