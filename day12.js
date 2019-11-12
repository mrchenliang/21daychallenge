const samples = [
  "clean",
  "clean",
  "dirty",
  "clean",
  "dirty",
  "clean",
  "clean",
  "dirty",
  "clean",
  "dirty"
];

const threshold = 0.3;

const checkAir = (samples, threshold) => {
  let counter = 0;
  for (let i = 0; i < samples.length; i++) {
    if ((samples[i] == "dirty")) {
      counter += 1;
    }
  }
  if (counter / samples.length > threshold) {
    return "Polluted";
  } else {
    return "Clean";
  }
};

console.log(checkAir(samples, threshold));
