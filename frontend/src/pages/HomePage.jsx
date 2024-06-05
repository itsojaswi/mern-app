import axios from "axios"
import {useState, useEffect} from "react"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import WorkoutForm from "../components/WorkoutForm"
import WorkoutList from "../components/WorkoutList";

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
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        </IconButton>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
        fitLife
        </Typography>
        <Box>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Add workout</Button>
          <Button color="inherit">Contact</Button>
        </Box>
      </Toolbar>
    </div>
  )
}

export default HomePage