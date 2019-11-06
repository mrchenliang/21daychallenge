const voter_signatures = [
  "Bill Billiamson",
  "Kate Etak",
  "Brandon Brandonus",
  "Fake McFakerson",
  "Jane Janesford"
];

const voter_ids = [
  "Bill Billiamson",
  "Kate Etak",
  "Brandon Brandonus",
  "Simon Simonson",
  "Jane Janesford"
];
const voterTurnout = (voter_signatures, voter_ids) => {
  let max = Math.max(voter_signatures.length, voter_ids.length);
  if (voter_signatures.length !== voter_ids.length) {
    return false;
  } else {
    for (let i = 0; i < max; i++) {
      if (voter_signatures[i] !== voter_ids[i]) {
        return "FRAUD!";
      }
    }
  }
  return "All clear, we can count the votes!";
};
