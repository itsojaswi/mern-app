import React from 'react';
import { useState, useEffect } from "react";
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
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <WorkoutList workouts={workouts} />
        </Grid>
        <Grid item xs={12} md={4}>
          <WorkoutForm />
        </Grid>
      </Grid>
    </Container>
  </div>
  );
};

export default Workouts;
