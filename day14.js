const numberOfPeople = 15;
const distanceTraveled = 10;

const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  if (numberOfPeople >= 30) {
    return `$${(1 + distanceTraveled * 0.25 + 0.25).toFixed(2)}`;
  } else {
    return `$${(1 + distanceTraveled * 0.25).toFixed(2)}`;
  }
};
