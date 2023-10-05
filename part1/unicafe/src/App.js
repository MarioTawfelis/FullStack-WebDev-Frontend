import { useState } from '../../anecdotes/node_modules/@types/react/ts5.0'

const Title = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Statistics = ({ statistics }) => {
  if(statistics[3] === 0){
    return <p>No feedback given.</p>
  }

  return (
    <table>
        <tbody>
        <StatisticLine text={"Good"} value={statistics[0]}/>
        <StatisticLine text={"Neutral"} value={statistics[1]}/>
        <StatisticLine text={"Bad"} value={statistics[2]}/>
        <StatisticLine text={"Total"} value={statistics[3]}/>
        <StatisticLine text={"Average"} value={statistics[4]}/>
        <StatisticLine text={"Positive"} value={statistics[5]}/>
      </tbody>
    </table>

  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
       <td>{text}</td> 
       <td>{value}</td>
    </tr>
   
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = (good - bad)/total
  const positive = (good/total)*100

  const statistics = [good, neutral, bad, total, average, positive]

  return (
    <div>
      <Title title={"Give Feedback"}/>

      <Button handleClick={() => setGood(good + 1)} text={"Good"}/>
      <Button handleClick={() => setNeutral(neutral + 1)} text={"Neutral"}/>
      <Button handleClick={() => setBad(bad + 1)} text={"Bad"}/>
      
      <Title title={"Statistics"}/>

      <Statistics statistics={statistics} />
    </div>
  )
}

export default App

