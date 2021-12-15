//Solution:
const addAstronautToRoster = (roster, astronaut) => {
  // Code here!
  roster.push(astronaut);
  return roster;
}

/*
INSTRUCTIONS
Create a function that takes in a roster array and an 
astronaut object. The function will add the astronaut to 
the roster and return the updated roster.
*/

/*
EXAMPLES
Input:
  const exampleRoster = []
    const exampleAstronaut = {
      firstName:"Chris",
      lastName: "Hadfield",
      nickname:"Space Oddity",
      prefix:"Astronaut"
    }
    
Output:
  const exampleRoster = [
      {
        firstName:"Chris",
        lastName: "Hadfield",
        nickname:"Space Oddity",
        prefix:"Astronaut"
      }
    ]
*/
