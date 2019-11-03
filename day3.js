const castVote = (name, votes) => {
  const [timVotes, sallyVotes, bethVotes] = votes;
  switch(name) {
    case "Tim": {
      return [timVotes + 1, sallyVotes, bethVotes];
    }
    
    case "Sally": {
      return [timVotes, sallyVotes + 1, bethVotes];
    }
    
    case "Beth": {
      return [timVotes, sallyVotes, bethVotes + 1];
    }
  }
}
