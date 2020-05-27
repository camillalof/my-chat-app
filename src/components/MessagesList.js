import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Message from './Message'

const url = "http://167.172.108.61/?storage=camilla_lofroth"

export const MessagesList = () => {
  const [message, setMessage] = useState("") 
  const [messagesList, setMessagesList] = useState("")   

  const user = window.localStorage.getItem('Name')

  useEffect(()=> {
    fetch(url)
      .then(res => res.json())
      .then(json => setMessage(json))
  }, [messagesList]);
  
  const handleFormSubmit = message => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => setMessagesList(message))
      .catch(err => console.log("error",err))
  }
  
    return (
      <main>
        <h1>{user}</h1>
        <Message onFormSubmit={handleFormSubmit} />
        {messagesList.map(message => (
          message={message}
        ))}
      </main>    
    )
  }