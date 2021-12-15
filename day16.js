//Solution:
const getAverageSpeed = (firstPosition, secondPosition) => {
  // code here!
  // calculate the time difference between first and second positions:
  var deltaTime = secondPosition.time - firstPosition.time;
  //calculate the distance difference between first and second positions:
  var deltaDistance = secondPosition.altitude - firstPosition.altitude;
  
  //calculate the speed using ∆d / ∆t and round to the nearest tenth:
  //round to the nearest tenth by multiplying by 10, rounding the product, then dividing by 10.
  var speed = Math.round((deltaDistance / deltaTime) * 10 ) / 10;
  
  return speed;
}

/*
INSTRUCTIONS
Your task is to write a function that will take in two 
position objects. Calculate the average speed from the 
two positions and return the average speed rounded 
to the first decimal point.

Each object contains the altitude in meters, and a time 
stamp in seconds.
*/

/*
EXAMPLE
Input:
  const firstPosition = {
    time: 1637074462,
    altitude: 1100
  }
  const secondPosition = {
    time: 1637074558,
    altitude: 2200
  }
  
Output:
  11.5
*/
