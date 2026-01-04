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





