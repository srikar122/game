import React from 'react'
import '../styles/Game2.css'
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Game3 from '../components/Game3.js'
import thor from '../images/ironman.png'
// import Result from '../components/Result'
import Result from '../components/Result'

function Game2() {
    let won=["congratulations you have won 2 infinity stones as appreceation for your bravery!!!",
    "All the best for next level!!"]
    let lost = ["Oops!!",
      "You were not able to pass the level!",
      "Better luck next time"
    ]
    let head = "level-1"
    let content=[
        "welcome to the level-2 ",
        "Iam Iron Man,I need help to decode the names of avengers to find a infinity stone",
        "Rules for the Level2- ",
        "Rule1: Two encrypted names of avengers are provided",
        "Rule2: based on the hints find their names",
        "Rule3: Finally answer the question and name the stone",
        "Rule4: Finish the game in 2 attempts",
        "No time limit",
        "You will be navigated to the next level after the successful completion of the level or directed to the home page",
        "All the best!!"
    ]
    let [counter,setCounter] = useState(0)
    let [text1,setText1] = useState("")
    let [win,setWin] = useState(false)
    let [gameOver,setGameOver] = useState(false)
    let ans = "soul"
    let navi = useNavigate()
    useEffect(()=>{
        if(counter == 0 ){
            console.log("driakr")
        }
        if(counter == 1){
            if(ans == text1.toLowerCase()){
                setWin(true)
                setGameOver(true)
            }
        }
        else if(counter == 2){
            if(ans == text1.toLowerCase()){
                setWin(true)
                setGameOver(true)
            }
            else{
                setGameOver(true)
            }
        }
        else if(counter == 3){
            setGameOver(true)
        }
        
    },[counter])

    let check = (e)=>{
        e.preventDefault()
        setCounter(e => e+1)

    }
    let update = (e)=>{

           setText1(e.target.value) 
    }
    return (
        <div className='game2-main'>
                      <Game3 content={content} img = {thor}head={head}></Game3>
            <div className="game2-left">

                <h1 className='game2-head1'>
                    encrypted code1
                </h1>
                <p className="game2-p1">7 16 13 18 21</p>
                <p className="game2-hint">HINT:Who is known as Scarlett, but not definitely a WITCH?</p>

                <h1 className='game2-head2'>
                    encrypted code2
                </h1>
                <p className="game2-p2">19 5 26 11 19</p>
                <p className="game2-hint">HINT: In The "endGame",I turned into a rutheless vigilante and Iam famous for the dialogue"Dont give me hope!!"</p>
                <p className="final-hint">Final clue-(the letters in the word are encrypted by adding or subtracting four to them join them to find two names)</p>

            </div>
            <div className="game2-right">
                <h1 className="qtn">Name the stone which is brought by these two avengers from past</h1>
 
                      <p className="right-hint">hint : it is something which leaves the body after death</p>

                    <form onSubmit={check} action="">
                        <h1 className="answer">enter the answer</h1>

                        <input onChange={update} type="text" />
                        <button className='game2-btn'> let's find</button>
                    </form>
                    <h5>chances left: {2-counter}</h5>
            </div>
            {
            win && <Result res="true" content={won} game="2" img ={thor} head={head} stat="won"></Result>
          }
          { !win &&  gameOver && <Result res="false" content = {lost} img={thor} game="2" stat="lost"></Result>}
        </div>
    )
}

export default Game2