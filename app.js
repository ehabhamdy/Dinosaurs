"use strict";

// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact, img) {
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
  "The largest known skull measures in at 5 feet long.",
  "./images/triceratops.png"
);

let deno2 = new Dino(
  "Tyrannosaurus Rex",
  11905,
  144,
  "carnivor",
  "North America",
  "Late Cretaceous",
  "The largest known skull measures in at 5 feet long.",
  "./images/tyrannosaurus rex.png"
);

let deno3 = new Dino(
  "Anklyosaurus",
  10500,
  55,
  "herbavor",
  "North America",
  "Late Cretaceous",
  "Anklyosaurus survived for approximately 135 million years.",
  "./images/anklyosaurus.png"
);

let deno4 = new Dino(
  "Brachiosaurus",
  70000,
  "372",
  "herbavor",
  "North America",
  "Late Jurasic",
  "An asteroid was named 9954 Brachiosaurus in 1991.",
  "./images/brachiosaurus.png"
);

let deno5 = new Dino(
  "Stegosaurus",
  11600,
  79,
  "herbavor",
  "North America, Europe, Asia",
  "Late Jurasic to Early Cretaceous",
  "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
  "./images/stegosaurus.png"
);

let deno6 = new Dino(
  "Elasmosaurus",
  16000,
  59,
  "carnivor",
  "North America",
  "Late Cretaceous",
  "Elasmosaurus was a marine reptile first discovered in Kansas.",
  "./images/elasmosaurus.png"
);

let deno7 = new Dino(
  "Pteranodon",
  44,
  20,
  "carnivor",
  "North America",
  "Late Cretaceous",
  "Actually a flying reptile, the Pteranodon is not a dinosaur.",
  "./images/pteranodon.png"
);

let deno8 = new Dino(
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
Dino.prototype.compareName = function(dinoToCompare) {
    console.log(this.fact);
  };

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareHight = function(dinoToCompare) {
    console.log(this.fact);
  };

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareDiet = function(dinoToCompare) {
    console.log(this.fact);
  };

const grid = document.getElementById("grid");
grid.style.display = "none";


// Remove form from screen
// On button click, prepare and display infographic
const compareButton = document.getElementById("btn");
const form = document.getElementById("dino-compare");

compareButton.addEventListener("click", function() {
  console.log("clicked");
  form.style.display = "none";
  grid.style.display = "flex";


  // Use IIFE to get human data from form
let humanFromForm = (function getHumanData() {
    console.log("IIFEE");
    const nameInput = document.getElementById("name").value;
    const feetsHeightInput = document.getElementById("feet").value;
    const inchesHeightInput = document.getElementById("inches").value;
    const weightInput = document.getElementById("weight").value;
    const dietInput = document.getElementById("diet").value;
  
    console.log(nameInput);
    // Create Human Object
    let human = new Dino(
      nameInput,
      weightInput,
      inchesHeightInput,
      dietInput,
      "World Wide",
      "Late Cretaceous",
      "",
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
    deno8
  ];

  grid.innerHTML = (() => {
    return `
          ${denosArray
            .map(
              deno => `
              <div class="grid-item">
                <h3>${deno.species}</h3>
                <img src="${deno.img}" />
                <p> 
                    ${deno.fact} 
                </p>
              </div>
          `
            )
            .join("")}
      `;
  })();
});
