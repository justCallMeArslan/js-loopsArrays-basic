//MDN Loops

// Looping through a collection



// Basic tool for looping through collection is the for(..of..) loop:

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat); // Leopard
  // Serval
  // Jaguar
  // Tiger
  // Caracal 
  // Lion
}

// in this example, for (const can of cats) says:

// 1. Given the collection cats, get the first item in the collection. 
// 2. Assign it to variable cat and then run the code between the curly braces {}.
// 3. Get the next item, and repeat step 2 until you have reached the end of collection.



// map() and filter()

// map() is used to do something to each item in collection and create a new collection containing the 
// changed items:


function toUpper(str) {
  return str.toUpperCase();
}

const upperCats = cats.map(toUpper); // calling function to upperCase strings

console.log(upperCats); // ["LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION"]

// filter() is used to test each item in collection, and create a new collection containing only items
// that match:

function rEndingCatNames(cat) {  // function conditions search and uses the method to do so
  return cat.endsWith("r");
}

const filtered = cats.filter(rEndingCatNames); //filter() returns boolean, if true -> item goes in new
// array, if false -> item skipped

console.log(filtered); // ["Jaguar", "Tiger"]




// The standard for loop


// for (initializer; condition; final-expression) {  - basic syntax of for loop
//     code to run
// }

// - initializer is usually a variable set to a number, which is incremented to count the number 
// of times the loop has run. It is also sometimes referred to as a counter variable.
// - condition  defines when the loop should stop looping. This is generally an expression featuring 
// a comparison operator, a test to see if the exit condition has been met.
// - final-expression is always evaluated (or run) each time the loop has gone through a full 
// iteration. It usually serves to increment (or in some cases decrement) the counter variable, to bring 
// it closer to the point where the condition is no longer true.



for (const cat of cats) { // example from above using for..of (preferable)
  console.log(cat);
}


for (let i = 0; i < cats.length; i++) { // same example but for loop used 
  console.log(cats[i]);
}



// Exiting loop with break

const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => { // we proceed when button clicked
  const searchName = input.value.toLowerCase(); //input transformed into lower case
  input.value = "";
  input.focus();
  para.textContent = "";
  for (const contact of contacts) {
    const splitContact = contact.split(":"); // = splitting contat and store two values in array 
    // splitContact 
    if (splitContact[0].toLowerCase() === searchName) { // checking if value of stored contact equals to 
      // value user input
      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`; // if result is true we
      // return string with contact name and contant phone number
      break; //used to end a loop
    }
  }
  if (para.textContent === "") {
    para.textContent = "Contact not found.";
  }
});


// Skipping iterations with continue


const para1 = document.querySelector(".p");
const input1 = document.querySelector(".input");
const btn1 = document.querySelector(".button");

btn1.addEventListener("click", () => {
  para1.textContent = "Output: ";
  const num = input1.value;
  input1.value = "";
  input1.focus();
  for (let i = 1; i <= num; i++) { // loop iterate check 
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) { // checking whether the square root is an integer by testing 
      // whether it is the same as itself when it has been rounded down to the nearest integer
      continue; //if true return means that the sq. root is not integer, so we are not interested in it
      // in such cases we use continue to skip on to the next loop iteration without recording the number
      // anywhere
    }
    para1.textContent += `${i} `; // returns only numbers which sq.rt returns as integer (1, 4, 9 , 16,
    //  25..) up to (num) number user input
  }
});


// while and do...while

// initializer
// while (condition) {
//     code to run            - basic syntax of while loop

//     final-expression
// }


// while loop option

const catsNames = ["Pete", "Biggles", "Jasmine"];
let myFavoriteCats = "My cats are called ";

let i = 0;

while (i < catsNames.length) {
  if (i === catsNames.length - 1) {
    myFavoriteCats += `and ${catsNames[i]}.`;
  } else {
    myFavoriteCats += `${catsNames[i]}, `;
  }

  i++;
}
console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."


// for loop options

const catsNames1 = ["Pete", "Biggles", "Jasmine"];
let myFavoriteCats1 = "My cats are called ";

for (let i = 0; i < catsNames1.length; i++) {
  if (i === catsNames1.length - 1) {
    // We are at the end of the array
    myFavoriteCats1 += `and ${catsNames1[i]}.`;
  } else {
    myFavoriteCats1 += `${catsNames1[i]}, `;
  }
}
console.log(myFavoriteCats1); // "My cats are called Pete, Biggles, and Jasmine."


// do...while option 

const catsNames2 = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats2 = "My cats are called ";

let x = 0;

do {
  if (x === catsNames2.length - 1) {
    myFavoriteCats2 += `and ${catsNames2[x]}.`;
  } else {
    myFavoriteCats2 += `${catsNames2[x]}, `;
  }

  x++;
} while (x < catsNames2.length);

console.log(myFavoriteCats2); // "My cats are called Pete, Biggles, and Jasmine."



// initializer 
// do {
//   code to run              - basic syntax of do...while

//   final-expression
// } while (condition)

// do...while's main difference is that code runs at least once anyway, because condition runs after code 
// being already executed, in comparison to while or for loops, where conditions runs before code we want to 
// execute it creates a window for some unordinary cases.







// JS.info 

// Loops: while and for

// The general loop algorithm works like this:

// Run begin
// → (if condition → run body and run step)
// → (if condition → run body and run step)
// → (if condition → run body and run step)


// for (let q = 0; q < 3; q++) alert(i)

// run begin
let q = 0
// if condition → run body and run step
if (q < 3) { alert(q); q++ }
// if condition → run body and run step
if (q < 3) { alert(q); q++ }
// if condition → run body and run step
if (q < 3) { alert(q); q++ }
// ...finish, because now i == 3


// inline variable declaration


// Here, “counter” variable i is declared right in the loop. This is called an “inline” variable declaration. 
// Such variables are visible only inside the loop.

for (let w = 0; w < 3; w++) {
  alert(w); // 0, 1, 2
}
alert(w); // error, no such variable

// instead we can use 

let w = 0;

for (w = 0; w < 3; w++) { // use an existing variable
  alert(w); // 0, 1, 2
}
alert(w); // 3, visible, because declared outside of the loop


// Skipping parts

let e = 0; // e already declared and assigned 

for (; e < 3; e++) { // no need for "initializer"/"begin"
  alert(e); // 0, 1, 2
}

// same way step/final-expression part can be removed:

let r = 0;

for (; r < 3;) {
  alert(r++);
}

// it is possible to remove everuthing and create an infinite loop:

// for (;;) {
//   repeats without limits
// }


// Breaking the loop

// As already shwn above we can stop loop from executing using break directive:

let sum = 0;

while (true) {
  let value = +prompt("Enter a number", "");
  if (!value) break; // if no input/ no added value loop stops
  sum += value;
}

alert("Sum: " + sum); //loop asking for a value until empty, when empty break stops loop and gives total sum.


// Continue to the next iteration

// continue, with basic words is a control-flow statement.

// The continue directive mentioned above is kind of lighter version of break. Instead of stopping loop entirely
// it stops the current iteration and forces the loop to start a new one (if the condition allows).

for (let i = 0; i < 18; i++) {
  if (i % 2 == 0) continue; // if true -> skip remaining part of the body
  alert(i); // 1, 3, 5, 7 , 9 
}

// worth mentioning that syntax constructs that are not expression cannot be used with the ternary operator ?.
// in particular, directive such as break/continue are not allowed there. Example:

for (let t = 0; t < 10; t++) {
  if (t > 5) {
    alert(t);
  } else {
    continue;
  }
}

// and option with ? which is giving "Syntax error: expression expected";

// for (let i = 0; i < 10; i++) {

//   (i > 5) ? alert(i) : continue; // reasons that continue is not an expression and ? operator works only with 
// expressions, also continue should stand alone and not to be parameter/argument or embedded inside another
// expression.
// }


// Labels for break/continue - directive which helps us to break out from multiple nested loops at once.
// We need to create a label following syntax:

// labelName: for (...) { // label name for loop for (...)
//   ...
// }

// the break <labelName> statement in the loop below breaks out to the label. 
// the code below we loop over i and j, prompting for the coordinates (i, j) from (0,0) to (2,2), so we need
// to find solution if user cancels the input:

outer: for (let k = 0; k < 3; k++) {
  for (let l = 0; l < 3; l++) {
    let input = prompt(`Value at coords (${k}, ${l})`, ``); // if an empty string or canceled, then break out
    // of both loops
    if (!input) break outer; // direcitve break will look up to outer and break that loop.

    // do something with value if needed

  }
}

alert("Done!");

