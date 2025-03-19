import React from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Help from './components/Help'
import InfoPage from './components/InfoPage'


export default function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/help" element={<Help />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </div>
  )
}
