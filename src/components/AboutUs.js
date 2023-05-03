import React from 'react'
import '../styles/AboutUs.css'
import shield from '../images/shield1.png'
import {useNavigate} from 'react-router-dom'

function AboutUs() {
  let navi = useNavigate()
  let lets = ()=>{
    navi("/game1")
  }
  return (
    <div>
      <div className="about-main">
        <div className="about-left">
          <h1 className="about-head">AVENGERS HUNT</h1>
          <h1 className="about-welcome">Welcome to the Marvel Avengers Treasure Hunt, an online adventure that will put your 
          knowledge of the Marvel Cinematic Universe to the test! <br></br><br></br>
          In this game,

           you'll take on the role of an intrepid adventurer seeking to uncover a valuable treasure hidden somewhere in the world of the Avengers.
           Along the way, solve the puzzles and reach ultimate goal.
          </h1>
          <h1 className="p about-content">
           If you successfully complete a level, you'll be awarded two Infinity Stones as your prize. But be warned - if you answer a question incorrectly, you'll be sent back to the first level to try again.
Good luck, adventurer! We hope you emerge victorious in your quest to collect the Infinity Stones. <br></br> <span style={{"color":"green","fontSize":"30px"}}>press lets start to start the game!!</span>
            </h1>
        </div>
        <div className="div about-right">
          <img className='about-img' src={shield} alt="" />
          <button onClick={lets} className="about-but">lets start</button>
        </div>
      </div>
    </div>

  )
}

export default AboutUs