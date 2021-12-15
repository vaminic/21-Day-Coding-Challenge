//Solution:
const switchSpecificToggle = (toggleList, specificToggle) => {
  // Code here!
  //label the loop
  find:
  //for each index of toggleList, find matching toggle:
  for (i = 0; i < toggleList.length; i++){
    //if name of toggle in the current index matches specificToggle, change isOn property.
    if (toggleList[i].name == specificToggle){
      
      switch(toggleList[i].isOn){
        //if toggle is on, toggle off
        case true:
          toggleList[i].isOn = false;
          break find; //break loop
        //if toggle is off, toggle on
        case false:
          toggleList[i].isOn = true;
          break find; //break loop
      }
      
    }
    
  }
  
  //return updated toggleList
  return toggleList;
}

/*
INSTRUCTIONS
Your task is to write a function that will take in an array 
of toggle objects and a specific toggle name. The goal 
is to switch only the specific toggle, without affecting 
the other toggles and then return the updated array.

Don't forget that you can use your previous function 
from the fourth challenge to help you complete it 
faster!
*/

/*
EXAMPLE
Input:
  const toggleList = [
    {
      name: "toggleA",
      isOn: false
      }, 
    {
      name: "toggleB",
      isOn: true
    }
  ]
  const specificToggle = "toggleA"
  
Output:
  [
    {
      name: "toggleA",
      isOn: true
    }, 
    {
      name: "toggleB",
      isOn: true
    }
  ]
*/
