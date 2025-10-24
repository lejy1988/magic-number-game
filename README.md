# Magic Number Guessing Game

A lightweight, browser-based number guessing game built with vanilla JavaScript. Players try to guess a randomly generated number between 1 and 20, receiving contextual feedback after each attempt.

This project is structured for simplicity, but it leverages several modern JavaScript techniques and patterns that make it easy to extend and integrate into larger projects.

---

## Interesting Techniques

* **Random number generation** using [`Math.random()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) combined with [`Math.floor()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) to produce whole numbers in a fixed range.
* **Input validation** with [`Number.isInteger()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger) to ensure the guess is a whole number.
* **Control flow** using `while` loops to maintain game state until the correct guess is made.
* **Feedback generation** separated into a pure function (`giveFeedback`) to cleanly manage UI messaging. This promotes easier testing and potential refactoring.
* **Type coercion handling** via `parseInt()` for user input from `prompt()`, avoiding unexpected string behavior.

---

## Non-Obvious Techniques / Libraries

* The project is deliberately **dependency-free**, relying solely on standard browser APIs.
* Uses **pure functions** (`genMagicNumber`, `isGuessValid`, `giveFeedback`) to separate concerns, a pattern common in functional programming.
* Minimalist approach encourages **progressive enhancement** if later integrated into a richer UI or framework.

---

## Project Structure

```
/magic-number-game
│
├─ index.html
├─ script.js
├─ README.md
└─ /assets
   └─ /images
```

* `index.html`: Launches the game in the browser.
* `script.js`: Core logic of the game, including input handling, validation, and feedback generation.
* `/assets/images`: Placeholder for optional graphics if enhancing the game later.
  