import React, { useState } from 'react';
import SearchForm from '../components/SearchForm'
import SearchResults from '../components/SearchResults'
import $ from 'jquery'

export default function search() {
  const [images, setImages] = useState([]);

  //The NASA API is called and then the results go to the state
  const fetchImages = (query = "") => {
    $.ajax({
      url: `https://images-api.nasa.gov/search?q=${query}`
    }).then(json => {
      setImages(json.collection.items);
    })
  }

  return (
    <div>
     <SearchForm fetchImages={fetchImages} />
     <SearchResults images={images} />
    </div>
  );
}
