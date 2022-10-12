import React from 'react';
import { Link } from "react-router-dom";
import Button from '../components/ui-components/button'

export default function mainContainer() {
  return (
    <div class='main-container'>
      <Link to="/search"><Button title='Search!' /></Link>
      <Link to="/game"><Button title='Play!'/></Link>
    </div>
  );
}
