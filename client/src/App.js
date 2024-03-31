import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import VietnamDraft from './VietnamDraft';
import './App.css';

const NavLink = ({ to, children }) => {
  let navigate = useNavigate();

  return (
    <motion.button
      className="nav-link"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate(to)}
    >
      {children}
    </motion.button>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Drafted Through Time</h1>
        </header>
        <nav>
          <ul>
            <li>
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