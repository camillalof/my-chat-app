import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Input = () => { 
  const [name, setName] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    console.log('Funkar!')
    console.log({name})
    window.localStorage.setItem('Name', JSON.stringify(name))  
   }  

  return ( 
  <form className='name'>
    <label>
      Label
      <input
        required
        type="text"
        name="text"
        placeholder="Type name here..."
        value={name}
        setValue={setName} 
        onChange={(event) => setName(event.target.value)} 
      />
    </label>
    <button 
      className="signInButton"
      onClick={handleSubmit} 
      type="submit">
      <Link to="/message"> 
        LOG IN
      </Link>   
    </button>  
  </form>
  )
}