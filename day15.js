const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']


const finalPosition = (moves) => {
  const result = [0, 0]; // x, y
  
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'north') {
      result[1]++;
    } else if (moves[i] === 'south') {
      result[1]--;
    } else if (moves[i] === 'east') {
      result[0]++;
    } else if (moves[i] === 'west') {
      result[0]--;
    }
  }
  return result;
}