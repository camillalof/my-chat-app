import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'


export const GetMessages = async () => {
  const [userName, setUserName] = useState([]);
  const [userMessage, setUserMessage] = useState([]);

  const fetchResponse = () => {
    const getResponse = axios.get(
      'http://167.172.108.61/?storage=camilla_lofroth/'
    )  
    axios.all([getResponse]).then(
      axios.spread((...allData) => {
      const allDataResponse = allData[0].config.url;

      console.log(allDataResponse)
      setUserName(allDataResponse)
     })
    )
  }  
  
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {playerName}
    </div>
  )
 
  {/*try {
    const fetchResponse = await axios.get(
      'http://167.172.108.61/?storage=camilla_lofroth'
    );
    return response.data;
  } catch (error) {
    alert('error');
  }

  return []
}*/}