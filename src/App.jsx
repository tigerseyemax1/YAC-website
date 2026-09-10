// importing the UseState function
import { useState } from 'react'
import './App.css'
import youthactioncayman from './assets/youthactioncayman.jpg'
import yacmeeting1 from './assets/yacmeeting1.jpg'
import mangrove from './assets/mangrove.jpg'
import { animateForward1, animateBackward1, animateForward2, animateBackward2} from './gsapFunctions'
import { onUserEmailSubmit } from './firebase.js'


const LandingPage = () => {

  return(
    <div id = "smooth-wrapper">
      <div id = "smooth-content">

      <nav className = 'navbar'>
        <p>
          <a href = "YAC"><img src = {youthactioncayman} alt="YAC"/></a>
        </p>
          <a href = "About" className = "navText">About</a>
          <a href = "Events" className = "navText">Events</a>
          <a href = "Resources" className = "navText">Resources</a>
          <a href = "Donate" className = "navText" >Donate</a>
          <a href = "Join the community" className = "navText">Join the community</a>
      </nav>

      <div className = "imageGSAP"
           onMouseEnter = {() => { animateForward1(); }}
           onMouseLeave = {() => { animateBackward1(); }}
           >
        <img id="img" src = {yacmeeting1} alt = "YAC"></img>
      </div>

      {/* notice that the functions are now numbered - each image will have to have its own separate function pair because:
      the gsap.to() function is called on the div container name and each image div container has a unique name */}

      <div className = "img2"
           onMouseEnter = {() => { animateForward2(); }}
           onMouseLeave = {() => { animateBackward2(); }}
           >
        <img id="image2" src = {mangrove} alt = "YAC"></img>
      </div>

      <div>
        <form>
          <input type="text" id = "email" placeholder= "name@example.com"/>
          <button id='submit' type="input" onClick = {onUserEmailSubmit}>Join!</button>
        </form>
      </div>
      <h1 class ="title">
        Youth Action Cayman
      </h1>

      </div>
    </div>
  )
}


export default LandingPage;