import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//component imports
import Nav from './components/Nav';

function App() {
  return (
  <>
    <Router>
      <div className='navigation'>
        <Nav />


      </div>
    </Router>
  </>
  );
}

export default App;
