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
  const exercises =  getExerciseByMuscles();
      return <Fragment>
            <Header />
            <Exercises exercises={exercises} />
            <Footer 
              muscles={muscles}
            />
      </Fragment>
}

export default App;



