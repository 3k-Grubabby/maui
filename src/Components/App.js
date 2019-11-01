import React,{Fragment,useState,useEffect} from 'react';
import {Header,Footer} from './Layouts';
import Exercises from './Exercises';
import {muscles,exercises} from '../store'

const App = ()=>{
  const [category,setCaregory] = useState('');
  const [exercise,setExercise] = useState({});
  const [data,setData] = useState([]);
  const [editMode,setEditMode] = useState(false);
  //
  useEffect(()=>{
            const init =   muscles.reduce((exercises,category)=>{
                return {...exercises,[category]:[]}
            },{});
            const d =  Object.entries(
                exercises.reduce((exercises,exercise)=>{
                    const {muscles} = exercise
                    exercises[muscles] = [...exercises[muscles],exercise]
                    return exercises
                },init)
            );
            setData(d)
  },[exercises]);


  // const getExerciseByMuscles = ()=>{
  //     const initExercise = muscles.reduce((exercises,category)=>({
  //       ...exercises,
  //       [category]:[]
  //     }),{})
  //
  //     return Object.entries(
  //         exercises.reduce((exercises,exercise)=>{
  //         const {muscles} = exercise
  //         exercises[muscles] = [...exercises[muscles],exercise]
  //         return exercises
  //       },initExercise)
  //     )
  // };

  const handleCategorySelected = (category)=>{
    setCaregory(category)
  };
  //切换
  const handleExerciseSelected = id =>{
    setExercise(exercises.find(ex=>ex.id === id ))
  };

  //创建
  const handleExerciseCreate = (exercise)=>{

      // console.log(exercises)
      // // console.log(exercises)
      // exercises = [...exercises,{...exercise}];


          // const initExercise = muscles.reduce((exercises,category)=>({
          //   ...exercises,
          //   [category]:[]
          // }),{})
          //
          // const s = Object.entries(
          //     [exercise].reduce((exercises,exercise)=>{
          //     const {muscles} = exercise
          //     exercises[muscles] = [...exercises[muscles],exercise]
          //     return exercises
          //   },initExercise)
          // );
     // console.log(s);
     //
     // const a =  data.map((item)=>{
     //      if(item[0] === exercise.muscles){
     //        console.log(item[1])
     //      }
     //  })
     //
     //  console.log(a)






      // setData([...data,{...s}]);

  };

  const handleExerciseDelete = id =>{
      setData(data.filter(ex => ex.id !== id))
  }
  const handleExerciseSelectEdit = id =>{
    setExercise(data.find(ex=>ex.id === id ))
    setEditMode(true)
  }
   const handleExerciseEdit = exercise =>{
      setData([data.filter(ex=>ex.id !== exercise.id)])
   }
  
      return <Fragment>
            <Header 
              muscles={muscles}
              onExerciseCreate={handleExerciseCreate}
            />
            <Exercises 
              category={category}
              exercises={data}
              exercise={exercise}
              editMode={editMode}
              muscles={muscles}
              onSelect={handleExerciseSelected}
              onDelete={handleExerciseDelete}
              onSelectEdit={handleExerciseSelectEdit}
              onEdit={handleExerciseEdit}
             />
            <Footer
              category={category}
              onSelect={handleCategorySelected}
              muscles={muscles}
            />
      </Fragment>
}

export default App;



