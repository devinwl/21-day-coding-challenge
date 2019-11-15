const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  const basePrice = 1.0;
  const travelCost = distanceTraveled * 0.25;
  const extraCost = numberOfPeople >= 30 ? 0.25 : 0;
  return `$${(basePrice + travelCost + extraCost).toFixed(2)}`;
}
