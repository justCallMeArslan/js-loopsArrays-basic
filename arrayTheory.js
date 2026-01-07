// Arrays 

// JS.info

// arrays needed to store and manage ordered collections of elemetns (users, goods, etc).

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
console.log(vegetables[vegetables.length - 1]); // Onion

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



// Performance

// Methods push/pop run fast, while shift/unshift are slow.

// Why?! Because shift/unshift requre not only one operation, but multiple to get executed, e.g shift operation:
// 1. Remove the element with the index 0.
// 2. Move all elements to the left, renumber them from the index 1 to 0, from 2 to 1 and so on.
// 3. Update the length property.
// The more elements in the array, the more time to move them, more in-memory operations.


// Loops 


// There are few options to cycle array items over indexes. one of the oldest one is for loop:

let arr = ["Ball", "Bat", "Basket"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // prints array items
}

// but another way and more comfortable is for..of loop:

let brands = ["Puma", "Nike", "Adidas"];

for (let brand of brands) {
    console.log(brand); // prints array items
}

// technically because array is object we can use for..in loop as well, but its a bad idea:

for (let key in brands) {
    console.log(arr[key]);   // prints array items
}



// A word about "length"

// The length automatically updates when we modify the array, tbp its not a count of values, but the greatest numeric index 
// plus one. 

let animals = [];
animals[999] = "Monkey";

console.log(animals.length); // 1000, even if another 998 indexes are empty

// another thing about length in arrays is that its writtable. nothing happens if increased manually, but if 
// decreased, array is truncated/shortened and the process is irreversible:

let nums = [90, 23, 76, 22, 55];
nums.length = 2; // truncates array to 2 elements 
console.log(nums); // [90, 23]

nums.length = 5; // trying to extend array back to 5 elements
console.log(nums); // [90, 23, empty x 3];

// so, the simplest way to clear an array is to array.length = 0;



// A word about "new Array()"

let newArr = new Array(2);

// if array called witha single argument which is number, then it creates an array without items, but with 
// given argument as length of array itself:

console.log(newArr[0]); // undefined, because no elements
console.log(newArr.length); // length 2



// Multidimensional arrays 

// arrays can have items that are also arrays. Good example of that usage is matrix:

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][1]); // prints 2; [0] calls 1st array , [1] calls 2nd item in it.



// toString

// arrays have their own interpretation of toString method that returns a comma-separated list of elements:

let arr1 = [1, 2, 3];

console.log(arr1); // [1, 2, 3]
console.log(String(arr1) === "1,2,3"); // true;
console.log([] + 1); // 1
console.log([1] + 1); // 11 
// examples above executes that way because binary "+" operator adds and converts something to a string.




// Dont compare arrays to ==

// don’t use the == operator. Instead, compare them item-by-item in a loop or using iteration method, instead
// use for..of loop to compare arrays item-by-item.



// Array methods 

// splice() is a method which can be called a jack of all trades. It can do insert, remove and replace elements.
// the syntax is:

// arr.splice(start, deleteCount, elem1, ..., elemN) - modifies arr starting from the index "start:" removes
// deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed 
// elements.

let arr2 = ["I", "study", "JavaScript", "right", "now"];

arr2.splice(0, 3, "Let's", "sleep"); // replaces first 3 elements
console.log(arr2); // [Lets, sleep, right, now]

let removed = arr2.splice(0, 2); // returns removed part
console.log(removed); // [Lets, sleep]
console.log(arr2);

arr2.splice(0, 0, "I", "want", "to", "lay", "down", "and", 'sleep'); // - in order to insert without deletion 
// set deleteCount to 0 (second parameter)
console.log(arr2);

let arr3 = [1, 2, 5];
arr3.splice(-1, 0, 3, 4); // - negative values is acceptable (in this example -1 refers to 1 place before end)
console.log(arr3); // [1, 2, 3, 4, 5]



// slice() returns a new array copying to it all items from start to end, but not including end. Both start 
// and end can be negative (functioning same way as str.slice(),but instead of substring it creates subarrays).
// the syntax is:

// arr.slice([start], ..., [end]);

let arr4 = ["a", "b", "c", "d", "e"];
console.log(arr4.slice(1, 3)); // ["b", "c"]
console.log(arr4.slice(-2)); // ["d", "e"] , -2 is a [start] and end of array considered as [end]

// arr.slice() can be called without parameteres/arguments in order to create copy of orr for further 
// transformation that should not affect the original array.



// concat() - creates a new array that includes values from other arrays and additional items. It accepts any
// number of parameteres - either arrays or values. The result is a new array containing items from arr, then
// adds arg1, arg2, etc. if any of arguments (argN) is an array then all its elements are copied into new array.

// arr.concat(arg1, arg2, ..., argN); - bsic syntax

let arr5 = [1, 2];

console.log(arr5.concat([3, 4])); // [1, 2, 3, 4]
console.log(arr5.concat([3, 4], [5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(arr5.concat([3, 4], 5, 6)); // [1, 2, 3, 4, 5, 6]

// normally, it only copies elements from arrays and other objects, even if they look like arrays. are added as
// a whole:

let arr6 = [1, 2];

let arrayLike = {
    0: "something",
    length: 1
};

console.log(arr6.concat(arrayLike)); // [1, 2, {object}]



// Iterate: forEach

// arr.forEach() method allows to run a function for every element of the array.

// arr.forEach(function(item, index, array){ ... do something with an item }); - basic syntax

["Bilbo", "Gandalf", "Tranduil"].forEach(console.log); // - log each item in array
// Bilbo 0 (3) ['Bilbo', 'Gandalf', 'Tranduil']
// Gandalf 1 (3) ['Bilbo', 'Gandalf', 'Tranduil']
// Tranduil 2 (3) ['Bilbo', 'Gandalf', 'Tranduil']


["Bilbo", "Gandalf", "Aragorn"].forEach((item, index, array) => {// - detailed log and format into readable text
    console.log(`${item} is at index ${index} in ${array}.`);
    // Bilbo is at index 0 in Bilbo,Gandalf,Aragorn.
    // Gandalf is at index 1 in Bilbo,Gandalf,Aragorn.
    // Aragorn is at index 2 in Bilbo,Gandalf,Aragorn.
})



// Searching in array

// indexOf/lastIndexOf and includes
// the methods arr.indexOf and arr.includes have the similar syntax and do essentialy same as their string 
// counerparts, but operate on items instead of characters

// arr.indexOf(item, from) - baic syntax, looks for item starting from index from, and returns the index where
// it was found, otherwise -1

// arr.includes(item, form) - basic syntax, looks for item starting from index from, returns true if found

// usually, these methods are used with only one argument: the item to search. by default search is from
// beginning.



let arr7 = [1, 0, false];

console.log(arr7.indexOf(0)); // 1
console.log(arr7.indexOf(false)); // 2
console.log(arr7.indexOf(null)); // -1 , because it wasnt found in array

// important to know that indexOf uses the strict equality === for comparison. So, if we look for false, it 
// finds exactly false and not the zero.

console.log(arr7.indexOf(true)); // -1, was not found in array

// to check if item exists in the array and doesnt need the index - arr.includes is preffered to use:

console.log(arr7.includes(0)); // true
console.log(arr7.includes(false)); // true
console.log(arr7.includes(true)); // false

// also we have arr.lastIndexOf() method, which is the same as indexOf(), but looks for from right to left:

let vegetables1 = ["Cucumber", "Tomato", "Beat", "Tomato"];
console.log(vegetables1.lastIndexOf("Tomato")); // 3
console.log(vegetables1.indexOf("Tomato")); // 1

// noteworthy to mention that arr.includes correctly handles NaN, unlike indexOf():

const arr8 = [NaN];
console.log(arr8.indexOf(NaN)); // -1, not found
console.log(arr8.includes(NaN)); // true



// find and findIndex/findLastIndex


// arr.find(fn) - method to find an object with specific conditions.
// basic syntax:

// let result = arr.find(function(item, index, array){
// if true is returned, item is returned and iteration is stopped
// for falsy scenario returns undefined 
//});

// function is called for elements of the array, one after another:
// - item is element
// - index is the index 
// array is the array itself 

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Louis" },
    { id: 4, name: "John" }
];

console.log(users.findIndex(user => user.name == "John")); // 0 is the position of first John in array
console.log(users.findLastIndex(user => user.name == "John")); // 3 is the position of last John in array
console.log(users.findIndex(user => user.name == "Orlando")); // -1, Orlando is not found in the array


// filter(fn) is the method that looks for multiple elements and returns all matching elements.
// basic syntax:

// let results = arr.filter(function(item, index, array){
// if true, items is pushed to results and iteration continues
// returns empty array if nothing found
// });

let users1 = [
    {id: 1, name: "Tod"},
    {id: 2, name: "Ted"},
    {id: 3, name: "Zach"}
]   

let someUsers = users1.filter(item => item.id <= 1);
let someUsers1 = users1.filter(item => item.id > 1);

console.log(someUsers); // [{"Tod"}]
console.log(someUsers1); // [{"Ted"}, {"Zach"}]

