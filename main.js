// -------------- FUNCTIONS ----------------------

const myFunction = () => {
    return 'FUNctions are fun!';
}

const addNumbers = (num1, num2) => {
    return num1 + num2;
}

const multiplyNumbers = (num1, num2) => {
    return num1 * num2;
}

const addAndMultiply = (num1, num2, num3) => {
    return multiplyNumbers(addNumbers(num1, num2), num3);
}

// console.log(addAndMultiply(1, 3, 6));



// ----------- ARRAYS ----------------------

let superheroesDetails = [
    {
        id: 1,
        name:'Wonder Woman',
        isDC : true
    },
    {
        id: 1,
        name:'Captain America',
        isDC : true
    },
    {
        id: 1,
        name:'Batman',
        isDC : true
    },
    {
        id: 1,
        name:'The Flash',
        isDC : true
    },
    {
        id: 1,
        name:'Spiderman',
        isDC : false
    }
];

// for (const superhero of superheroesDetails) {
//     if (superhero.isDC === true) {
//         console.log(`${superhero.name} is in the Justice League.`);
//     }
//     else {
//         console.log(`${superhero.name} is a superhero!`);
//     }
// }


const outfits = [
    {
      id: 1,
      bottoms: "slacks",
      top: "orange",
      shoes: "leather",
      style: "formal",
      own: false
    },
    {
      id: 3,
      bottoms: "jeans",
      top: "t-shirt",
      shoes: "flip flops",
      type: "casual",
      own: true
    },
    {
      id: 2,
      bottoms: "yoga",
      top: "tank top",
      shoes: "flip flops",
      type: "casual",
      own: false
    },
    {
      id: 9,
      bottoms: "skirt",
      top: "blouse",
      shoes: "heals",
      type: "formal",
      own: true
    },
    {
      id: 6,
      bottoms: "shorts",
      top: "tank top",
      shoes: "none",
      type: "casual",
      own: true
    },
    {
      id: 7,
      bottoms: "jeans",
      top: "sweater",
      shoes: "boots",
      type: "casual",
      own: true
    },
    {
      id: 8,
      bottoms: "slacks",
      top: "button down",
      shoes: "dress",
      type: "formal",
      own: false
    }
  ]

// OUTFITS COPY
const outfitsCopy = outfits.map(outfit => {return {...outfit}});

outfitsCopy[3].type = "CASUAL!!!";
// console.log(outfits[3]);
// console.log(outfitsCopy[3]);

// OUTFITS COPY NO. 2 (ADD ACCESSORIES)
const outfitsCopy2 = outfits.map(outfit => {return {...outfit}});
outfitsCopy2.forEach(outfit => outfit.accessories = false);
// console.log(outfits);
// console.log(outfitsCopy2);

// OUTFITS COPY NO. 3 (RETURNING SPECIFIC VALUES)
const outfitsCopy3 = outfits.map(outfit => {return [outfit.id, outfit.bottoms, outfit.top, outfit.shoes]});
// console.log(outfitsCopy3);
// console.log(outfits);

// OUTFITS COPY NO. 3 (FILTER)
const outfitsCasual = outfits.filter(outfit => {return outfit.type === "casual"});
// console.log(outfitsCasual);
// console.log(outfits);

// OUTFITS FIND
const shoesNone = outfits.find(outfit => outfit.shoes === "none");
// console.log(shoesNone);

const boots = outfits.find(outfit => outfit.shoes === "boots");
// console.log(boots);

const jeansAndTShirt = outfits.find(outfit => outfit.bottoms === "jeans" && outfit.top === "t-shirt");
// console.log(jeansAndTShirt);


const animals = [
  {
    id: 3,
    name: "Rex",
    trait: "mischievous",
    species: "dog",
    isReal: true
  },
  {
    id: 9,
    name: "Joel",
    trait: "playful",
    species: "dog",
    isReal: true
  },
  {
    id: 5,
    name: "Cleo",
    trait: "friendly",
    species: "rat",
    isReal: true
  },
  {
    id: 8,
    name: "Draco",
    trait: "grumpy",
    species: "dragon",
    isReal: false
  },
  {
    id: 2,
    name: "George",
    trait: "curious",
    species: "monkey",
    isReal: true
  },
  {
    id: 1,
    name: "Peanut",
    trait: "needy",
    species: "cat",
    isReal: true
  },
  {
    id: 1,
    name: "Lexi",
    trait: "shy",
    species: "cat",
    isReal: true
  }
];

// for (const animal of animals) {
//   if (animal.species === "dragon") {
//     console.log("I am mythical.");
//   } else if (animal.species === "dog") {
//     console.log("I bark.");
//   } else if (animal.species === "monkey" || animal.species === "rat") {
//     console.log(`${animal.name}. I am a rat or monkey.`);
//   } else if (animal.species === "cat" && animal.trait === "needy") {
//     console.log("I am Sydney's cat.");
//   } else {
//     console.log(animal.name, animal.trait, animal.species);
//   }
// }

// SORT BY ID
for (i = 1; i < 10; i++) {
  for (const animal of animals) {
    if (animal.id === i) {
      console.log(animal.id);
    }
  }
}