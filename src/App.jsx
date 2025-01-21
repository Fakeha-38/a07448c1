// import './styles/App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArchivedPage from './pages/ArchivedPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archived" element={<ArchivedPage />} />
      </Routes>
    </Router>
  );
};

export default App;

