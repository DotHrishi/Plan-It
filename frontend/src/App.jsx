import React from 'react'
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className="h-full w-full bg-[#0a0a0a] text-white font-sans relative overflow-hidden">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App;