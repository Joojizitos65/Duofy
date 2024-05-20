import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login';
import Profile from './pages/Profile';
import Conversa from './pages/Conversa';
import Compras from './pages/Compras';
import Enderecos from './pages/Enderecos';
function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/' element={<Login/>} />
      <Route path='/perfil' element={<Profile/>} />
      <Route path='/conversa' element={<Conversa/>} />
      <Route path='/carrinho' element={<Compras/>} />
      <Route path='/enderecos' element={<Enderecos/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
