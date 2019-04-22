//Return the factorial
function factorial(int) {
    const myArray = [];
    const myReducer = (accumulator, currentValue) => accumulator * currentValue;

    if (int > 0) {
        for (let i = int; i >= 1; i--) {
            myArray.push(i);
        }
    } else {
        return int
    }

    return myArray.reduce(myReducer);
}


// Valid Zip Code
// Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code.

const isValid = zip => zip.match(/\d{5}/) ? true : false;

// Amplify the Multiples of 4
// Create a function that takes an integer and returns an array from 1 to the given number, where:

// 1. If the number can be divided evenly by 4, amplify it by 10(i.e.return 10 times the number).
// 2. If the number cannot be divided evenly by 4, simply return the number.
function amplify(num) {
    const myArray = [];

    for (let i = 1; i <= num; i++) {
        if (i % 4 == 0) {
            myArray.push(i * 10)
        } else(myArray.push(i));
    }

    return myArray;
}

//Sum of Cubes
// Create a function that takes in an array of numbers and returns the sum of its cubes.
function sumOfCubes(nums) {
    return nums.reduce((a, b) => a + (Math.pow(b, 3)), 0);
}

//Filter strings from an array
// Create a function that takes an array of non-negative numbers and strings and return a new array without the strings.
function filterArray(arr) {
    const filtered = arr.filter(function (item) {
        return typeof item == "number";
    })
    return filtered;
}

// Is the Average of All Elements a Whole Number?
// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.
function isAvgWhole(arr) {
    var avg = arr.reduce((a, b) => a + b) / arr.length;
    return avg % 1 > 0 ? false : true;
}

//Factor Chain
// A factor chain is an array where each previous element is a factor of the next consecutive element. Create a function that determines whether or not an array is a factor chain. 
function factorChain(arr) {
    const lastElement = arr.pop();
    const filteredArray = arr.filter(x => lastElement % x > 0);

    if (filteredArray.length > 0) {
        return false
    } else {
        return true
    }

}

//Find the missing number
//Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.

function missingNums(arr) {
    const allDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const reducer = (a, b) => a + b;
    const sumOfAllDigits = allDigits.reduce(reducer);
    const sumOfInputArray = arr.reduce(reducer);
    return sumOfAllDigits - sumOfInputArray;
}

//Largest Swap
// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
// To illustrate:
// largestSwap(27) ➞ false
// largestSwap(43)➞ true
// If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.
function largestSwap(num) {
    myString = num.toString();

    if (myString.charAt(0) > myString.charAt(1) || myString.charAt(0) == myString.charAt(1)) {
        return true
    } else { return false }
}


