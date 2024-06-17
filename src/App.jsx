import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login';
import Profile from './pages/Profile';
import Conversa from './pages/Conversa';
import Compras from './pages/Compras';
import Enderecos from './pages/Enderecos';
import Historico from './pages/Historico';
import Avaliacoes from './pages/Avaliacoes';
import Estabelecimento from './pages/Estabelecimento';
import Reembolso  from './pages/Reembolso'
import ReembolsoTicket from './pages/Reembolso-ticket'
import Pagamentos from './pages/Pagamentos'
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
      <Route path='/historico' element={<Historico/>} />
      <Route path='/avaliacao' element={<Avaliacoes/>} />
      <Route path='/estabelecimento' element={<Estabelecimento/>} />
      <Route path='/reembolso' element={<Reembolso/>} />
      <Route path='/reembolso-ticket' element={<ReembolsoTicket/>} />
      <Route path='/pagamentos' element={<Pagamentos/>} />

      </Routes>
    </Router>
      
    </>
  )
}

export default App
