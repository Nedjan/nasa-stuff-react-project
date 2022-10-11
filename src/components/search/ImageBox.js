import React from 'react';
import moon from '../../images/moon.jpg'

export default function searchResults(props) {
  //this function helps when presenting the cards - if the title and description are the same, it doesn't show the description
  const sameContent = (a, b) => {
    if (a === b) {
      return null
    } else {
      return b
    };
  }

  // This function determines if an image is present in the object and if not, renders a default image
  const hasImage = (result) => {
      if (typeof result !== 'undefined') {
        return result[0].href
      } else {
        return moon
      }
    }

  // This determines if the title exists, much like the function above
  const hasContent = (result) => {
      if (typeof result !== 'undefined') {
        return result[0].title
      } else {
        return "No content"
      }
    };

  return (
    <div className="cardborder">
      <div className="leftbox">
        <div className="image"><img src={hasImage(props.image.links)} alt="" /></div>
      </div>
      <div className="rightbox">
        <div className="title">{hasContent(props.image.data)}</div>
      </div>
      <div className="clearfix">
        <div className="bottombox">
          <div className="desc">
            {sameContent(props.image.data[0].title, props.image.data[0].description)}
          </div>
        </div>
      </div>
      <div className="creator">
        {props.image.data[0].secondary_creator}
      </div>
    </div>
  );
}
