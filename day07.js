//Solution:
const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
  //Convert Fahrenheit to Celsius: (Temp°F − 32) × 5/9 = Temp°C
  temperature = Math.round((temperature - 32) * 5 / 9);
  //Convert wind speed from miles/hour to meters/seconds: speed/2.237
  windSpeed = Math.round(windSpeed / 2.237);
  return {temperature, windSpeed, windDirection, condition};
}

/*
INSTRUCTIONS
Your task is to write a function that takes in the 
temperature, weather condition, wind speed, and 
direction as parameters and store them inside a 
structure that holds each value as properties.

There's a small and important detail for this one, you 
must convert the temperature from Fahrenheit to 
Celsius and convert the wind speed from miles/hour to 
meters/second, and round both of them before storing 
them.
*/

/*
EXAMPLES
Input:
  const temperature = 32
  const condition = "Sunny with small clouds"
  const windSpeed = 20
  const windDirection = "NNE
    
Output:
  {
    temperature:0,
    windSpeed:9,
    windDirection:"NNE",
    condition:"Sunny with small clouds"
  }
*/
