import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { MessagesList } from './components/MessagesList'
import { Input } from './components/SignUp'
import { GetMessage } from './components/Message'

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
            <MessagesList/>
          </Route>
          <Route path="/message" exact>
            <GetMessage/>
          </Route>  
        </Switch>  
      </main>
    </BrowserRouter>
  )
}