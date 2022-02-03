"use strict";

let editedPlayer = 0;

const players = [
  { name: "", symbol: "X" },
  { name: "", symbol: "O" },
];

const playerConfigOverlayEl = document.getElementById("config-overlay");
const backdropEl = document.getElementById("backdrop");
const fromEl = document.querySelector("form");
const errorsOutputEl = document.getElementById("config-error");
const gameAreaEl = document.getElementById("active-game");

const editPlayer1BtnEl = document.getElementById("edit-player-1-btn");
const editPlayer2BtnEl = document.getElementById("edit-player-2-btn");
const cancelConfigbtnEl = document.getElementById("cancel-config-btn");
const startNewGameBtn = document.getElementById("start-game-btn");

editPlayer1BtnEl.addEventListener("click", openPlayerConfig);
editPlayer2BtnEl.addEventListener("click", openPlayerConfig);

cancelConfigbtnEl.addEventListener("click", closePlayerConfig);
backdropEl.addEventListener("click", closePlayerConfig);

fromEl.addEventListener("submit", savePlayerConfig);

startNewGameBtn.addEventListener("click", startNewGame);
