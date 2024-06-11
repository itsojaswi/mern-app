import React, { useState, useEffect } from 'react';
import WorkoutForm from "../components/WorkoutForm";
import WorkoutList from "../components/WorkoutList";
import axios from "axios";
import NavBar from '../components/NavBar';
import { Grid, Container } from '@mui/material';

const Workouts = () => {
  // Setting states for workouts
  const [workouts, setWorkouts] = useState([]);

  // Fetching workouts
  useEffect(() => {
    axios.get("api/workouts")
      .then(response => setWorkouts(response.data))
      .catch(error => console.log("error fetching the data"));
  }, []);

  return (
    <div>
      <NavBar />
      <Container maxWidth="lg">
        <Grid container spacing={2} direction="column">
          <Grid item xs={12}>
            <WorkoutForm />
          </Grid>
          <Grid item xs={12}>
            <WorkoutList workouts={workouts} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Workouts;
