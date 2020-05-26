import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const url = "http://167.172.108.61/?storage=camilla_lofroth"

export const Tutorial = () => {
const [messages, setMessages] = useState("")   

useEffect(()=> {
    fetch(url)
      .then(res => res.json())
      .then(json => setMessages(json))
  }, [messages]);

return (     
    <div>
      <h1>Tutorial</h1>
    </div>
)    
}