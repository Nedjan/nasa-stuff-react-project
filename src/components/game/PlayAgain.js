import React from 'react';
import { Link } from "react-router-dom";


export default function playAgain(props) {
  return (
    <div className="playagainbutton">
      <button onClick={props.resetGame}>Again!</button>
      <Link to="/"><button className="back">Go Back</button></Link>
    </div>
  );
}
