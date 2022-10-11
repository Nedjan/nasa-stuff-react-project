import React from 'react'

export default function button(props) {
  return (
    <div className="buttoncontainer">
      <button onClick={props.onClick}>{props.title}</button>
    </div>
  );
}
