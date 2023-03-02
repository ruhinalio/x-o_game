const game = document.getElementById("game");
const result = document.getElementById("result");
let player = true;
let winner = null;
let gameArray = Array(9).fill(null);
let resetbtn = document.getElementById("reset");
let squares = document.querySelectorAll(".square");

console.log(gameArray);
let winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const gameWinner = () => {
  winningPositions.map((position) => {
    let [a, b, c] = position;
    if (
      gameArray[a] &&
      gameArray[a] === gameArray[b] &&
      gameArray[b] === gameArray[c]
    ) {
      winner = gameArray[a];
      result.textContent = `${gameArray[a]} qalibdir`;
      document.querySelectorAll(".square")[a].classList.add("match");
      document.querySelectorAll(".square")[b].classList.add("match");
      document.querySelectorAll(".square")[c].classList.add("match");
    }
  });
};

game.addEventListener("click", (e) => {
  if (e.target.textContent !== "" && !winner) {
    result.textContent = "hechece";
  }
  if (e.target.textContent !== "" || winner) {
    return;
  }
  e.target.textContent = player ? "X" : "O";
  let coordinate = e.target.getAttribute("coordinate");
  gameArray[coordinate] = player ? "X" : "O";
  // console.log(gameArray);
  player = !player;
  gameWinner();
});
resetbtn.addEventListener("click", () => {
  winner = null;
  gameArray = Array(9).fill(null);
  // console.log(gameArray);
  result.textContent = "";
  [...squares].map((a) => {
    a.textContent = "";
    a.classList.remove("match");
  });
});

// let t = [3, 5, 6];
// let [y, y1, y2] = t;
// console.log(y, y1, y1);

// const person = {
//   name: "Robert",
//   surname: "Fischer",
// };
// let name = person.name;
// console.log(name);
// let { surname } = person;
// console.log(surname);
