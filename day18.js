const countTickets = (tickets) => {
  const start = {
    red: 0,
    blue: 0,
    green: 0,
  }
  
  return tickets.reduce((acc, ticket) => {
    return {
      ...acc,
      [ticket]: acc[ticket] + 1,
    }
  }, start);
}

const bestOdds = (tickets, raffleEntries) => {
  const ticketCount = countTickets(tickets);

  /**
   * First we calculate the odds per ticket
   */
  const odds = Object.keys(raffleEntries).reduce((acc, ticketColor) => {
    return {
      ...acc,
      [ticketColor]: ticketCount[ticketColor] / raffleEntries[ticketColor]
    }
  }, {});
  
  /**
   * Then for each odds, we find the maximum result
   * We start with red and see if the next color has greater odds
   * If so, return that color instead
   */
  const bestOddsColor = Object.keys(odds).reduce((acc, ticketColor) => {
    const thisOdds = odds[ticketColor];
    const maxOdds = odds[acc];
    if(thisOdds > maxOdds) {
      return ticketColor;
    } else {
      return acc;
    }
  }, 'red');
  
  return `You have the best odds of winning the ${bestOddsColor} raffle.`;
}
