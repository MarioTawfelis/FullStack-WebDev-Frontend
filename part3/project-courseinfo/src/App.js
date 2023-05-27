const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Content = ({ course }) => {
  return (
      <div>
        {course.parts.map(part =>
          <Part key={part.id} name={part.name} exercises={part.exercises}/>
        )}
      </div>
  )
}

const Total = ({ course }) => {

  const total = course.parts.reduce((s, p) => {
     return s + p.exercises 
  },0)

  console.log(total)

  return (
    <b>Number of exercises {total}</b>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course}/>

      <Content course={course}/>

      <Total course={course}/>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        id: 1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id: 2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id: 3,
        name: 'State of a component',
        exercises: 14
      },
      {
        id: 4,
        name: 'Conditional Rendering',
        exercises: 5
      }
    ]
  }

  return <Course course={course}/>
}

export default App;
