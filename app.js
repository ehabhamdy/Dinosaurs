"use strict";

// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, facts, img) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.facts = facts;
  this.img = img;
}

function Bird(species, weight, height, diet, where, when, fact, img) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
  this.img = img;
}

// Create Dino Objects
let deno1 = new Dino(
  "Triceratops",
  13000,
  114,
  "herbavor",
  "North America",
  "Late Cretaceous",
  [
    "First discovered in 1889 by Othniel Charles Marsh"
  ],
  "./images/triceratops.png"
);

let deno2 = new Dino(
  "Tyrannosaurus Rex",
  11905,
  144,
  "carnivor",
  "North America",
  "Late Cretaceous",
  [
    "The largest known skull measures in at 5 feet long."
  ],
  "./images/tyrannosaurus rex.png"
);

let deno3 = new Dino(
  "Anklyosaurus",
  10500,
  55,
  "herbavor",
  "North America",
  "Late Cretaceous",
  [
    "Anklyosaurus survived for approximately 135 million years."
  ],
  "./images/anklyosaurus.png"
);

let deno4 = new Dino(
  "Brachiosaurus",
  70000,
  "372",
  "herbavor",
  "North America",
  "Late Jurasic",
  [
    "An asteroid was named 9954 Brachiosaurus in 1991."
  ],
  "./images/brachiosaurus.png"
);

let deno5 = new Dino(
  "Stegosaurus",
  11600,
  79,
  "herbavor",
  "North America, Europe, Asia",
  "Late Jurasic to Early Cretaceous",
  [
    "The Stegosaurus had between 17 and 22 seperate places and flat spines."
  ],
  "./images/stegosaurus.png"
);

let deno6 = new Dino(
  "Elasmosaurus",
  16000,
  59,
  "carnivor",
  "North America",
  "Late Cretaceous",
  [
    "Elasmosaurus was a marine reptile first discovered in Kansas."
  ],
  "./images/elasmosaurus.png"
);

let deno7 = new Dino(
  "Pteranodon",
  44,
  20,
  "carnivor",
  "North America",
  "Late Cretaceous",
  [
    "Actually a flying reptile, the Pteranodon is not a dinosaur."
  ],
  "./images/pteranodon.png"
);

let bird8 = new Bird(
  "Pigeon",
  0.5,
  9,
  "herbavor",
  "World Wide",
  "Holocene",
  "All birds are living dinosaurs.",
  "./images/pigeon.png"
);

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareWeight = function (human) {
  if (this.species !== human.species) {
    if (this.weight > human.weight) {
      this.facts.push(`${this.species} is heavier than ${human.species}`)
    } else {
      this.facts.push(`${human.species} is heavier than ${this.species}`)
    }
  }
};

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareHight = function (human) {
  if (this.species !== human.species) {
    if (this.height > human.height) {
      this.facts.push(`${this.species} is taller than ${human.species}`)
    } else {
      this.facts.push(`${this.species} is shorter than ${human.species}`)
    }
  }

};

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareDiet = function (human) {
  if (this.species !== human.species) {
    this.facts.push(`${this.species} eats ${this.diet} while ${human.species} lives on ${human.diet}`)
  }
};

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  for (let i in array) {
    if (array[i].where == "Human") {
      let tmp = array[4];
      array[4] = array[i];
      array[i] = tmp;
    }
  }

  return array;
}

const grid = document.getElementById("grid");
grid.style.display = "none";

// Remove form from screen
// On button click, prepare and display infographic
const compareButton = document.getElementById("btn");
const form = document.getElementById("dino-compare");

compareButton.addEventListener("click", function () {
  form.style.display = "none";
  grid.style.display = "flex";

  // Use IIFE to get human data from form
  let humanFromForm = (function getHumanData() {
    const nameInput = document.getElementById("name").value;

    const feetHeightInput = document.getElementById("feet").value;
    const inchesHeightInput = document.getElementById("inches").value;
    const totalHeight = feetHeightInput * 12 + inchesHeightInput
    console.log("asjfsdhjfhajsdf", totalHeight)
    const weightInput = document.getElementById("weight").value;
    const dietInput = document.getElementById("diet").value;

    // Create Human Object
    let human = new Dino(
      nameInput,
      weightInput,
      totalHeight,
      dietInput,
      "Human",
      "Late Cretaceous",
      [""],
      "./images/human.png"
    );
    return human;
  })();

  let denosArray = [
    deno1,
    deno2,
    deno3,
    deno4,
    humanFromForm,
    deno5,
    deno6,
    deno7,
    bird8
  ];

  const randomizedDenosArray = shuffle(denosArray);

  grid.innerHTML = (() => {
    return `
          ${randomizedDenosArray
            .map(deno => {
              if(deno instanceof Dino) {
                deno.compareWeight(humanFromForm);
                deno.compareHight(humanFromForm);
                deno.compareDiet(humanFromForm);
              }
              return deno
            })
            .map(
              deno => `
              <div class="grid-item">
                <h3>${deno.species}</h3>
                <img src="${deno.img}" />
                <p> 
                    ${(deno instanceof Dino)? deno.facts[Math.floor(Math.random() * deno.facts.length)] : deno.fact }
                </p>
              </div>
            `
            )
            .join("")
          }
      `;
  })();
});