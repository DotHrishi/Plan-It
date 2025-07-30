import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreateTask from './pages/CreateTask'

function App() {
  return (
    <div className="h-full w-full bg-[#0a0a0a] text-white font-sans relative overflow-hidden">
      {/* Sleek futuristic glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#00ffe1]/10 rounded-full blur-[120px] animate-pulse pointer-events-none z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#3f89fa]/10 rounded-full blur-[140px] animate-pulse pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#bdc5e1] via-[#cacad3] to-[#ffffff] opacity-[0.97] pointer-events-none z-0" />

      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateTask />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
