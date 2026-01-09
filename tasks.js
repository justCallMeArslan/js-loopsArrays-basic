
// Which values does the while loop show?

// For every loop iteration, write down which value it outputs and then compare it with the solution.
// Both loops alert the same values, or not?



let i = 0; // number of how many times loop will work
while (++i < 5) console.log(i); // return 1, 2, 3 , 4 and at 5 loop stops because it started comparison from 1,
// //because ++ incremnts 0 to 1 before doing any check on condition

// // | Step | `++i` result | Condition | `i` inside loop |
// // | ---- | ------------ | --------- | --------------- |
// // | 1    | `++i` → `1`  | `1 < 5` ✅ | `1`             |
// // | 2    | `++i` → `2`  | `2 < 5` ✅ | `2`             |
// // | 3    | `++i` → `3`  | `3 < 5` ✅ | `3`             |
// // | 4    | `++i` → `4`  | `4 < 5` ✅ | `4`             |
// // | 5    | `++i` → `5`  | `5 < 5` ❌ | loop stops      |



let x = 0;
while (x++ < 5) console.log(x); // returns 1, 2, 3, 4, 5 , because loop will cycle 5 times, instead of 4 like in
// // previous example above. Here check happens before variable x was incremented

// // | Step | `x++` compared | Condition | `x` inside loop |
// // | ---- | -------------- | --------- | --------------- |
// // | 1    | compare `0`    | `0 < 5` ✅ | `1`             |
// // | 2    | compare `1`    | `1 < 5` ✅ | `2`             |
// // | 3    | compare `2`    | `2 < 5` ✅ | `3`             |
// // | 4    | compare `3`    | `3 < 5` ✅ | `4`             |
// // | 5    | compare `4`    | `4 < 5` ✅ | `5`             |
// // | 6    | compare `5`    | `5 < 5` ❌ | loop stops      |



// // Which values get shown by the "for" loop?

// // For each loop write down which values it is going to show. Then compare with the answer.
// // Both loops alert same values or not?

// for (let i = 0; i < 5; i++) console.log(i);
// for (let i = 0; i < 5; ++i) console.log(i);

// answer: both of this loops come up with the same result, because if go through the loop we can see actions 
// which for(...) loops perform in order:

// 1. execute i = 0;
// 2. compare if its less than 5;
// 3. if true - execute loop body (alert) and increment; 
// also its worth mentioning that value by the increment isnt returned, so it gives no difference we use ++i
// or i++.



// Output even numbers in the loop

// Use the for loop to output even numbers from 2 to 10.

for (let k = 2; k <= 10; k++) {
    if (k % 2 == 0) {
        console.log(k);
    }
}


// Replace "for" with "while"
// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

for (let p = 0; p < 3; p++) {
    console.log(`number ${p}!`);
}

let j = 0;
while (j < 3) {
    console.log(`number ${j}!`);
    j++;
}


// Repeat until the input is correct

// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to 
// input again.
// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the 
// input/enters an empty line.
// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a
// non-numeric input in this task.


// let input = +prompt("Input a number greater then 100", "0");

// while (input <= 100 && input) { // && input used for the cases where number more than 100 or null 
//     input = +prompt("Input a number greater then 100", "0");
// }


// Output prime numbers

// An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything 
// except 1 and itself.
// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
// Write the code which outputs prime numbers in the interval from 2 to n.
// For n = 10 the result will be 2,3,5,7.
// P.S. The code should work for any n, not be hard-tuned for any fixed value.


let n = 10;

primeNum:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue primeNum;
    }
    console.log(i);
}


// What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
console.log(fruits.length); // answer is 4, because array is an object and both variables are references to the
//same array


// Let’s try 5 array operations.

// - Create an array styles with items “Jazz” and “Blues”.
// - Append “Rock-n-Roll” to the end.
// - Replace the value in the middle with “Classics”. Your code for finding the middle value should work for 
// any arrays with odd length.
// - Strip off the first value of the array and show it.
// - Prepend Rap and Reggae to the array.

// The array in the process:
// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll


let styles = ["Jazz", "Blues"]; // Jazz, Blues

styles.push("Rock-n-Roll"); //Jazz, Blues, Rock-n-Roll

// styles[1] = "Classics"; // Jazz, Classics, Rock-n-Roll - suitable only in that case
styles[Math.floor((styles.length - 1) / 2)] = "Classics"; // correct answer to task

styles.shift(); // Classics, Rock-n-Roll

styles.unshift("Rap", "Reggae"); // Rap, Reggae, Classics, Rock-n-Roll



// What is the result? Why?

let arr = ["a", "b"];

arr.push(function () {
    console.log(this);
});

arr[2](); // ["a", "b", function()] if this is passed; if we pass string or number, result is value we passed



// Write the function sumInput() that:

// - Asks the user for values using prompt and stores the values in the array.
// - Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// - Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.

function sumInput() {

    let inputs = [];

    while (true) {
        let value = prompt("Enter your number", 0);

        if (value === "" || value === null || !isFinite(value)) break; // checking for input; isFinite needed 
        // to check if input is anything but number or string with numbers

        inputs.push(+value); // + to convert string to number in array
    }

    let sum = 0;
    for (input of inputs) { // for each input add it to sum and store value
        sum += input;
    }
    return sum;
}

console.log(sumInput()); // uncomment to call the function


// Translate border-left-width to borderLeftWidth

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased 
// “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.

function camelize(str) {
    return str
        .split("-")
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        // we give argument word and index as a position
        // add conditional check: 
        // - if position == 0 -> put word as it is
        // - if position != 0 -> take all word's (which are not at position 0) first letter and and make its
        // first letter upper case, add to this capital letter word without first letter
        .join("");

}

console.log(camelize("background-color"));
console.log(camelize("i-want-to-eat-something-delicious"));


// Filter range

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or 
// equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.

// For instance:

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)
// alert( arr ); // 5,3,8,1 (not modified)

let array = [25, 13, 29, 40, 8, 16, 3, 12];

function filterRange(arr, a, b) {
    return arr
        .filter(item => a < item && item < b)
        .sort((a, b) => {
            return a - b
        });


}

let filtered = filterRange(array, 10, 27);

console.log(array);
console.log(filtered);


// Filter range "in place"

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except 
// those that are between a and b. The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.

// For instance:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
// alert( arr ); // [3, 1]


let arr1 = [5, 3, 8, 1];

function filterRangeInPlace1(arr, a, b) {
    let filtered = arr.filter(item => item < a || b > item);
    arr.length = 0;
    arr.push(filtered);
};

filterRangeInPlace1(arr1, 1, 4);
console.log(arr1);

//or 

let arr2 = [5, 3, 8, 1];

function filterRangeInPlace2(arr, a, b) {

    for (let i = 0; i < arr.length; i++) { // loop through array until it ends 
        let val = arr[i]; // // value at position 0, 1, etc

        // remove if outside of the interval
        if (val < a || val > b) {
            arr.splice(i, 1); // if true remove 1 element at postion i 
            i--; //move 1 index back (because i++ as a part of loop and next number in array will be skipped as 
            // position will shift to 1, instead of returning back to 0 for another check)
        }
    }

}

filterRangeInPlace2(arr2, 1, 4);
console.log(arr2);

// or

let arr3 = [5, 3, 8, 1];

function filterRangeInPlace3(arr, a, b) {
    arr.splice(
        0, // start with first item
        arr.length, // remove entire array 
        arr.filter(val => val < a || b > val) // push filtered items into array
    );
}

filterRangeInPlace3(arr3, 1, 4);
console.log(arr3);


// Sort in decreasing order

let arr4 = [5, 2, 1, -10, 8];

arr4.sort((a, b) => b - a);

console.log(arr4); // 8, 5, 2, 1, -10


// Copy and sort array
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.


function copySorted(arr) {
    return [...arr].sort(); // another option is arr.slice().sort(); [...arr] copies original array, same as 
    // slice() with empty arguments
}

let arr5 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr5);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr5); // HTML, JavaScript, CSS (no changes)


// Shuffle an array
// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

let array1 = [1, 2, 3];

// shuffle(arr);
// arr = [3, 2, 1]

// shuffle(arr);
// arr = [2, 1, 3]

// shuffle(arr);
// arr = [3, 1, 2]
// // ...
// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or 
// [1,3,2] or [3,1,2] etc, with equal probability of each case.

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
shuffle(array1);
console.log


// Filter unique array members

// Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
    return [...new Set(arr)].sort((a, b) => a - b);
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

let cars = ["BWM", "Audi", "Audi", "BWM", "Renault", "Peugeot", "Renault"];

console.log(unique(strings)); // Hare, Krishna, :-O
console.log(unique(cars));


// or 

function unique(arr) {
    let result = []; // setting result as a copy (empty) string

    for (let str of arr) { // looping through array to check for every item
        if (!result.includes(str)) { // if item passed doesnt exit in result 
            result.push(str); // push it to result 
        }
    }

    return result; // returns new array which contains only unique items
}

console.log(unique(cars));
console.log(unique(strings));


// A maximal subarray - UNSOLVED!

// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
// The task is: find the contiguous subarray of arr with the maximal sum of items.
// Write the function getMaxSubSum(arr) that will return that sum.

// For instance:

// getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (take all)

// If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

// getMaxSubSum([-1, -2, -3]) = 0

// Please try to think of a fast solution: O(n2) or even O(n) if you can.