import React from 'react'
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import Header from './components/Header'

export default function App({name, newName}) {
  return (
    <div>
      <Greeting name = "david"/>
      <Counter />
      <newName  newName = "amir"/>
      <Header/>
      <Routes></Routes>
    </div>
  )
}
