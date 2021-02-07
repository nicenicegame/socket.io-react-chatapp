import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import ChatRoom from './ChatRoom'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:roomId" component={ChatRoom} />
    </Switch>
  )
}

export default App
