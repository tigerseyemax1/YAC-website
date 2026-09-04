// importing the UseState function
import { useState } from 'react'
import './App.css'
import youthactioncayman from './assets/youthactioncayman.jpg'
import yacmeeting1 from './assets/yacmeeting1.jpg'
import { animateForward, animateBackward } from './gsapFunctions'
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
           onMouseEnter = {() => { animateForward(); }}
           onMouseLeave = {() => { animateBackward(); }}
           >
        <img src = {yacmeeting1} alt = "YAC"></img>
      </div>

      <div>
        <form onSubmit = {onUserEmailSubmit} id = "emailForm">
          <input type="text" id = "email"/>
        </form>
      </div> 

      </div>
    </div>
  )
}


export default LandingPage;