"use strict";

function openPlayerConfig() {
  playerConfigOverlayEl.style.display = "block";
  backdropEl.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayEl.style.display = "none";
  backdropEl.style.display = "none";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername");
  console.log(enteredPlayerName);
}
