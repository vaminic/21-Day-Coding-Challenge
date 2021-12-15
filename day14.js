//Solution:
const switchAllTogglesOn = (toggleList) => {
  //for each index of toggleList, check that the value of isOn is true
  for (i = 0; i < toggleList.length; i++){
    //if isOn value of the current index is false, switch it to true
    if (toggleList[i].isOn === false){
      toggleList[i].isOn = true;
    }
  }
  
  //return updated toggleList
  return toggleList;
}

/*
INSTRUCTIONS
Your task is to write a function that will take in an array 
of objects containing switches. The function will 
change the value of the isOn property to true for every 
switch in the list, and then return the updated array.

You can use the previous switchToggle function from 
the fourth challenge, however be careful, since we 
want all of them on, not toggled!
*/

/*
EXAMPLE
Input:
  const toggleList = [
    {
      name:"Air",
      isOn:true
    },
    {
      name:"Radio",
      isOn:false
    },
  ]
  
Output:
  [
    {
      name:"Air",
      isOn:true
    },
    {
      name:"Radio",
      isOn:true
    },
  ]
*/
