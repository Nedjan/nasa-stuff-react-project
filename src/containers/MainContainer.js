import React from 'react';
import { Link } from "react-router-dom";


import SearchButton from '../components/search/SearchButton'
import PlayButton from '../components/game/PlayButton'


export default function mainContainer() {
  return (
    <div>
      <Link to="/search"><SearchButton /></Link>
      <Link to="/game"><PlayButton /></Link>
    </div>
  );
}
