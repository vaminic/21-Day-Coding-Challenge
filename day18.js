//Solution:
const chooseLunchWinner = (listOfChoices) => {
  //Code here!
  //intialize votes object
  var votes = {};
  //for each index of listOfChoices, tally votes
  for (i = 0; i < listOfChoices.length; i++){
    //if type is in votes list, add 1 to vote count
    if (listOfChoices[i] in votes){
      votes[listOfChoices[i]] += 1;
    //if type is not in votes list, add to vote list and initialize count as 1
    } else {
      votes[listOfChoices[i]] = 1;
    }
    
  }
  
  //store dinner types into array of choices:
  const choices = Object.keys(votes);
  //initialize highest vote count to 0:
  var maxVotes = 0;
  //initialize winner variable.
  var winner;
  
  //for each choice, compare vote count to highest vote count
  for (i = 0; i < choices.length; i++) {
    //if vote count is greater than max votes, set choice as winner and update winning vote count.
    if (votes[choices[i]] > maxVotes) {
      maxVotes = votes[choices[i]];
      winner = choices[i];
    }
  }
  
  //declare winner
  return winner;
}

/*
INSTRUCTIONS
Your task is to write a function that will take in an array 
of lunch choices (strings) and return the choice as a 
string with the most votes.

There is always two lunch choices, and always an odd 
number of astronauts!
*/

/*
EXAMPLE
Input:
  const listOfChoices = [
    "Chicken Dinner",
    "Chicken Dinner",
    "Chicken Dinner",
    "Ice Cream Sandwich", 
    "Ice Cream Sandwich"
  ]
  
Output:
  Chicken Dinner
*/
