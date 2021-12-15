//Solution:
const generateAstronautTag = (astronaut) => {
  
  var prefix = astronaut.prefix;
  var firstName = astronaut.firstName;
  var nickname = astronaut.nickname;
  var lastName = astronaut.lastName;
  
  var out = prefix + ': ' + firstName + ' "' + nickname + '" ' + lastName;
  
  return out;
}

/*
INSTRUCTIONS
Registering new astronauts was handled manually in
previous missions but it's taking too much time.
Knowing that the astronaut information is already
listed in a data set, you propose to optimize that job
with programming.

Your task is to automate that process by creating a
function that will take in an astronaut object as a
parameter and return a string using the properties of
the astronaut.
*/

/*
EXAMPLES
Input:
  const exampleAstronaut = {
    firstName: "Yuri",
    lastName: "Gagarin",
    nickname: "First!",
    prefix: "Cosmonaut"
  }

Output:
  Cosmonaut: Yuri "First!" Gagarin
*/
