import { useState } from 'react'
import './App.css'
import Board from './components/Board/Board'
import Scoreboard from './components/Scoreboard/Scoreboard'

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [xisplaying, setXisplaying] = useState(true)
  const [xScore, setXscore] = useState(0);
  const [oScore, setOscore] = useState(0);
  const [tieScore, setTieScore] = useState(0);
  const [gameover, setGameover] = useState(false)

  const winner_condition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const handleBoxClick = (boxid)=>{
    const updateBoard = board.map((value, id)=>{
      if(id === boxid){
       return xisplaying === true ? "x" : "o"
      }
      else{
        return value
      }
    })
    setBoard(updateBoard);
    const winner = checkwinner(updateBoard);
    setXisplaying(!xisplaying);
    

    if(winner){
      if(winner === "x"){
        setGameover(true)
        setXscore(xScore + 1);
      }
      else{
        setOscore(oScore + 1);
        setGameover(true)
      }
    }

    let filled = true;
    updateBoard.map((item)=>{
      if(item === null){
        filled = false
      } 
    });

    if(filled && winner !== "x" && winner !== "o"){
      filled = true;
      setTieScore(tieScore + 1);
    }
  }
    
  const checkwinner = (updateBoard) =>{
    for(let i=0; i<winner_condition.length; i++){
      const [x, y, z] = winner_condition[i];

      if(updateBoard[x] && updateBoard[x] === updateBoard[y] && updateBoard[y] === updateBoard[z])
      {
        return updateBoard[x];
      }
    }
  }
  
  const resetGame = () =>{
    setGameover(false);
    setBoard(Array(9).fill(null))
  }

  return (
   <div className='App'>
    <Scoreboard xScore={xScore} oScore={oScore} tieScore={tieScore}/>
    <Board board={board} onClick={gameover === true ? null : handleBoxClick}/>

    <button className='reset' onClick={resetGame}>Play Again</button>
    
   </div>
  )
}

export default App
