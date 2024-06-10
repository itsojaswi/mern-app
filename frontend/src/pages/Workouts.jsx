import React from 'react'
import {useState, useEffect} from "react"
import WorkoutForm from "../components/WorkoutForm"
import WorkoutList from "../components/WorkoutList";
import axios from "axios"
import NavBar from '../components/NavBar';

const Workouts = () => {
      // Setting sates for workouts
  const [workouts, setWorkouts] = useState([])

  // Fetching workouts
  useEffect(() => {
    axios.get("api/workouts")
    .then(response => setWorkouts(response.data))
    .catch(error => console.log("error fetching the data"))
  }, [])
  return (
    <div>
        <NavBar/>
        <h1>Workouts</h1>
    </div>

  )
}

export default Workouts