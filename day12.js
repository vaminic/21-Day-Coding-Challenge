//Solution:
const parseTranscripts = (messages) => {
  //Initialize empty array.
  var messageLog = [];
  
  //for each index of messages, concatenate origin and message.
  for (i = 0; i < messages.length; i++){
    //add concatenated message to messageLog array.
    messageLog[i] = messages[i].origin + ": " + messages[i].message;
  }
  
  //return completed log.
  return messageLog;
}

/*
INSTRUCTIONS
Your task is to write a function that will take in an array 
of objects containing a sender and a message as a 
parameter. The function will then parse a message 
from each object, add it to an array then return the 
built array.

Each message is built exactly like the first challenge, 
so you can either use the function you already made, 
or rebuild it from scratch.
*/

/*
EXAMPLE
Input:
  const messages = [
    {origin:"MC", message:"Hello!"},
    {origin:"Shuttle", message:"Hey!"},
  ]
    
Output:
  [
    "MC: Hello!",
    "Shuttle: Hey!"
  ]
*/
