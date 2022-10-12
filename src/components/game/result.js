export default function result(props) {
  if (!props.visible) return null;
  if (props.correctGuess) {
    return "You're Right!";
  } else {
    return "Wrong, Try Again. Correct Answer: " + props.item;
  }
}
