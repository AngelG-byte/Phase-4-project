import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Feed from '../src/views/Feed'
import NavBar from './components/Navbar';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavBar />}/>
      <Route path='/feed' element={<Feed/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
