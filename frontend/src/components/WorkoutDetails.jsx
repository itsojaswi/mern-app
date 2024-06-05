const WorkoutDetails = ({workout}) => {
  return (
    <div>
      <h1>{workout.title}</h1>
      <h1>{workout.reps}</h1>
      <h1>{workout.load}</h1>
    </div>
  )
}

export default WorkoutDetails

