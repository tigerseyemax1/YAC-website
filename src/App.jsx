// importing the UseState function
import { useState } from 'react'
import './App.css'
import youthactioncayman from './assets/youthactioncayman.jpg'
import yacmeeting1 from './assets/yacmeeting1.jpg'
import { animateForward, animateBackward } from './gsapFunctions'
import axios from 'axios'

/* GIT FETCH TEST */

/*
axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data 
  console.log(notes)
})

const promise2 = axios.get('http://localhost:3001/foobar');
console.log(promise2);
*/

const LandingPage = () => {

  return(
    <div id = "smooth-wrapper">
      <div id = "smooth-content">

      <nav className = 'navbar'>
        <a href = "YAC"><img src = {youthactioncayman} alt="YAC"/></a>
        <ul>
          <li><a href = "About" className = "navText">About</a></li>
          <li><a href = "Events" className = "navText">Events</a></li>
          <li><a href = "Resources" className = "navText">Resources</a></li>
          <li><a href = "Donate" className = "navText" >Donate</a></li>
          <li><a href = "Join the community" className = "navText">Join the community</a></li>
          

        </ul>
      </nav>

      <div className = "imageGSAP"
           onMouseEnter = {() => { animateForward(); }}
           onMouseLeave = {() => { animateBackward(); }}
           >
        <img src = {yacmeeting1} alt = "YAC"></img>
      </div>

      </div>
    </div>
  )
}

<<<<<<< HEAD

export default LandingPage
=======
export default LandingPage;
>>>>>>> c0bc0a9 (YO TYLER)





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
