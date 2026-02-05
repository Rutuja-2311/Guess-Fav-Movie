const favMovie = "Avengers";
let attempts = 0;

let guess = prompt("Guess my favorite movie \n(Type 'quit' to exit)");

while (guess !== null) {
  if (guess.toLowerCase() === "quit") {
    alert("You quit the game ");
    break;
  }

  attempts++;

  if (guess.toLowerCase() === favMovie.toLowerCase()) {
    alert(`🎉 Congrats!\nYou guessed it in ${attempts} attempts`);
    break;
  }

  let hintMessage = "";

  if (attempts === 1) {
    hintMessage = "Hint: It's a Marvel movie ";
  } else if (attempts === 2) {
    hintMessage = "Hint: It features a superhero team";
  } else if (attempts === 3) {
    hintMessage = `Hint: The movie name has ${favMovie.length} letters`;
  } else if (attempts === 4) {
    hintMessage = `Hint: It starts with '${favMovie[0]}'`;
  } else {
    hintMessage = `Last Hint: It starts with "${favMovie.slice(0, 3)}"`;
  }

  guess = prompt(`❌ Wrong guess!\n${hintMessage}\n\nTry again:`);
}
