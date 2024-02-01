// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ShowDetails from './ShowDetails';
import ShowList from './ShowList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> 
          <Route path="/" element={<ShowList />} /> 
          <Route path="/show/:id" element={<ShowDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
