import React from 'react'
import '../styles/Game1.css'
import avengers from '../images/game1-img.webp'
import { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
// import capA from '../images/capA.png'
import capA from '../images/ironman-removebg-preview.png'
import Game3 from '../components/Game3.js'
import Result from '../components/Result'
function Game1() {
  let won=["congratulations you have won 2 infinity stones as appreceation for your bravery!!!",
"All the best for next level!!"]
let lost = ["Oops!!",
  "You were not able to pass the level!",
  "Better luck next time"
]
  const [q1,setQ1] = useState("")
  const[q2,setQ2] = useState("")
  const[q3,setQ3] = useState("")
  const[q4,setQ4] = useState("")

  let head = "level 1"
  let content=
  ["welcome to the level-1 of the hunt",
   "I am Captain America, help me to answer the questions asked based on the image...",
    "Rules to be follwed-",
    "rule1: Image will dissapear in 10 seconds observe image carefully",
    "Rule2: Answer the Questions within the time",
    "Rule3: You can only submit the answers one time",
    "Rule4: submit the answers in single word",
    "rule5: Answer Atleast 3 quetions to clear the level",
    "You will be navigated to the next level after the successful completion of the level or directed to the home page",
    "All the best!!"
]
  let ans1 = "2"
  let ans2 = "rocket"
  let ans3 = "endgame"
  let ans4 = "right"

  const [gameOver,setGameOver] = useState(false);
  const [win,setWin] = useState(false)
  const [time,setTime] = useState(130)
  const [totalCount,setTotalCount] = useState(0)

  // let navigate=useNavigate();
  // navigate("/about")
  const[reach,setReach]=useState(false)

  const [displa,setdisplay]=useState(false);
  let [count,setCount] = useState(0)


  const [allQ,setAllQ] = useState([])

  const question1=(e)=>{
      setQ1(e.target.value);
  }
  const question2=(e)=>{
    setQ2(e.target.value);
  }
  const question3=(e)=>{
    setQ3(e.target.value);
  }
  const question4=(e)=>{
    setQ4(e.target.value);
  }

  const allQuestions = (e)=>{
    e.preventDefault()
      setAllQ([q1,q2,q3,q4]);
      setdisplay(true);

  }
  useEffect(()=>{
    if(time ==1){
      setGameOver(true)
      setReach(false)
    }
    if(reach)
    {
      setTimeout(()=>{
        setTime((e)=>(e-1))
      },1000);
    }

  },[time,reach])


  useEffect(()=>{
    if(ans2 === allQ[1]){
      setCount((e)=>e+1)
    }
    if(ans1 === allQ[0]){
      setCount((e)=>e+1)
    }

    if(ans3 === allQ[2]){
      setCount((e)=>e+1)
    }

    if(ans4 === allQ[3]){
      setCount((e)=>e+1)
    }

    if(displa)
    setGameOver(true)

  },[displa])
  
  const [display,setDisplay] = useState(true);
  useEffect(()=>{
    if(reach==true){
    const timeout = setTimeout(()=>{
      setDisplay(false)
    },10000)
  }
  },[reach])
  let navigate = useNavigate()

  const closeModal = ()=>{
    setReach(true)
    console.log("venkat")
  }
  useEffect(()=>{
    if(count >=3){
      setWin(true)
    }
  },[gameOver])

  return (
    <div className='game1-main'>
          <Game3 content={content} close={closeModal} img = {capA} game= "1" head={head}></Game3>

      <h1 className="game1-header">
        enter to the level1
      </h1>
     
      <div className="game1-content">
      {display 

      ?
      <div>
      <p className="game1-content">observe the image carefully time ends in 10 seconds....</p>
       <div className='game1-img'><img className='game1-img' src={avengers} alt="" /></div>
      </div>
      : <div>
        <p>CountDown starts {time}</p>
          <form onSubmit={allQuestions} className="game1-form">
          <div className="form-content">
          <div className='game1-qtn'>
            <h3 className="game1-qtn1">Number of guardians present in the picture</h3>
            <input value={q1} onChange={question1} type="text" className="game1-ans1" />
            <p className="game1-hint">hint: they dont look like humans</p>
            </div> 

            <div className='game1-qtn'>
            <h3 className="game1-qtn1">what is the name of the raccoon in the picture</h3>
            <input value={q2} onChange={question2} type="text" className="game1-ans2" />
            <p className="game1-hint">hint: It can be sent to space</p>
            </div>

            <div className='game1-qtn'>
            <h3 className="game1-qtn1">Name the movie</h3>
            <input value={q3} onChange={question3} type="text" className="game1-ans2" />
            <p className="game1-hint">hint: It can be the end of Avengers</p>
            </div>

            <div className='game1-qtn'>
            <h3 className="game1-qtn1">which hand does black widow kept on her shoulder</h3>
            <input value={q4} onChange={question4} type="text" className="game1-ans2" />
            </div>


          </div>
           
            <button>submit</button>
          </form>

          {/* <h3 className='game1-count'>{count}</h3> */}
          {
            win && <Result res="true" content={won} game="1" img ={capA} stat="won"></Result>
          }
          { !win &&  gameOver && <Result res="false" content = {lost} img={capA} game="1" stat="lost"></Result>}
        </div>
      }


      </div>
    </div>
  )
}

export default Game1