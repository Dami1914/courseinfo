import { useState } from "react";

function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };


  function Header({ course }) {
    return <h1>{course.name}</h1>;
  }

  function Content({ parts }) {
    function Part({ part }) {
      return (
        <p>
          {part.name} {part.exercises}
        </p>
      );
    }

    return (
      <div>
        <Part part={parts[0]} />
        <Part part={parts[1]} />
        <Part part={parts[2]} />
      </div>
    );
  }

  function Total({ parts }) {
    console.log(parts[1].exercises);
    return (
      <p>
        Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
    );
  }

  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
}

export default App;
