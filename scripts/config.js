"use strict";

function openPlayerConfig() {
  playerConfigOverlayEl.style.display = "block";
  backdropEl.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayEl.style.display = "none";
  backdropEl.style.display = "none";
  fromEl.firstElementChild.classList.remove("error");
  errorsOutputEl.textContent = "";
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
}
