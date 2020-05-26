import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const url = "http://167.172.108.61/?storage=camilla_lofroth"

export const LogIn = () => {
  const [message, setMessage] = useState("") 
  const [messages, setMessages] = useState("")   

useEffect(()=> {
    fetch(url)
      .then(res => res.json())
      .then(json => setMessages(json))
  }, [messages]);

  const user = window.localStorage.getItem('Name')

  const handleFormSubmit = event => {
    event.preventDefault()
    {/*props.onFormSubmit(message) // this onFormSubmit comes as a props from App.js*/}
    fetch(url, {
        method: "POST",
        body: JSON.stringify({ message }),
        headers: { "Content-Type": "application/json" }
      })
        .then(() => setMessage(message))
        .catch(err => console.log("error",err))
    }

return ( 
  <article>     
    <div>
      <h1>{user}</h1>
    </div>
        <form className='message'>
        <h3>Post a message!</h3>
        <textarea
          rows='3'
          onChange={event => setMessage(event.target.value)}
          value={message}
      ></textarea>
      <div className='form-footer'>
        <button
          type='submit'
          onClick={handleFormSubmit}
          disabled={message.length < 6 || message.length > 140 ? true : false}
        >
          SEND
        </button>
      <p>{message.length} / 140</p>
      </div>
      </form>
      {messages.map(message => (
        <p>{message.message}</p>
      ))}
    </article>    
)    
}