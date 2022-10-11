import React from 'react'

export default function button(props) {
  return (
    <div className="buttoncontainer">
      <button>{props.title}</button>
    </div>
  );
}
