import React,{Fragment,useState,useEffect} from 'react';
import {Header,Footer} from './Layouts';
import Exercises from './Exercises';
import {muscles,exercises} from '../store'


const App = ()=>{
  const [category,setCaregory] = useState('');
  const [exercise,setExercise] = useState({});
  const [data,setData] = useState(exercises);


  const getExerciseByMuscles = ()=>{
      const initExercise = muscles.reduce((exercises,category)=>({
        ...exercises,
        [category]:[]
      }),{})


      return Object.entries(
          data.reduce((exercises,exercise)=>{
          const {muscles} = exercise
          exercises[muscles] = [...exercises[muscles],exercise]
          return exercises
        },initExercise)
      )
  };

  const handleCategorySelected = (category)=>{
    setCaregory(category)
  };
  const handleExerciseSelected = id =>{
    setExercise(data.find(ex=>ex.id === id ))
  };
  const handleExerciseCreate = (exercise)=>{
      setData([...exercises,exercise]);
  };

  const handleExerciseDelete = id =>{
      setData(data.filter(ex => ex.id !== id))
  }

  
      return <Fragment>
            <Header 
              muscles={muscles}
              onExerciseCreate={handleExerciseCreate}
            />
            <Exercises 
              category={category}
              exercises={getExerciseByMuscles()}
              exercise={exercise}
              onSelect={handleExerciseSelected}
              onDelete={handleExerciseDelete}
             />
            <Footer
              category={category}
              onSelect={handleCategorySelected}
              muscles={muscles}
            />
      </Fragment>
}

export default App;



