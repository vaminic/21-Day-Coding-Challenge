//Solution:
const timeRemaining = (launchDate, missionName, fakeToday) => {
  const today = fakeToday || new Date() // Do not alter this line!

  // Code here!
  //instantiate launch date from launchDate string
  var launch = new Date(launchDate);
  //calculate remaining days until launch by subtracting today date from launch date
  var daysRemaining = (launch.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
  
  //return mission name and remaining days until launch
  return {missionName, daysRemaining};
}

/*
INSTRUCTIONS
Your task is to write a function that will take in a launch 
date and a mission name as strings. Calculate the 
difference between two dates in days and return an 
object containing the name of the mission and a 
rounded day difference.

A part of the code has been written for you, and it is 
important that it stays the same for the tests to work 
out.
*/

/*
EXAMPLE
Input:
  const launchDate = "2021-12-12"
  const fakeToday = "2021-12-01"
  const missionName = "Moon visit"
  
Output:
  {
    missionName = "Moon visit",
    daysRemaining = 11
  }
*/
