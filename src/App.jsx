import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import WithNavbar from './layouts/WithNavbar'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<WithNavbar />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
