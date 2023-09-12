import React from "react";

function Course({course}){
    return(
      <>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts}/>
      </>
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
    console.log(part)
    return (
      <p>
        {part?.name} {part?.exercises}
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
  
  export default Course;
  