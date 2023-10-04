import React from 'react'
import './Scoreboard.css'

const Scoreboard = ({xScore, oScore, tieScore}) => {
  return (
    <div className='scoreboard'>
        <div className="x-score">X - {xScore}</div>
        <div className="o-score">O - {oScore}</div>
        <div className="tie-score">Tie - {tieScore}</div>
    </div>
  )
}

export default Scoreboard