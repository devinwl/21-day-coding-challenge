const termTopics = (interviews) => {
  // Key phrases we are looking for
  const keyPhrases = ['smart city', 'arts funding', 'transportation'];
  
  // Map phrases to object { phrase: 0, phrase2: 0, ... }
  const keyPhraseMap = keyPhrases.reduce((acc, phrase) => {
    return {
      ...acc,
      [phrase]: 0
    }
  }, {});
  
  // Count up results
  const results = interviews.reduce((acc, interview) => {
    if(keyPhrases.includes(interview)) {
      return {
        ...acc,
        [interview]: acc[interview] + 1
      }
    } else {
      return acc;
    }
  }, keyPhraseMap);
  
  // Convert object mapping to array of values
  return Object.values(results);
}
