import React, { useState, useEffect } from 'react';

import { useImages } from '../apis/nasa';
import PlayAgain from '../components/game/PlayAgain'
import Button from '../components/ui-components/button';

export default function game() {
  // state tracks the current image from the api, the item the player guessed, attempts played, and whether the game has been played once

  const [item, setItem] = useState("");
  const [images, finishedFetching] = useImages(item);
  const [image, setImage] = useState("");
  const [gamePlayed, setGamePlayed] = useState(false);
  const [gameCount, setGameCount] = useState(0);
  const [gameReset, setGameReset] = useState(false);
  const [correctGuess, setCorrectGuess] = useState(false);
  const [correctStreak, setCorrectStreak] = useState(0);
  const [highscore, setHighScore] = useState(0);
  const spaceKeywords = ["moon", "earth", "jupiter", "saturn", "pluto", "mars", "venus"]

  useEffect(() => {
    setItem(spaceKeywords[Math.floor(Math.random() * spaceKeywords.length)]);
    setGameCount(gameCount + 1);
    setGamePlayed(false);
  }, [gameReset]);

  useEffect(() => {
    if (!finishedFetching || images.length === 0) {
      setImage("");
      return;
    }
    let randomNumber = Math.floor(Math.random() * images.length);
    setImage(images[randomNumber].links[0].href);
  }, [item, gameReset, images, finishedFetching])

  //the game choices are rendered
  const answerChoices = spaceKeywords.map(word =>
    <div className="guessing" key={word}>
      <Button onClick={ e => guessClicked(word)} id={word} title={word} />
    </div>
  );

  const playAgainButton = gamePlayed ? <PlayAgain resetGame={() => setGameReset(!gameReset)} /> : null;

  const resultText = () => {
    if (!gamePlayed) return null;
    if (correctGuess) {
      return "You're Right!";
    } else {
      return "Wrong, Try Again. Correct Answer: " + item;
    }
  }

  //the player chooses one item and this function determines if it's a win
  const guessClicked = (word) => {
    setCorrectGuess(item === word);
    setGamePlayed(true);
    if (item === word) {
      setCorrectStreak(correctStreak + 1);
    } else {
      if (correctStreak > highscore) {
        setHighScore(correctStreak);
      }
      setCorrectStreak(0);
    }
  }

  const renderHighscore = () => {
    const score = highscore > 0 ? <div>Current Highscore: {highscore}</div> : null;
    const streak = correctStreak > 0 ? <div>Current Streak: {correctStreak}</div> : null;
    return <div class='highscore'>{score}{streak}</div>
  }

  //Renders the game image, the choices, and determines if the game is done and can be played again
  return (
    <div className="game-container">
        <div className="titlegame">Guess which one is associated with this image:</div>
        <div class='image-container'>
          {image ? <img src={image} id="namegameimage" alt="universe related thingy" /> : null}
          {<div className="namegamebutton">{answerChoices}</div>}
          {renderHighscore()}
        </div>
        {resultText()}
        {playAgainButton}
    </div>
  );
}
