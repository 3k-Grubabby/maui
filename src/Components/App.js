import React,{Fragment,useState} from 'react';
import {Header,Footer} from './Layouts';
import Exercises from './Exercises';
import {muscles,exercises} from '../store'


const getExerciseByMuscles = ()=>{
  return Object.entries(
    exercises.reduce((exercises,exercise)=>{
      const {muscles} = exercise
      exercises[muscles] = exercises[muscles]?[...exercises[muscles],exercise]:[exercise]
      return exercises
    },{})
  )
}




const App = ()=>{
  const [category,setCaregory] = useState('');
  const [exercise,setExercise] = useState({});


  const handleCategorySelected = (category)=>{
    setCaregory(category)
  }
  const handleExerciseSelected = id =>{
    setExercise(exercises.find(ex=>ex.id === id ))
  }


  
      return <Fragment>
            <Header />
            <Exercises 
              category={category}
              exercises={getExerciseByMuscles()}
              exercise={exercise}
              onSelect={handleExerciseSelected}
             />
            <Footer
              category={category}
              onSelect={handleCategorySelected}
              muscles={muscles}
            />
      </Fragment>
}

export default App;



