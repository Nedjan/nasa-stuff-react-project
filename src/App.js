import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Search from './routes/search';
import Game from './routes/game';

import './App.css';

import Header from './containers/Header'
import MainContainer from './containers/MainContainer'

export default function() {
  //the welcome component has the header/navbar and the button to choose to search is toggled
  return(
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/search" component={Search} />
      </div>
    </BrowserRouter>
  )
}
