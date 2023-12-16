"use strict";

const click = new Audio("assets/media/sounds/click.mp3");
click.volume = 0.5;

const buttons = document.querySelectorAll(".button");
const lightBtn = document.querySelector(".light-btn");
const petContainer = document.querySelector(".pet-container");
const virtualPet = document.querySelector(".virtual-pet");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    click.play();
  });
});

lightBtn.addEventListener("click", () => {
  petContainer.classList.toggle("dark");
  virtualPet.classList.toggle("hidden");
});
