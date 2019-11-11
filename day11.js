const busTimes = buses => {
  return Object.keys(buses).reduce((acc, busName) => {
    const { distance, speed } = buses[busName];
    return {
      ...acc,
      [busName]: distance / speed
    }
  }, {})
}
