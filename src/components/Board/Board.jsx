import React from "react";
import "./Board.css";
import Box from "../Box/Box";

const Board = ({board, onClick}) => {
  return (
  <div className='board'>

    {board.map((item, id)=>(
      <Box key={id} value={item} onClick={()=>item === null && onClick(id)}/>
    ))}
    
  </div>
  )
};

export default Board;
