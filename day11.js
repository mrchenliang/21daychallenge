const buses = {
  pickadilly: {
    distance: 10,
    speed: 5
  },
  uptown: {
    distance: 13,
    speed: 10
  }
};

const busTimes = buses => {
  Object.keys(buses).forEach(dest => {
    buses[dest] = buses[dest].distance / buses[dest].speed;
  });
  return buses;
};
