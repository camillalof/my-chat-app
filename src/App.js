import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { LogIn } from './components/LogIn'
import { Input } from './components/SignUp'
import { Tutorial } from './components/Tutorial'

export const App = () => {
  const [accessToken, setAccessToken] = useState()
  return (
    <BrowserRouter>
      <main>     
        <Switch>
          <Route path="/" exact>
            <Input/>
          </Route>
          <Route path="/login" exact>
            <LogIn />
          </Route>
          <Route path="/Tutorial" exact>
            <Tutorial />
          </Route>  
        </Switch>  
      </main>
    </BrowserRouter>
  )
}