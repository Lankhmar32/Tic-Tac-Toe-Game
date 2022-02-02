"use strict";

function openPlayerConfig(event) {
  const selectedPlayerId = +event.target.dataset.playerid; //+'1' => 1
  editedPlayer = selectedPlayerId;
  playerConfigOverlayEl.style.display = "block";
  backdropEl.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayEl.style.display = "none";
  backdropEl.style.display = "none";
  fromEl.firstElementChild.classList.remove("error");
  errorsOutputEl.textContent = "";
  fromEl.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim(); // '  Bo  ' => 'Bo' - this is what trim method does

  if (!enteredPlayerName) {
    // !enteredPlayerName is falsy - if it's an empty string/ enteredPlayerName === ''
    event.target.firstElementChild.classList.add("error");

    errorsOutputEl.textContent = "Please enter a valid name!";
    return;
  }

  const updatedPlayerDataEl = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataEl.children[1].textContent = enteredPlayerName;

  // if (editedPlayer === 1) {
  //   players[0].name = enteredPlayerName;
  // } else {
  //   players[1].name = enteredPlayerName;
  // }

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
