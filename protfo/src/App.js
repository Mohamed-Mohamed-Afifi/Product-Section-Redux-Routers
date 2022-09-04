import React from 'react';
import './App.css';
// import { Button } from 'reactstrap'
import { Route, Routes } from 'react-router-dom';
import { Home } from './component/Home';
import About from './component/About';
import Projects from './component/Projects';
import Contact from './component/Contact';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='Contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
