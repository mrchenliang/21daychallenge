const unregisteredVoters = ["Jake", "Alanna", "Bradley", "Stephanie"];

const name = "Bradley";

const registerToVote = (name, unregisteredVoters) => {
  const unregVoters = [];
  for (let i = 0; i < unregisteredVoters.length; i++) {
    if (unregisteredVoters[i] !== name) {
      unregVoters.push(unregisteredVoters[i]);
    }
  }
  return unregVoters;
};
