//Solution:
const listAstronautJobs = (roster) => {
  //instantiate a job array
  var jobs = [];
  
  //for each index of the roster array, find the value of the job attribute in the object.
  for (i = 0; i < roster.length; i++){
    jobs[i] = roster[i].job;
  }

  return jobs;
}

/*
INSTRUCTIONS
Your task is to create a function that will take in an 
array representing the roster of astronauts, and return 
an array containing the jobs of each astronaut as a 
string.

In other terms, for each astronaut of the roster, you 
want to take the job and add it to a list, then return 
said list.
*/

/*
EXAMPLES
Input:
  const exampleRoster = [
    {
      ...
      job:"Shuttle DJ"
    },
    {
      ...
      job:"Space Cook"
    }
  ] 
    
Output:
  ["Shuttle DJ", "Space Cook"]
*/
