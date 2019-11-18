const countTickets = tickets => {
  let object = {
    red: 0,
    green: 0,
    blue: 0
  };
  tickets.forEach(item => {
    if (item in object) {
      object[item]++;
    }
  });
  return object;
};

const bestOdds = (tickets, raffleEntries) => {
  let object = countTickets(tickets);
  let odds = [];
  for (let raffle in raffleEntries) {
    odds.push([raffle, object[raffle] / raffleEntries[raffle]]);
  }
  odds.sort(function(a, b) {
    return b[1] - a[1];
  });

  return `You have the best odds of winning the ${odds[0][0]} raffle.`;
};
