import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login';
import Profile from './pages/Profile';
import Conversa from './pages/Conversa';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/perfil' element={<Profile/>} />
      <Route path='/conversa' element={<Conversa/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
