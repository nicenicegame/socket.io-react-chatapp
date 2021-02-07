import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import ChatRoom from './components/ChatRoom'
import './style/App.css'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:roomId" component={ChatRoom} />
    </Switch>
  )
}

export default App
