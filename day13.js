const lights = [
  {
    id: 1,
    on: true
  },
  {
    id: 2,
    on: true
  },
  {
    id: 3,
    on: true
  },
  {
    id: 4,
    on: true
  },
  {
    id: 5,
    on: true
  }
];

const lightsOn = function(lights) {
  lights.forEach(light => (light.on = true));
  return lights;
};

const lightsOff = function(lights) {
  lights.forEach(light => (light.on = false));
  return lights;
};

const toggleLights = function(lights, lightsAreOn) {
  lightsAreOn
    ? lights.forEach(light => (light.on = false))
    : lights.forEach(light => (light.on = true));
  return lights;
};
