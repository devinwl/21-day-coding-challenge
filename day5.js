const chooseStations = (stations) => {
  return stations.filter(station => {
    const [name, size, type] = station;
    return size >= 20 && (type === 'school' || type === 'community centre');
  }).map(station => station[0]);
}
