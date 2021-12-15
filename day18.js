//Solution:
const chooseLunchWinner = (listOfChoices) => {
  //Code here!
  //intiialize choices and vote count arrays
  var choices = [];
  var count = []
  
  //for each index of listofChoices, count number of instances of each type
  for (i = 0; i < listOfChoices.length; i++){
    //if type is not listed in choices, add to the choices array
    if (choices.includes(listOfChoices[i]) === false){
      //add to choices array and record instance count as 1
      choices.push(listOfChoices[i]);
      let j = choices.indexOf(listOfChoices[i])
      count[j] = 1;
      
    } else {
      //if type is listed in choices, add 1 to instance count
      let j = choices.indexOf(listOfChoices[i])
      count[j] += 1;
      
    }
    
  }
  
  //intialize highest vote count
  var highestCount = 0;
  
  //find highest vote count
  for (n = 0; n < count.length; n++){
    
    if (count[n] > highestCount){
      highestCount = count[n];
    }
    
  }
  
  //declare winner, the dinner choice that matches its index with the highest vote count
  var winner = count.indexOf(highestCount);
  return choices[winner];
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
