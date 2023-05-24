import { useState } from 'react'

const Title = ({ title }) => {
  console.log(title)
  return (
    <h1>{title}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Statistics = ({ text, count }) => {
  return (
    <p>{text} {count}</p>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <Title title={"Give Feedback"}/>

      <Button handleClick={() => setGood(good + 1)} text={"Good"}/>
      <Button handleClick={() => setNeutral(neutral + 1)} text={"Neutral"}/>
      <Button handleClick={() => setBad(bad + 1)} text={"Bad"}/>
      
      <Title title={"Statistics"}/>

      <Statistics text={"Good"} count={good}/>
      <Statistics text={"Neutral"} count={neutral}/>
      <Statistics text={"Bad"} count={bad}/>

    </div>
  )
}

export default App

