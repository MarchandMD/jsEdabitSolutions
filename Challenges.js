//1. Factorial
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

//2. Valid Zip Code
const isValid = zip => zip.match(/\d{5}/) ? true : false;

//3. Amplify the Multiples of 4
function amplify(num) {
    const myArray = [];

    for (let i = 1; i <= num; i++) {
        if (i % 4 == 0) {
            myArray.push(i * 10)
        } else(myArray.push(i));
    }
    return myArray;
}

//4. Sum of Cubes
function sumOfCubes(nums) {
    return nums.reduce((a, b) => a + (Math.pow(b, 3)), 0);
}

//5. Filter strings from an array
function filterArray(arr) {
    const filtered = arr.filter(function (item) {
        return typeof item == "number";
    })
    return filtered;
}

//6. Is the Average of All Elements a Whole Number?
function isAvgWhole(arr) {
    var avg = arr.reduce((a, b) => a + b) / arr.length;
    return avg % 1 > 0 ? false : true;
}

//7. Factor Chain
function factorChain(arr) {
    const lastElement = arr.pop();
    const filteredArray = arr.filter(x => lastElement % x > 0);

    if (filteredArray.length > 0) {
        return false
    } else {
        return true
    }

}

//8. Find the missing number
function missingNums(arr) {
    const allDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const reducer = (a, b) => a + b;
    const sumOfAllDigits = allDigits.reduce(reducer);
    const sumOfInputArray = arr.reduce(reducer);
    return sumOfAllDigits - sumOfInputArray;
}

//9. Largest Swap
function largestSwap(num) {
    myString = num.toString();

    if (myString.charAt(0) > myString.charAt(1) || myString.charAt(0) == myString.charAt(1)) {
        return true
    } else { return false }
}


