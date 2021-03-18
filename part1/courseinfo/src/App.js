import React from 'react'


// const Title = (props) => {
//     return <h1>{props.course}</h1>
// };
const Title = ({course}) => <h1>{course}</h1>


const Parrafo = (props) => <p>{props.part} {props.exercise}</p>

const Total = (props) => {
  return <p>Number of exercises {props.total[0] + props.total[1] + props.total[2]}</p>;
};

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course}/>
      <Parrafo part={part1} exercise={exercises1}/>
      <Parrafo part={part2} exercise={exercises2}/>
      <Parrafo part={part3} exercise={exercises3}/>
      <Total total={[exercises1,exercises2,exercises3]}/>
      
    </div>
  )
}

export default App