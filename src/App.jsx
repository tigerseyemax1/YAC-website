// importing the UseState function
import { useState } from 'react'
import './App.css'
import youthactioncayman from './assets/youthactioncayman.jpg'

const LandingPage = () => {
  return(
    <div>
      <nav className = 'navbar'>
        <a href = "YAC"><img src = {youthactioncayman} alt="YAC"/></a>
        <ul>
          <li><a href = "About">About</a></li>
          <li><a href = "Events">Events</a></li>
          <li><a href = "Resources">Resources</a></li>
          <li><a href = "Donate">Donate</a></li>
          <li><a href = "Join the community">Join the community</a></li>

        </ul>
      </nav>
    </div>
  )
}

export default LandingPage





/* const App = () => {
  // function returns array with two values
  // setCounter is a function that will be used to modify the state
  // when called it re-renders the component which means that the function body of the component function gets re-executed 
  const [ counter, setCounter ] = useState(0)

  const Display = (props) => {
    return (
      <div>{props.counter}</div>
    )
  }

  return (
    <div>
      <button onClick = {() => setCounter(counter + 1)}>
        plus
      </button>
      <h1>
        counter is currently {counter}
      </h1>
    </div>
  )
}

export default App

*/



/*
// destructuring
const Hello = ({name, age}) => {

  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }

  // this is unusable after destructuring!
  // console.log(props)

  console.log(age, name)

  return (
    <div>
      <p>Hello {name} you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Pater'
  const age = 10

  return (
    <div>
      <h1>
        Greetings!
      </h1>
      <Hello name = 'Daniel' age = {17}/>
      <Hello name = {name} age = {age}/>
   
    </div>
      
  )
}

export default App
*/