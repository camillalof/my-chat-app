import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


const url = "http://167.172.108.61/?storage=camilla_lofroth"

export const MessagesList = () => {
  const [message, setMessage] = useState("") 
  const [messagesList, setMessagesList] = useState([])   

  const user = window.localStorage.getItem('Name')

  useEffect(() => {
    fetch(`http://167.172.108.61/?storage=camilla_lofroth`)
      .then((res) => res.json())
      .then((json) => {
        if (json !== null) {
          setMessagesList(json)
        }
      })
  }, [])
  
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
        {messagesList.map(message => (
          message={message}
        ))}
      </main>    
    )
  }