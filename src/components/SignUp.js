import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

const handleSubmit = event => {
 event.preventDefault()
 console.log('Funkar!')
} 

export const Input = () => { 
  const [user, setUser] = useState('')

  return ( 
  <form className='name'>
    <label>
      Label
      <input
        required
        type="text"
        name="text"
        placeholder="Type name here..."
        value={user}
        setValue={setUser} 
        onChange={(event) => setUser(event.target.value)} 
      />
    </label>
    <button 
      className="signInButton"
      onClick={handleSubmit} 
      type="submit">
        LOG IN
    </button>  
  </form>
  )
}