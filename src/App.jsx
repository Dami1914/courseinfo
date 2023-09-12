import { useState } from "react";

function App() {
  
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }
  return ( 
    <Course course={course}/>
  )
}

//Total Component
function Total({parts}) {

  console.log(parts)

  const sum = (a,b)=>{
     return a + b.exercises;
  }
  return (
    <strong>
      Total of {parts.reduce(sum,0)} exercises
    </strong>
  );
}


//Part Component
function Part({ part }) {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
}

//Content Component
function Content({ parts }) {
  return (
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
      <Part part={parts[3]} />
    </div>
  );
}

//Header Component
function Header({ course }) {
  return <h1>{course.name}</h1>;
}

//Course Component
function Course({course}){
  return(
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </>
  )
}
export default App;
