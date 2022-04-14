import axios from 'axios';



export default {

  getExercises() {
    return axios.get('/exercise/all')
  },

  getExercisesById(ID) {
    return axios.get(`/exercise/${ID}`)
  },
  getExercisesByMuscleGroup(muscleGroup) {
    return axios.get(`/exercise/${muscleGroup}`)
  },
  getExercisesBytype(type) {
    return axios.get(`/exercise/${type}`)
  },

  addExercise(exercise) {
    return axios.post('/exercise', exercise)
  },

  
}