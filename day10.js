//Solution:
const averageWindSpeed = (weatherEntries) => {
  //Initialize a variable for sum of wind speeds in the weather entries
  var totalWindSpeed = 0;
  
  //for each index of weather entries, add the wind speed to sum of wind speeds
  for (i = 0; i < weatherEntries.length; i++){
    totalWindSpeed += weatherEntries[i].windSpeed;
  }
  
  //calculate and round the average wind speed using: sum of entries/number of entries
  var averageWindSpeeds = Math.round(totalWindSpeed / weatherEntries.length);
  
  return averageWindSpeeds;
}

/*
INSTRUCTIONS
Your task is to create a function that will take in an 
array of weather objects and will return a rounded 
average of the wind speed.

Since we work with an unknown amount of entries, 
you will need to calculate the average wind speed 
using loops.
*/

/*
EXAMPLE
  Input:
    const exampleEntries = [
      { 
        temperature:0, 
        weather:"sunny", 
        windDirection: "NNE", 
        windSpeed:24
      },
      { 
        temperature:10, 
        weather:"cloudy", 
        windDirection: "NNE", 
        windSpeed:9 
      }
    ] 
  
  Output:
    17
*/
