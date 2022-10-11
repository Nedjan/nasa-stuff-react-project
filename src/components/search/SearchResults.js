import React from 'react';
import ImageBox from './ImageBox';


export default function searchResults(props) {
  const noResults = <div className="noresult">no results yet</div>;
  const results = props.images.length > 0 ? props.images.map(image => <ImageBox image={image} />) : noResults;

  return (
    <div className="searchstuff">
      {results}
    </div>
  );
}
