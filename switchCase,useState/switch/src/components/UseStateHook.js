import React, { useState } from 'react'

function UseStateHook() {
  //let score = 0;
let [score,setScore] = useState(0);
let [balls,setBalls] = useState(0);
let [singles,setSingles] = useState(0);
let [doubles,setDoubles] = useState(0);
let [fours,setFours] = useState(0);
let [sixes,setSixes] = useState(0);
let [wickets,setWickets] = useState(0);
let [nobs,setNobs] = useState(0);
  
  return (
    <div className="score">
      <h1>Score:{score}/{wickets}</h1>
      <h1>Overs:{parseInt(balls/6)}.{balls%6}</h1>
      <h1>Singles:{singles}</h1>
      <h1>Doubles:{doubles}</h1>
      <h1>Fours:{fours}</h1>
      <h1>Sixes:{sixes}</h1>
      <h1>Wickets:{wickets}</h1>
      <h1>No Balls:{nobs}</h1>

      <button type='button' onClick={()=>{
        setScore(score +1);
        setBalls(balls +1);
        setSingles(singles +1);
    
      }}>single</button>

      <button type='button' onClick={()=>{
        setScore(score +2);
        setBalls(balls +1);
        setDoubles(doubles+1)

      }}>Doubles</button>

      <button type='button' onClick={()=>{
        setScore(score +4);
        setBalls(balls +1);
        setFours(fours +1);

      }}>Fours</button>
      <button type='button' onClick={()=>{
        setScore(score +6);
        setBalls(balls +1);
        setSixes(sixes +1);

       }}>Sixes</button>
       <button type='button' onClick={()=>{
        setWickets(wickets +1);

       }}>Wickets</button>  
       <button type='button' onClick={()=>{
        setScore(score +1);
        setNobs(nobs+1)

       }}>No Balls</button>
      {/*<button type='button' onClick={()=>{
        score++;
        console.log(score);
      }}>Increment</button>
      <button type='button' onClick={()=>{
        score--;
        console.log(score);
      }}>Dncrement</button>*/}

     

    </div>
  )
}

export default UseStateHook