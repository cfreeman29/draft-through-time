import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import VietnamDraft from './VietnamDraft';
import './styles.css';

const NavLink = ({ to, children }) => {
  let navigate = useNavigate(); // Hook for navigation

  return (
    <motion.button
      className="nav-link"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate(to)} // Programmatically navigate
    >
      {children}
    </motion.button>
  );
};

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>Drafted Through Time</h1>
        </header>
        <nav>
          <ul>
            <li>
              {/* Use NavLink component for navigation */}
              <NavLink to="/vietnam">Vietnam War Draft</NavLink>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/vietnam" element={<VietnamDraft />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
