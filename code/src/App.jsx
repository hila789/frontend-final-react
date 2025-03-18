import React from 'react'
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import Header from './components/Header'
import MSGManage from './components/MSGManage'
import { Routes, Route } from 'react-router-dom'

export default function App({ name, newName }) {
  return (
    <div>

      <Header />
      <Routes>
        
        <Route path="/MSGManage" element={<MSGManage />} />
      </Routes>
    </div>
  )
}
