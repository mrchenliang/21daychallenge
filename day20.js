// Use the value below whenever you need the value of Pi

const PI = 3.14159;

const sphereVolume = function(radius) {
  return (4 / 3) * PI * Math.pow(radius, 3);
};

const coneVolume = function(radius, height) {
  return (1 / 3) * PI * Math.pow(radius, 2) * height;
};

const prismVolume = function(height, width, depth) {
  return height * width * depth;
};

const totalVolume = function(solids) {
  let total = 0;
  for (let part of solids) {
    if (part.type == "sphere") {
      total += sphereVolume(part.radius);
    } else if (part.type == "cone") {
      total += coneVolume(part.radius, part.height);
    } else if (part.type == "prism") {
      total += prismVolume(part.height, part.width, part.depth);
    }
  }
  return total;
};
