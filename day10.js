const spots = [
  // COLUMNS ARE X
  //    0    1    2    3    4    5
      ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
      ['s', 'M', 's', 'S', 'R', 'M'], // 1
      ['s', 'M', 's', 'S', 'R', 'm'], // 2
      ['S', 'r', 's', 'm', 'R', 'M'], // 3
      ['S', 'r', 's', 'm', 'R', 'M'], // 4
      ['S', 'r', 'S', 'M', 'M', 'S'], // 5
  ]

  const vehicle = 'regular' // possible options are 'regular', 'small', or 'motorcycle'


  const whereCanIPark = (spots, vehicle) => {
    const sizes = {
      M: 1,
      S: 2,
      R: 3
    }
  
    const size = vehicle[0].toUpperCase();
    for (let i = 0; i < spots.length; i++) {
      for (let j = 0; j < spots[i].length; j++) {
        const currentSpot = spots[i][j];
        if (sizes[currentSpot] && sizes[currentSpot] >= sizes[size])
          return [j, i];
      }
    }
    return false;  
  }

