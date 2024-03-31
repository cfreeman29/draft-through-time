import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VietnamDraft from './VietnamDraft';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<VietnamDraft />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;