import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Dashboard from './pages/dashboard'
import Register from './pages/auth/Register'
import WithNavbar from './layouts/WithNavbar'
import WithOutNavbar from './layouts/WithOutNavbar'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<WithOutNavbar />}>
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        <Route element={<WithNavbar />}>
          <Route path='/' element={<Dashboard/>} />
          <Route path="/users" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
