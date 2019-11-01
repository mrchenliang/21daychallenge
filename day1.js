const volunteers = ["Sally", "Jake", "Brian", "Hamid"];

const neighbourhoods = [
  "Center valley",
  "Big Mountain",
  "Little Bridge",
  "Bricktown",
  "Brownville",
  "Paul's Boutique",
  "CLay Park",
  "Fox Nest"
];

const doorToDoor = (volunteers, neighbourhoods) => {
  return neighbourhoods.length / volunteers.length;
};

console.log(doorToDoor(volunteers, neighbourhoods));
