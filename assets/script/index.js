"use strict";

// ! Variables -----------------------------------------------------------------

const click = new Audio("assets/media/sounds/click.mp3");
click.volume = 0.5;

const buttons = document.querySelectorAll(".button");
const lightBtn = document.querySelector(".light-btn");
const syringeBtn = document.querySelector(".syringe-btn");
const toiletBtn = document.querySelector(".toilet-btn");
const chartPieBtn = document.querySelector(".chart-pie-btn");
const chalkboardBtn = document.querySelector(".chalkboard-btn");
const diceBtn = document.querySelector(".dice-btn");
const pizzaSliceBtn = document.querySelector(".pizza-slice-btn");
const exclamationBtn = document.querySelector(".exclamation-btn");
const petContainer = document.querySelector(".pet-container");
const virtualPet = document.querySelector(".virtual-pet");

// ! Pet -----------------------------------------------------------------------

class Pet {
  constructor(name, age, hunger, sleep, mood, health) {
    this.name = name;
    this.age = age;
    this.hunger = hunger;
    this.sleep = sleep;
    this.mood = mood;
    this.health = health;
  }

  feed() {
    this.hunger = 0;
    this.mood += 1;
    this.health += 1;
  }

  goToSleep() {
    this.sleep = 0;
    this.mood += 1;
    this.health += 1;
  }

  play() {
    this.mood = 0;
    this.hunger += 1;
    this.health += 1;
  }

  toilet() {
    this.hunger += 1;
    this.sleep += 1;
    this.mood += 1;
    this.health += 1;
  }

  syringe() {
    this.health = 0;
    this.hunger += 1;
    this.sleep += 1;
    this.mood += 1;
  }
}

const pet = new Pet("Zip", 0, 100, 100, 100, 0);
console.log(pet);

const statsContainer = document.querySelector(".stats-container");
const petNameValue = document.querySelector(".name-value");
const petAgeValue = document.querySelector(".age-value");
const hungerValue = document.querySelector(".hunger-value");
const sleepValue = document.querySelector(".sleep-value");
const moodValue = document.querySelector(".mood-value");

function displayPetInformation() {
  statsContainer.classList.toggle("visible");
  petNameValue.textContent = pet.name;
  petAgeValue.textContent = `${pet.age} days`;
  hungerValue.textContent = pet.hunger;
  sleepValue.textContent = pet.sleep;
  moodValue.textContent = pet.mood;
}

// ! Functions -----------------------------------------------------------------

function hideAllButtonsButChartPie() {
  virtualPet.classList.toggle("hidden");
  syringeBtn.classList.toggle("hidden");
  toiletBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
  chalkboardBtn.classList.toggle("hidden");
  pizzaSliceBtn.classList.toggle("hidden");
  diceBtn.classList.toggle("hidden");
  exclamationBtn.classList.toggle("hidden");
}

function hideAllButtonsButLight() {
  petContainer.classList.toggle("dark");
  virtualPet.classList.toggle("hidden");
  syringeBtn.classList.toggle("hidden");
  toiletBtn.classList.toggle("hidden");
  chartPieBtn.classList.toggle("hidden");
  chalkboardBtn.classList.toggle("hidden");
  pizzaSliceBtn.classList.toggle("hidden");
  diceBtn.classList.toggle("hidden");
  exclamationBtn.classList.toggle("hidden");
}

function hideAllButtonsForSomeSeconds() {
  virtualPet.classList.toggle("hidden");
  buttons.forEach((button) => {
    button.classList.toggle("hidden");
  });
  setTimeout(() => {
    buttons.forEach((button) => {
      button.classList.toggle("hidden");
    });
    virtualPet.classList.toggle("hidden");
  }, 5000);
}

// ! Event Listeners -----------------------------------------------------------

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    click.play();
  });
});

lightBtn.addEventListener("click", () => {
  hideAllButtonsButLight();
});

syringeBtn.addEventListener("click", () => {
  hideAllButtonsForSomeSeconds();
});

toiletBtn.addEventListener("click", () => {
  hideAllButtonsForSomeSeconds();
});

chartPieBtn.addEventListener("click", () => {
  hideAllButtonsButChartPie();
  displayPetInformation();
});
