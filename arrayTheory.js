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
console.log(vegetables.at(-1)); // Onion


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
    { id: 1, name: "Tod" },
    { id: 2, name: "Ted" },
    { id: 3, name: "Zach" }
]

let someUsers = users1.filter(item => item.id <= 1);
let someUsers1 = users1.filter(item => item.id > 1);

console.log(someUsers); // [{"Tod"}]
console.log(someUsers1); // [{"Ted"}, {"Zach"}]



// Transform an array


// map() - calls the function for each element of the array and returns the array of results.

// let result = arr.map(function (item, index, array){ // - basic syntax
//     // returns the item value instead of item
// });

let lengths = ["Croco", "Leo", "Tiger", "Bumblebee"];
console.log(lengths.map(item => item.length)); // [5, 3, 5, 9]


// sort(fn) - sorts the array in place , changing its element order. Default sorting order is lexicographic.

let sortNum = [1, 15, 425, 2, 124];
sortNum.sort();

console.log(sortNum); // [1, 124, 15, 2, 425] - lexicographic order used, as we didnt set fn as arg to sort()

function compareNumeric(a, b) {
    if (a > b) return 1; // a moves after b
    if (a == b) return 0; // stays same place
    if (a < b) return -1; // a stays before b
}

let arr9 = [1, 24, 12, 7];

arr9.sort(compareNumeric);

console.log(arr9); //[1, 7, 12, 24]

// if we want we can check what pairs created fot sorting and how they compared. Algorith may compare an element
// with multiple other, but it tries to make as few comparisons as possible:

let randomArr = [1, -2, 15, 2, 0, 8].sort(function (a, b) {
    console.log(a + " <> " + b);  //-2 <> 1
    // 15 <> 1
    // 2 <> 1
    // 2 <> 15
    // 0 <> 2
    // 0 <> 1
    // 0 <> -2
    // 8 <> 1
    // 8 <> 15
    // 8 <> 2

    return a - b;

});

console.log(randomArr); // [-2, 0, 1, 2, 8, 15] 

// arrow function can be used exactly the same way:

let randomArrArrow = [1, -2, 15, 2, 0, 8].sort((a, b) => a - b);

console.log(randomArrArrow); // [-2, 0, 1, 2, 8, 15] same result, but kind of shorter 


// localeCompare() - method used to correctly sort letters, such as Ö for example:

let countries = ["Österreich", "Andorra", "Vietnam", "Russland"];

console.log(countries.sort((a, b) => a > b ? 1 : -1)); // Andorra, Russlan, Vietnam , Osterreich - wrong order
console.log(countries.sort((a, b) => a.localeCompare(b))); // Andorra, Osterreich, Russland, Vietnam - correct


// reverse() - reverse the order of elements in arr.

let arr10 = [1, 2, 3, 4, 5];
arr10.reverse();

console.log(arr10); // [5, 4, 3, 2, 1]


// split and join 

// split(delim) - method that splits the string into an array by the given delimiter "delim".

let names = "Aragorn, Aratorn, Tranduil, Gimli";

let arr11 = names.split(", ");
console.log(arr11); // ['Aragorn', 'Aratorn', 'Tranduil', 'Gimli']

for (let name of arr11) {
    console.log(`A message to ${name}.`); //A message to Aragorn. and so on with each name
}

// with empty delim

let str = "test";
console.log(str.split('')); // t,e,s,t

let arr12 = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2); // we can add limiter of array length and it will
// cut and ignore extra elements
console.log(arr12); // Bilbo, Gandalf


// join(glue) - works oppositely to split(). it creates a string of arr items joined by glue betweem them:

let arr13 = ["Bilbo", "Gandalf", "Nazgul"];
let str2 = arr13.join("; "); // glue the array into a string using ;

console.log(str2); //Bilbo; Gandalf; Nazgul


//reduce/reduceRight - used to calculate single value based on the array. 
// basic syntax: 

// let value = arr.reduce(function (accumulator, item, index, array) {
// 
// }, [initial];

// the function applied to all array elements one after another and "carries on" its result to the next call.
// Arguments :
// - accumulator is the result of previous function call, equals initial the first time(if initial is provided)
// - item is the current array item
// - is the position
// - si the array

let arr14 = [1, 2, 3, 4, 5];
let result = arr14.reduce((sum, current) => sum + current, 0); // 0 is initial sum

console.log(result); // 15

// On the first run, sum is the initial value (the last argument of reduce), equals 0, and current is the 
// first array element, equals 1. So the function result is 1.
// On the second run, sum = 1, we add the second array element (2) to it and return.
// On the 3rd run, sum = 3 and we add one more element to it, and so on.

//reduceRight() does the same but goes from right to left


// Array.isArray() - returns true if the value is an array, and false otherwise.

console.log(typeof {}); // object
console.log(typeof []); // object, because arrays based on objects.

console.log(Array.isArray({})); // false 
console.log(Array.isArray([])); // true


// Most methods support "thisArg" - works the same way as this for function

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};

let users3 = [
    { age: 16 },
    { age: 20 },
    { age: 23 },
    { age: 30 }
];

// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army); // better to use - users.filter(user => army.canJoin(user))


// If in the example above we used users.filter(army.canJoin), then army.canJoin would be called as a 
// standalone function, with this = undefined, thus leading to an instant error.
// A call to users.filter(army.canJoin, army) can be replaced with users.filter(user => army.canJoin(user)), 
// that does the same. The latter is used more often, as it’s a bit easier to understand for most people.



// TOP: Some examples of Array magic

// Let’s consider a sumOfTripledEvens function. It will:

// Take in an array.
// For every even number, it will triple it.
// Then it will sum all those even numbers.

function sumOfTripledEvens0(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {  // Step 1: If the element is an even number
            const tripleEvenNumber = array[i] * 3;  // Step 2: Multiply this number by three
            sum += tripleEvenNumber; // Step 3: Add the new number to the total
        }
    }
    return sum;
}


function sumOfTripledEvens(array) {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const filteredArr = arr.filter(item => item % 2 === 0);
    const mappedArr = filteredArr.map((item) => item * 3);
    const reducedArr = mappedArr.reduce((sum, current) => sum + current, 0);

}

sumOfTripledEvens();

// or we can write it in more laconically

// function sumOfTripledEvens(array) {
//   return array
//     .filter((num) => num % 2 === 0)
//     .map((num) => num * 3)
//     .reduce((acc, curr) => acc + curr);
// };
