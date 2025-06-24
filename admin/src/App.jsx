import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Auth from './pages/auth'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </Router>
  )
}

export default App
