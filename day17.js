const judgeVegetable = (vegetables, metric) => {
  const vegetablesToMetric = vegetables.map(vegetable => vegetable[metric]);
  
  const maxIndex = vegetablesToMetric.indexOf(Math.max(...vegetablesToMetric));
  
  return vegetables[maxIndex]['submitter'];
}
