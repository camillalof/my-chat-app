import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { SendMessage } from './components/MessagesList'
import { Input } from './components/SignUp'
import { GetMessages } from './components/Message'

export const App = () => {
  const [accessToken, setAccessToken] = useState()
  return (
    <BrowserRouter>
      <main>     
        <Switch>
          <Route path="/" exact>
            <Input/>
          </Route>
          <Route path="/messageslist" exact>
          </Route>
          <Route path="/message" exact>
            <SendMessage/>
            <GetMessages/>
          </Route>  
        </Switch>  
      </main>
    </BrowserRouter>
  )
}