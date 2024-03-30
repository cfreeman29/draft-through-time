// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import VietnamDraft from './VietnamDraft';
import './styles.css'; // Make sure this path is correct

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
              <NavLink to="/vietnam" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>
                Vietnam War Draft
              </NavLink>
            </li>
            {/* Additional links here */}
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/vietnam" element={<VietnamDraft />} />
            {/* Additional routes here */}
          </Routes>
        </main>
        {/* Footer could go here */}
      </div>
    </Router>
  );
}

export default App;
