import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Tab1 = () => {
 const [players, setPlayers] = useState([])
 const [loading, setloading] = useState(false)
 const getPlayers = async () => {
  try {
   const data = await axios.get(
    'https://nba-players.herokuapp.com/players-stats'
   )
   console.log(data)
  } catch (err) {}
 }
 useEffect(() => {
  getPlayers()
 }, [])
 return (
  <div className="container">
   <h1>Tabela</h1>
  </div>
 )
}

export default Tab1
