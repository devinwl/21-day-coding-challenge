const whereCanIPark = (spots, vehicle) => {
  console.log(spots, vehicle);
  switch(vehicle) {
    case 'regular': {
      return findXY(spots, ['R']);
    }
    
    case 'small': {
      return findXY(spots, ['R', 'S']);
    }
    
    case 'motorcycle': {
      return findXY(spots, ['R', 'S', 'M']);
    }
  }
}

/**
 * Given a list of validTypes, finds a spot (x,y) or returns false if nothing can be found
 */
const findXY = (spots, validTypes) => {
  // Find the first row where the row has a valid spot.  That is our 'y'
  const y = spots.findIndex(row => row.findIndex(x => validTypes.includes(x)) >= 0);
  
  if(y >= 0) {
    // Find the valid 'x' that corresponds to the 'y' we found earlier
    const x = spots[y].findIndex(x => validTypes.includes(x));
    
    if(x >= 0) {
      return [x, y];
    } else {
      return false;
    }
  } else {
    return false;
  }
}
