// Arrays 

// JS.info

// arrays needed to store ordered collections of elemetns (users, goods, etc).

// let arr = new Array ();  - basic syntax of creating array

// // or 

// let arr = [];  - basic syntax of creating array, the most used way


let fruits = ["Apple", "Orange", "Pineapple"]; // - basic array

// we can get an element by its number:

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Pineapple


// we can replce an element:

fruits[2] = "Melon";
console.log(fruits); // ['Apple', 'Orange', 'Melon']

// we can add new element into array:

fruits[3] = "Peach";
console.log(fruits); // ['Apple', 'Orange', 'Melon', 'Peach']

// total numbers of the elements in array is its length:

console.log(fruits.length); // []

// an array can store elements of any type:

let array = ["apple", { name: "John" }, true, function () {
    console.log("Hello");
}];

// trailing comma
// an array, same as object, may end with a comma. this "trailing comma" style makes it easier to insert/remove 
// items, bacause all lines become alike and easily visible:

let autos = [
    "BWM",
    "BYD",
    "Lada",
];



// Get last element with "at"

// old way to get specifi element (lets say last) was to calculate specific elemet index and then access it:

let vegetables = ["Cucumber", "Tomato", "Onion"];
console.log(vegetables [vegetables.length - 1]); // Onion

// but now we have shorter syntax
console.log(vegetables.at(-1));


// Methods pop/push, shift/unshift

// a queue is one of the most common uses of an array. in CS this means an ordered collection of elements which
// supports two operations: 

// - push appends element to an end
// - shift get an element from the beginning, advancing the queue, so that 2nd element becomes the 1st


// a stack is the data structure and another case for arrays:
// it supports 2 operations:

// - push adds an element to the end
// - pop takes an element from the end

// so new elemetns are added or taken from the "end". 

// - for stacks, the latest pushed item is received firs, its called LIFO (Last-In-First-Out)
// - for queuesm its FIFO (First-In-First-Out)


// methods that work with the end of the array:




// pop - extracts the last element of the array and returns it:

let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptun"]
console.log(planets.pop()); // Neptun
console.log(planets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus']
console.log(planets.at(-1)); // Uranus
console.log(planets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus']
// both methods above return value of last element of array, but difference is that pop() modifies array


// push - append the element to the end of the array

planets.push("Neptun"); // pushes Neptun back to array
console.log(planets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptun']


// shift - extracts the first element of the array and returns it:

console.log(planets.shift()); // Mercury
console.log(planets); // ['Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptun']


//unshift - add the element to the beginning of the array:

planets.unshift("Mercury"); 
console.log(planets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptun']


// methods push and unshift can add multiple elements at once:

planets.push("Pluto");
planets.unshift("Sun");

console.log(planets); // ['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptun', 'Pluto']



// Internals