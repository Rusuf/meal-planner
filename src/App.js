import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UpdateMeals from './components/UpdateMeals';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update" element={<UpdateMeals />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
