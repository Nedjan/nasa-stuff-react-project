import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function searchForm(props) {
  const [query, setQuery] = useState('');

  // This lets the SearchImages component know to use the query here for the search action
  const handleSubmit = event => {
    event.preventDefault()
    props.fetchImages(query)
  }
  // Renders a form to search
  return (
    <div className="searchcontent">
      <h3 className="searchtext">Enter a Celestial Term:</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={event => setQuery(event.target.value)} />
        <Link to="/search" onClick={handleSubmit}><button id="searchformbutton">Submit</button></Link>
      </form>
    </div>
  )
}
