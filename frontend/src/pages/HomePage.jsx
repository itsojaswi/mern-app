import axios from "axios"
import {useState, useEffect} from "react"
import WorkoutForm from "../components/WorkoutForm"
import WorkoutList from "../components/WorkoutList";
import NavBar from "../components/NavBar";
import Home from "../components/Home";

const HomePage = () => {
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
     <Home/>
    </div>
  )
}

export default HomePage