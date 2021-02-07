import React, { useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import useChat from './useChat'

const ChatRoom = () => {
  const { roomId } = useParams()
  const { messages, sendMessage } = useChat()
  const [message, setMessage] = useState('')
  const dummyRef = useRef()

  const messageHandler = (e) => {
    setMessage(e.target.value)
  }

  const handleSendMessage = () => {
    sendMessage(message)
    setMessage('')
    dummyRef.current.scrollIntoView()
  }

  return (
    <div className="chat-room">
      <h1>Room ID: {roomId}</h1>
      <div className="chat-box">
        {messages &&
          messages.map((message, i) => {
            return (
              <div
                className={`chat-message ${
                  message.ownedByCurrentUser ? 'current' : null
                }`}
                id={i}
              >
                <span>{message.body}</span>
              </div>
            )
          })}
        <div className="dummy" ref={dummyRef}></div>
      </div>
      <div className="sender">
        <input
          placeholder="Message..."
          type="text"
          onChange={messageHandler}
          value={message}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  )
}

export default ChatRoom
