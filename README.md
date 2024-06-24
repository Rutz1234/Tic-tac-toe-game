# Tic-tac-toe-game

Certainly! Here's a README.md file that you can use for your Tic-Tac-Toe project on GitHub:

---

# Tic-Tac-Toe Game

A simple, interactive Tic-Tac-Toe game built with HTML, CSS, and JavaScript.

![Tic-Tac-Toe Screenshot](https://github.com/Rutz1234/Tic-tac-toe-game/blob/main/Screenshot%20(293).png?raw=true)

## Features

- **Interactive UI**: Clickable cells for making moves.
- **Dynamic Status Display**: Shows the current player's turn, win messages, or draw messages.
- **Responsive Design**: Game board is centered and adapts to different screen sizes.
- **Restart Functionality**: Easily restart the game with a button click.

## Demo

Check out the live demo [here](https://your-demo-link.com).

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/tic-tac-toe.git
   ```

2. Navigate to the project directory:
   ```sh
   cd tic-tac-toe
   ```

3. Open `index.html` in your web browser.

## How to Play

1. The game starts with Player X.
2. Click on an empty cell to make a move.
3. The game will switch turns between Player X and Player O.
4. The first player to align three of their symbols vertically, horizontally, or diagonally wins.
5. If all cells are filled without a winner, the game ends in a draw.
6. Click the "Restart Game" button to play again.

## Technologies Used

- HTML
- CSS
- JavaScript

## Code Explanation

### HTML Structure

The structure of the game, including the board, cells, and restart button.

```html
<div class="game-container">
    <h1>Tic Tac Toe</h1>
    <div class="board">
        <button class="cell" data-index="0"></button>
        <!-- ... other cells ... -->
        <button class="cell" data-index="8"></button>
    </div>
    <div id="status"></div>
    <button id="restart">Restart Game</button>
</div>
```

### CSS Styling

Styling for the game, including centering the game board and styling the cells and buttons.

```css
.game-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    gap: 5px;
}

.cell {
    width: 100px;
    height: 100px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #012a4a;
    font-size: 4em;
    color: #a9d6e5;
    border: 1px solid #012a4a;
}
```

### JavaScript Logic

Handles the game logic, including event handling, checking win conditions, and managing game state.

```javascript
let currentPlayer = 'X';
let boardState = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
let gameActive = true;

const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

cells.forEach(cell => cell.addEventListener("click", handleCellClick));
restartBtn.addEventListener('click', restartGame);

function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (boardState[clickedCellIndex] !== ' ' || !gameActive) {
        return;
    }

    boardState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;

    if (checkWin()) {
        gameActive = false;
        statusDisplay.innerHTML = `Player ${currentPlayer} wins!`;
    } else if (!boardState.includes(' ')) {
        gameActive = false;
        statusDisplay.innerHTML = `It's a draw!`;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin() {
    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (boardState[a] !== ' ' && boardState[a] === boardState[b] && boardState[b] === boardState[c]) {
            return true;
        }
    }
    return false;
}

function restartGame() {
    gameActive = true;
    currentPlayer = 'X';
    boardState = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    cells.forEach(cell => cell.innerHTML = ' ');
    statusDisplay.innerHTML = '';
}
```

### Key Learning Points

#### HTML:

- **Structure and Semantics:** Structured HTML using semantic elements (`<div>`, `<button>`) to enhance readability and maintainability.
- **Grid Layout:** Utilized grid-like structure for the Tic-Tac-Toe board using `<button>` elements to maintain interactive and accessible design.

#### CSS:

- **Flexbox and Grid Layout:** Employed Flexbox (`display: flex`) for centering elements vertically and horizontally (`justify-content: center; align-items: center;`) within `.game-container`. Grid layout (`display: grid`) was used for creating the 3x3 board layout (`grid-template-columns`, `grid-template-rows`).
- **Consistent Styling:** Ensured a consistent color scheme (`background-color`, `color`) throughout the game interface to maintain visual coherence.

#### JavaScript:

- **Event Handling:** Implemented event listeners (`addEventListener`) to manage user interactions, such as clicking on cells (`handleCellClick`) and restarting the game (`restartGame`).
- **State Management:** Managed game state using variables (`currentPlayer`, `boardState`, `gameActive`) to track player turns, board status, and game progression.
- **Win Condition Checking:** Implemented a function (`checkWin`) to evaluate predefined win conditions (`winConditions`) and determine game outcomes (win or draw).

### Questions and Explanations

#### Why Use a While Loop in C++?

In C++, a while loop might be used to maintain the game's state continuously until a termination condition (like a player quitting or a draw) is met. In JavaScript, this continuous loop structure is replaced by event-driven programming, where the game progresses based on user interactions (click events, button presses).

#### Checking the Win Condition:

JavaScript checks for win conditions by iterating through predefined arrays (`winConditions`) that represent winning combinations on the game board. It compares current board state against these combinations to determine if a player has won.

#### Handling Cell Click Events:

Each cell (`<button>`) in the game board has an event listener attached (`addEventListener`) that triggers the `handleCellClick` function upon user click. This function updates the board state based on the clicked cell, checks for win or draw conditions, and updates the game status accordingly.

#### Restart Button:

The restart button (`<button id="restart">Restart Game</button>`) is linked to an event listener (`addEventListener`) that triggers the `restartGame` function. This function resets all game-related variables and UI elements to their initial states, allowing players to start a new game.

#### Centering the Board:

The `.game-container` class in CSS utilizes Flexbox (`display: flex; justify-content: center; align-items: center;`) to centrally align the game board (`<div class="board">`) within the viewport. This ensures the game remains visually centered regardless of screen size or device.

### Conclusion

Building the Tic-Tac-Toe game provided valuable insights into fundamental concepts of web development. It covered the essentials of HTML structure, CSS styling techniques for layout and consistency, and JavaScript programming for interactive user experiences and state management. This project demonstrated practical application of these concepts, enhancing understanding of frontend web development principles.

## Contributing

Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change.

.
