//Solution:
const confirmReentryPlans = (speed, missionData, checks) => {
  // Code here!
  //check that speed is within min and max speed inclusively:
  //if speed is outside of min and max, return false
  if (speed < checks.minSpeed || speed > checks.maxSpeed) {
    return false;
  } 
  
  //store datatypes from missionData
  const dataTypes = Object.keys(missionData);
  
  //for each datatype, check that the datatype size matches dataEntries check
  for (i = 0; i < dataTypes.length; i++){
    //store actual size of datatype in missionData in variable
    let actual = missionData[dataTypes[i]].length;
    //store target size of datatype in missionData in variable
    let check = checks.dataEntries[dataTypes[i]];
    
    //if actual and target sizes mismatch, return false
    if (actual != check){
      return false
    }
    
  }
  
  //return true if speed and mission data passses all checks.
  return true;
}

/*
INSTRUCTIONS
Your task is to write a function that will take in speed 
(number), missionData (object) and checks (object) as 
parameters. The goal is to make sure that the speed is 
within the limits and that the amount of entries per 
type matches with the checks. If one of the values is a 
mismatch, return false, if everything is fine, return true.

Speed will be compared against maxSpeed 
and minSpeed inclusively and the length of each array 
inside missionData will be compared to the values 
inside the dataEntries object values.
*/

/*
EXAMPLE
Input:
  const speed = 40
  const missionData = {
    astro:["...","..."], 
    bio:["..."], 
    physics:["..."]
  }

  const checks = {
    maxSpeed:50,
    minSpeed:20,
    dataEntries:{
      astro:3,
      bio:1,
      physics:1
    }
  }
  
Output:
  false // Not the same amount of entries
*/
