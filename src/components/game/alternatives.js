import React from 'react';
import Button from '../ui-components/button'

export default function alternatives(props) {
  const answerChoices = props.keywords.map(word =>
    <div className="guessing" key={word}>
      <Button onClick={() => props.guessClicked(word)} id={word} title={word} />
    </div>
  );
  return (
    <div className="namegamebutton">
      {answerChoices}
    </div>
  )
}
