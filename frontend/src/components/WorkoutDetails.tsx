const WorkoutDetails = ({workout}) => {
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Reps</strong>{workout.reps}</p>
            <p><strong>protein</strong>{workout.protein}</p>
            <p><strong>Time</strong>{workout.time}</p>
        </div>
    )
}

export default WorkoutDetails