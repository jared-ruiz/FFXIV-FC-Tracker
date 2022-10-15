import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//component imports
import Nav from './components/Nav';
import Home from './components/Home';

function App() {
  return (
  <>
    <Router>
      <div className='navigation'>
        <Nav />
        <div className='path-stylings'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  </>
  );
}

export default App;
