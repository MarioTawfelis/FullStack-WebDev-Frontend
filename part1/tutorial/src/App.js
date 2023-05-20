const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}! You are {props.age} years old.</p>
        </div>

    )
}

const App = () => {
    const name = "Mario"
    const age = "25"
    return (
        <>
            <h1>Greetings</h1>
            <Hello name={name} age={age}/>
        </>
    )
}

export default App;
