const pumpkinSpice = money => {
  let spice = 0;

  const treats = {
    pie: {
      cost: 5,
      spice: 30,
      bought: 0
    },
    latte: {
      cost: 3,
      spice: 15,
      bought: 0
    },
    macaron: {
      cost: 1,
      spice: 3,
      bought: 0
    }
  };

  for (let treat in treats) {
    while (money >= treats[treat].cost) {
      money = money - treats[treat].cost;
      spice += treats[treat].spice;
      treats[treat].bought++;
    }
  }

  return [treats.pie.bought, treats.latte.bought, treats.macaron.bought, spice];
};
