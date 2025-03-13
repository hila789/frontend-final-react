import React from 'react'
import Greeting from './components/Greeting'
import Counter from './components/Counter'

export default function App({name}) {
  return (
    <div>
      <Greeting name = "david"/>
      <Counter />
    </div>
  )
}
