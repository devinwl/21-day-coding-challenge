const checkAir = function (samples, threshold) {
  const totalSamples = samples.length;
  const dirtySamples = samples.filter(sample => sample === 'dirty').length;
  
  const ratio = dirtySamples / totalSamples;
  
  if (ratio >= threshold) {
    return 'Polluted';
  } else {
    return 'Clean';
  }
}
