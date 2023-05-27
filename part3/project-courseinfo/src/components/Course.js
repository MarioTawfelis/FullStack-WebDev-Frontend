const Header = (props) => {
    return (
      <h2>{props.course.name}</h2>
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

  export default Course;