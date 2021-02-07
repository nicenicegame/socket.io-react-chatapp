import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [roomId, setRoomId] = useState('')

  const roomIdHandler = (e) => {
    setRoomId(e.target.value)
  }

  return (
    <div className="home">
      <h1>Enter room ID</h1>
      <input type="text" value={roomId} onChange={roomIdHandler} />
      <Link to={`${roomId}`}>
        <button>Enter</button>
      </Link>
    </div>
  )
}

export default Home
