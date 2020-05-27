import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export const Message = (props) => {
  console.log('props', props)
  const { message } = props.message

  return (
    <article>
      <h3>{message}</h3>
      <p></p>
    </article>
  )
}