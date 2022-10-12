import React from 'react';

export default function highscore(props) {
  const score = props.highscore > 0 ? <div>Current Highscore: {props.highscore}</div> : null;
  const streak = props.correctStreak > 0 ? <div>Current Streak: {props.correctStreak}</div> : null;
  return (
    <div class='highscore'>
      {score}
      {streak}
    </div>
  )
}
