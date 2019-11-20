const pumpkinSpice = money => {
  // Init constants
  const costPerPie = 5;
  const costPerLatte = 3;
  const costPerMacaron = 1;
  
  const spicePerPie = 30;
  const spicePerLatte = 15;
  const spicePerMacaron = 3;
  
  // First calculate the total number of pies we can buy
  const numberOfPies = parseInt(money / costPerPie);
  
  // How much money do we have left after buying all the pies?
  const leftoverFromPies = (money % costPerPie);
  
  // Now with all the leftover money buy all the lattes
  const numberOfLattes = parseInt(leftoverFromPies / costPerLatte);
  
  // Whatever we have left is for the macarons
  const numberOfMacarons = leftoverFromPies % costPerLatte;
  
  // Calculate our spice quota
  const spiceTotal = (numberOfPies * spicePerPie) + (numberOfLattes * spicePerLatte) + (numberOfMacarons * spicePerMacaron);
  
  return [numberOfPies, numberOfLattes, numberOfMacarons, spiceTotal];
}
