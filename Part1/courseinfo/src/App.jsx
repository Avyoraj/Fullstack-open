const Header = (props) => {
  console.log({Header: props.course})
  return <h1>{props.course}</h1>
  
}

const Part = (props) => {
  return <p>{props.name} {props.exercises}</p>
}

const Content = ({ parts }) => {
  console.log( { Content: parts } )
  return (
    <div>
     { parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

const Total = (props) => {
  const total = props.parts.reduce((sum, part) => sum + part.exercises, 0)
  console.log({total})
  return <p>Number of exercises {total}</p>
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}


export default App