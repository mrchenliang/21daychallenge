const bins = {
  waste: 4,
  recycling: 2,
  compost: 5
};

const trash = "recycling";

const smartGarbage = (trash, bins) => {
  if (trash === "waste") {
    bins.waste += 1;
  } else if (trash === "recycling") {
    bins.recycling += 1;
  } else if (trash === "compost") {
    bins.compost += 1;
  }
  return bins;
};

console.log(smartGarbage(trash, bins));
