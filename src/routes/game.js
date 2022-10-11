import React, { useState, useEffect } from 'react';
import $ from 'jquery'

import PlayAgain from '../components/game/PlayAgain'

export default function game() {
  // state tracks the current image from the api, the item trhe player guessed, attempts played, and whether the game has been played once
  const [image, setImage] = useState("");
  const [item, setItem] = useState("");
  const [gamePlayed, setGamePlayed] = useState(false);
  const [gameCount, setGameCount] = useState(0);
  const [gameReset, setGameReset] = useState(false);
  const [correctGuess, setCorrectGuess] = useState(false);
  const [correctStreak, setCorrectStreak] = useState(0);
  const [highscore, setHighScore] = useState(0);

  useEffect(() => {
    getGameImage();
    setGameCount(gameCount + 1);
    setGamePlayed(false);
  }, [gameReset]);

  //ajax request to get the image for the game
  const getGameImage = () => {
    const spaceSearch = ["moon", "earth", "jupiter", "saturn", "pluto", "mars", "venus"]
    let randomSearchItem = spaceSearch[Math.floor(Math.random()*spaceSearch.length)];
    let oneHundred = [];
    for (let i = 0; i <= 100; i++) {
       oneHundred.push(i);
    }
    let randomNumber = oneHundred[Math.floor(Math.random()*oneHundred.length)]

    const url = "https://images-api.nasa.gov/search?q="

    // sending the call to the NASA API
    $.ajax({
      url: url + randomSearchItem,
      type: "GET",
      dataType : "json",
    }).then(json => {
      setImage(json.collection.items[randomNumber].links[0].href);
      setItem(randomSearchItem);
    });
  }

  //the game choices are rendered
  const playGame = () => {
    const spaceWords = ["moon", "earth", "jupiter", "saturn", "pluto", "mars", "venus"]
    return spaceWords.map(word =>
      <div className="guessing" key={word}>
        <button onClick={ e => guessChoice(word)} id={word}>{word}</button>
      </div>
    )
  }

  const resetGame = () => setGameReset(!gameReset);

  //the player chooses one item and this function determines if it's a win
  const guessChoice = (word) => {
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

  const renderGame = () => {
    return <div className="namegamebutton">{playGame()}</div>
  }

  //Renders the game image, the choices, and determines if the game is done and can be played again
  return (
    <div className="namegame" >
      {highscore > 0 ? <div>Current Highscore: {highscore}</div> : null}
      {correctStreak > 0 ? <div>Current Streak: {correctStreak}</div> : null}
      <div></div>
      <div className="titlegame">Guess which one is associated with this image:</div>
      <img src={image} id="namegameimage" />
      {renderGame()}
      {gamePlayed && correctGuess ? "You're Right!" : null}
      {gamePlayed && !correctGuess ? "Wrong, Try Again. Correct Answer: " + item : null}
      {gamePlayed ? <PlayAgain resetGame={resetGame} /> : null}
    </div>
  );
}
