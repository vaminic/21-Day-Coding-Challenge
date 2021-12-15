//Solution:
const checkAllGauges = (gaugeList) => {
  //for each index of gaugeList, check that current is within min and max
  for (i = 0; i < gaugeList.length; i++){
    //store values of current, min, and max attributes from gaugeList
    //to block scoped variables for easier readability *optional
    let current = gaugeList[i].current;
    let min =  gaugeList[i].min;
    let max =  gaugeList[i].max;
    
    //if current is greater than max, or less than min, return false
    if (current > max || current < min){
      return false;
    }
  }
  
  //return true if for loop does not return false
  return true;
}

/*
INSTRUCTIONS
Your task is to write a function that will take in an array 
of objects containing a gauge reading (min, max, 
current). The function will then check if the gauge 
current value is within spec (between min and max) 
and check the next gauge. If one of the values is 
outside the spec, return false, if they are all ok, return
true.

The method the evaluate the gauge is the same as the 
third challenge. You may take your function, get 
inspired by it, or start from scratch in this challenge.
*/

/*
EXAMPLE
Input:
  const gaugeList = [
    {
      current:0.4,
      min:0.1,
      max:0.9
    },
    {
      current:1.2,
      min:0.1,
      max:0.6
    }
  ]
  
Output:
  false
*/
