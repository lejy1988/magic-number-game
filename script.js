// Generates a random number between 1 and 20
function genMagicNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

// this is to check if the guess is a valid whole number between 1 and 20
function isGuessValid(guess) {
  return Number.isInteger(guess) && guess >= 1 && guess <= 20;
}

// this is for the feedback string based on the guess
function giveFeedback(guess, magicNumber, attempt) {
  if (guess === magicNumber) {
    return `Wohoo! You guessed it bang on! The magic number was ${magicNumber}, and it only took you ${attempt} attempts! Well done you Genius!`;
  } else if (guess < magicNumber) {
    return `Oh No! You answered ${guess}. The correct answer is higher.`;
  } else {
    return `Not Quite! You answered ${guess}. The correct answer is lower.`;
  }
}

// Main game function
function playGame() {
  const magicNumber = genMagicNumber();
  let correctGuess = false;
  let attempt = 0;

  while (!correctGuess) {
    const userGuess = prompt("Enter your guess (between 1 and 20):");
    const guessNumber = parseInt(userGuess);

    // Validate input
    if (!isGuessValid(guessNumber)) {
      alert("Invalid input! Please ensure you enter a WHOLE NUMBER between 1 and 20.");
      continue; // does not count as an attempt
    }

    attempt++;

    // Get feedback string
    const feedback = giveFeedback(guessNumber, magicNumber, attempt);
    alert(feedback);

    if (guessNumber === magicNumber) {
      correctGuess = true; // ends the loop
    }
  }
}

// Start the game
playGame();
