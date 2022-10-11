import React from 'react';
import { Link } from "react-router-dom";
import Button from '../ui-components/button'

export default function playAgain(props) {
  return (
    <div className="playagainbutton">
      <Button title='Again!' onClick={props.resetGame} />
      <Link to="/"><Button title='Go Back!' /></Link>
    </div>
  );
}
