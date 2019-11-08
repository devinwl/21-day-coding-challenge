const voterTurnout = (voter_signatures, voter_ids) => {
  if(voter_signatures.length !== voter_ids.length) {
    return false;
  }
  
  const invalidSignatures = voter_signatures.filter((sig, i) => voter_ids[i] !== sig);
  
  if(invalidSignatures.length > 0) {
    return "FRAUD!";
  } else {
    return "All clear, we can count the votes!";
  }
}
