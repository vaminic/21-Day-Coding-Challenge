//Solution:
// Add parseMessage here if you want!

const parseMissionSummary = (exchanges, missionData) => {
  // Code here!
  //instantiate mission summary object
  var summary = {transcript: [], missionData};
  
  //for each index of exchanges, concatenate origin and message and add to summary
  for (i = 0; i < exchanges.length; i++) {
    //concatenate origin and message
    let message = exchanges[i].origin + ": " + exchanges[i].message;
    //push to transcript array in mission summary
    summary["transcript"].push(message);
  }
  
  //return mission summary
  return summary;
}

/*
INSTRUCTIONS
Your last (!) task is to write a function that will take in 
an array of exchanged messages and an array of 
organized data. The goal is to parse each message, 
add them to a list and return an object containing 
two keys, transcript with the messages, missionData 
with the missionData object.

Each message should be parsed using the same 
structure as the first challenge;

"Origin: Message"
*/

/*
EXAMPLE
Input:
  const exchanges = [
    {origin:"MC", message:"So how is it out there?"},
    {origin:"Shuttle", message:"Oh it's pretty nice!"},
    {origin:"MC", message:"Did you like the challenges?"},
  ]

  const missionData = {
    astro:["...","..."], 
    bio:["..."], 
    physics:["..."]
  }
  
Output:
  {
  transcript:
  [
    "MC: So how is it out there?",
    "Shuttle: Oh it's pretty nice!",
    "MC: Did you like the challenges?"
  ],
  missionData:{
    astro:["...","..."], 
    bio:["..."], 
    physics:["..."]
  }
  }
*/
