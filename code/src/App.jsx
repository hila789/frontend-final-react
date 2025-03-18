import React from 'react'
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import Header from './components/Header'
import MSGManage from './components/MSGManage'
import { Routes, Route } from 'react-router-dom'
import TaskForm from './components/TaskForm'


export default function App() {
  return (
    <div>

      <Header />
      <Counter/>
      <Greeting/>
      <Routes>

        <Route path="/TaskForm" element={<TaskForm/>} />
      </Routes>
    </div>
  )
}
