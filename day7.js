const interviews = [
  "smart city",
  "rebuild the lighthouse",
  "arts funding",
  "transportation",
  "arts funding",
  "rebuild the lighthouse",
  "sports funding",
  "tax cuts",
  "smart city",
  "arts funding",
  "smart city"
];

const termTopics = interviews => {
  const result = [0, 0, 0];
  for (let i = 0; i < interviews.length; i++) {
    if (interviews[i] === "smart city") {
      result[0]++;
    } else if (interviews[i] === "arts funding") {
      result[1]++;
    } else if (interviews[i] === "transportation") {
      result[2]++;
    }
  }
  return result;
};
