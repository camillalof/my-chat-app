import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'


export const GetMessages = () => {
  const [userName, setUserName] = useState([]);
  const [userMessage, setUserMessage] = useState([]);

  const user = window.localStorage.getItem('Name')

  const fetchResponse = async () => {
    try {
      const getResponse = await axios.get(
      'http://167.172.108.61/?storage=camilla_lofroth'
    )
    console.log(getResponse.data)
    setUserMessage(getResponse.data)
    } catch (error) {
      alert('Error')
    }
    return[]
  }  
  
  useEffect(() => {
    fetchResponse()
  }, [])
  
  console.log(userMessage)

  return (
    <div>
      <div>
        <p>{user}</p>
      </div>
        {userMessage.map(message => (
        <p>{message.message !== null && typeof message.message === 'object'? message.message.mess: message.message }</p>
      ))}
    </div>
  )
  }