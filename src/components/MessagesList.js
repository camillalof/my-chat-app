import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios';


const url = "http://167.172.108.61/?storage=camilla_lofroth"

export const SendMessage = () => {
  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')

  const user = window.localStorage.getItem('Name')

  const handleMessage = async (event) => {
    event.preventDefault()
    try {
      await axios.post(
        'http://167.172.108.61/?storage=camilla_lofroth',
        JSON.stringify({
          user,
          message
        }),
        setUsername(user),
        console.log(message),
        console.log(user)
      );
    } catch (error) {
      alert('Error');
    }
  }
  
    return (
      <div>
        <div>
        <form className='chat-form'>
      <h3>{user}</h3>
      <textarea
        rows='3'
        onChange={(event) => setMessage(event.target.value)}
        value={message}
    ></textarea>
    <div className='form-footer'>
      <button
        type='submit'
        onClick={handleMessage}
        disabled={message.length < 1 || message.length > 140 ? true : false}
      >
        Send a message
      </button>
    </div>
    </form> 
    </div>  
    </div> 
    )
  }