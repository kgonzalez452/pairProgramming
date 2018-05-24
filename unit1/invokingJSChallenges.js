// These challenges may seem accessible, but make sure you diagram them out or talk through them aloud in the same way we did in class. Understanding this precise approach to communicating your code will ensure that all the hard challenges to come follow much more naturally

// Challenge 1A

// Create a function addTwo that accepts a number, and returns the number plus 2.

function addTwo(num) {
    return num + 2;
}
console.log(addTwo(9));

// Challenge 1

// Create a function addS that accepts a string, and returns the string with an "s" added to the end.

function addS(str){
    return str+='s';
    return str+'s';
    return str.join('s');
};
console.log(addS('pizza'));
// logged out 'pizzas'

// Challenge 2 

// Examine the code given to you. Determine what arguments must be passed into isX1 and isX2 respectively to obtain an output of true for both, and pass in the arguments accordingly.

const x = 3; // creates a space in memory in global variable environment and stores its value as 3.

function isX1(num) {    // creates a space in memory in global variable environment and stores a function name as a function.
    const x = 5;        // creates a space in memory in local execution context and stores the variable with its value as 5.
    return num === x;   // 
};   

function isX2(num) {    // creates a space in memory in global variable environment and stores a function name as a function.
    return num === x;   // 
};



// Challenge 3 

// Examine the code given to you. Try to make the calls variable equal to 'JerryKramerGeorgeElaine' with only a single invocation to the function jerry, as done in the commented out lines below the code given to you. You may add code to the places marked ADD CODE HERE?, though it might not be necessary to add code to all four places.

let calls = "";

function jerry(str) {
    calls += 'Jerry';
    // ADD CODE HERE?
}

function george(str) {
    calls += 'George';
    // ADD CODE HERE?
}

function elaine(str) {
    calls += 'Elaine';
    // ADD CODE HERE?
}

function kramer(str) {
    calls += 'Kramer';
    // ADD CODE HERE?
}

//jerry();
//console.log(calls); // should log out JerryKramerGeorgeElaine