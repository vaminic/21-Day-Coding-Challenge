//Solution:
const organizeData = (receivedData) => {
  // Code here!
  //initialize sortedData object
  var sortedData = {};
  //for each index of receivedData, add data and type to sorted data.
  for (i = 0; i < receivedData.length; i++) {
    // if datatype not in sorted data, add datatype and data to sorted data
    if (receivedData[i].type in(sortedData) === false) {
      sortedData[receivedData[i].type] = [receivedData[i].data];
    //if datatype is in sorted data, add data to corresponding type
    } else {
      sortedData[receivedData[i].type].push(receivedData[i].data);
    }
    
  }
  //return sorted data.
  return sortedData;
}

/*
INSTRUCTIONS
Your task is to write a function that will take in a list of 
data entries in the shape of an array of objects. The 
function will then organize and return the entries 
by type and store each bit of data (string) in each list, in 
the shape of an object containing arrays.
*/

/*
EXAMPLE
Input:
  const listOfReceivedData = [
    {type: "astro", data: "Saturn Data"},
    {type: "bio", data: "Space Potatoes"},
    {type: "physics", data: "Lagrange Points"},
    {type: "bio", data: "OMG Tardigrades"},
    {type: "physics", data: "Material reflectivity"},
    {type: "astro", data: "Mercury is not the hottest"},
  ]
  
Output:
  {
    "astro":  ["Saturn Data", "Mercury is not the hottest"],
    "bio": ["Space Potatoes", "OMG Tardigrades"],
    "physics": ["Lagrange Points", "Material reflectivity"],
  }
*/
