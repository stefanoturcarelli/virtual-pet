"use strict";

const click = new Audio("assets/media/sounds/click.mp3");
click.volume = 0.5;

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    click.play();
  });
});
