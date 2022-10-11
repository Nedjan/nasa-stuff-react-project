import React, { useState } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import $ from 'jquery'

import Game from './components/Game'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'

import './App.css';

import Header from './containers/Header'
import MainContainer from './containers/MainContainer'

export default function() {

  const [images, setImages] = useState([]);

//The NASA API is called and then the results go to the state
  const fetchImages = (query = "") => {
    $.ajax({
      url: `https://images-api.nasa.gov/search?q=${query}`
    }).then(json => {
      setImages(json.collection.items);
    })
  }

  //the welcome component has the header/navbar and the button to choose to search is toggled
  return(
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={MainContainer} />

        <Route exact path="/game" component={Game} />

        <Route
          path="/search"
          render={(props) => <SearchForm {...props} fetchImages={fetchImages} />}
        />
        <Route
          path="/search"
          render={(props) => <SearchResults {...props} images={images} />}
        />
      </div>
    </BrowserRouter>
  )
}
