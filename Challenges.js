//1. Factorial
function factorial(int) {
    const myArray = [];
    const myReducer = (accumulator, currentValue) => accumulator * currentValue;

    if (int > 0) {
        for (let i = int; i >= 1; i--){
            myArray.push(i);}
    } else { return int }

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
    } else {
        return false
    }
}

/* 10. Multiples of 100 */
function divisible(num) {
    const myVariable = num;
    const myString = myVariable.toString();

    if (myString == 0) {
        return true
    } else if (myString.substring(myString.length - 2, myString.length) == "00") {
        return true
    } else {
        return false
    }
};

/* 11. Compare Strings by Sum of Characters */
function comp(str1, str2) {
    return (str1.length === str2.length) ? true : false;
}

/* 12. Slice of Pie */
function equalSlices(total, people, each) {
    if (people == 0) {
        return true
    } else if (total >= people * each) {
        return true
    } else {
        return false
    }
}

/* 13. Sort numbers in ascending order */
function sortNumsAscending(arr) {
    function compare(a, b) {
        return a - b;
    }

    if (arr == null) {
        return [];
    } else {
        return arr.sort(compare);
    }
}

/* 14. Is the average of all elements a whole number? */
function isAvgWhole(arr) {
    var avg = arr.reduce((a, b) => a + b) / arr.length;
    return avg % 1 > 0 ? false : true;
}

/* 15. First and Last Index */
const charIndex = (word, char) => word.indexOf(char) == -1 ? undefined : [word.indexOf(char), word.lastIndexOf(char)];

/* 16. Find the Smallest and Biggest Numbers */
function minMax(arr) {
    const myArray = [];
    myArray.push(Math.min(...arr));
    myArray.push(Math.max(...arr));
    return myArray;
}

/* 17. Convert to Decimal Notation */
function convertToDecimal(perc) {
    const noPerc = perc.map(x => x.slice(0, x.length - 1));
    return noPerc.map(x => parseFloat(x / 100));
}

/* 18. Find the Minimum, Maximum, Length and Average Values */
function minMaxLengthAverage(arr) {
    const solutionArray = [];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const arraySum = arr.reduce(reducer);

    solutionArray.push(Math.min(...arr));
    solutionArray.push(Math.max(...arr));
    solutionArray.push(arr.length);
    solutionArray.push(arraySum / arr.length);

    return solutionArray;
}

/* 19. Repeating Letters */
function doubleChar(str) {
    const stringWithDoubleChars = str.split('').map(x => x.repeat(2)).join('');
    return stringWithDoubleChars;
}

/* 20. Increment to Top */
function incrementToTop(arr) {
    var newSet = new Set(arr);
    if (newSet.length == 1) {
        return 0;
    } else {
        const newArr = arr.sort((a, b) => a - b);
        const largest = newArr.pop();
        const diffs = newArr.map(x => largest - x);
        return diffs.reduce((a, b) => a + b);
    }
}

/* 21. How many vowels? */
function countVowels(str) {
    let regEx = /[AaEeIiOoUu]/g;
    return str.match(regEx).length;
}

/* 22. Pi to N Decimal places */
const myPi = n => Number(Math.PI.toFixed(n));

/* 23. Absolute Sum */
function getAbsSum(arr) {
    const reducer = (runningTotal, arrElement) => runningTotal + Math.abs(arrElement);
    return arr.reduce(reducer, 0);
}

/* 24. Phone Number formatting */
function formatPhoneNumber(numbers) {
    let myString = numbers.join('');
    const areaCode = myString.slice(0, 3);
    const preFix = myString.slice(3, 6);
    const lineNumber = myString.slice(6, 10);

    return `(${areaCode}) ${preFix}-${lineNumber}`
}

/* 25. Upper or Lower Case */
function stepsToConvert(str) {
    const arrayOfLCase = str.match(/[a-z]/g);
    const arrayOfUCase = str.match(/[A-Z]/g);

    if (str == ' ' || arrayOfLCase == null || arrayOfUCase == null) {
        return 0
    } else if (arrayOfLCase.length > arrayOfUCase.length) {
        return arrayOfUCase.length
    } else if (arrayOfLCase.length < arrayOfUCase.length) {
        return arrayOfLCase.length
    } else {
        return arrayOfLCase.length
    }
}

/* 26 Area of a Triangle */
function triArea(base, height) {
    return ((base * height) / 2)
}

/* 27 Even Odd Partition */
function evenOddPartition(arr) {
    const evens = [];
    const odds = [];

    for (let i = 0; i < arr.length; i++) {
        arr[i] % 2 == 0 ? evens.push(arr[i]) : odds.push(arr[i])
    }
    return [evens, odds];
}

/* 28. Divisible by 5 */
const divisibleByFive = n => n % 5 == 0 ? true : false;

/* 29. Difference of Max and Min Numbers in Array */
function differenceMaxMin(arr) {
    const compare = (a, b) => a - b;
    arr.sort((a, b) => compare(a, b));
    return arr[arr.length - 1] - arr[0];
}

/* Is the String Empty ? */
function isEmpty(s) {
    return s === "" ? true : false;
}

/* Hamming Distance */
function hammingDistance(str1, str2) {
    const trueFalse = [];
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2[i]) {
            trueFalse.push(true)
        }
    }
    return str1.length - trueFalse.length;
}

/* Same Number of Unique Elements */
function same(a1, a2) {
    const youNeekA1 = new Set(a1);
    const youNeekA2 = new Set(a2);

    return youNeekA1.size == youNeekA2.size ? true : false;
}

/* Concatenating Two Integer Arrays */
const concat = (arr1, arr2) => arr1.concat(arr2);

/* Odd product */
function oddProduct(arr) {
    const newArr = arr.filter(x => x % 2 > 0);
    return newArr.reduce((a, b) => a * b);
}

/* return smaller of two numbers as strings, without converting to integers :) */
function smallerNum(n1, n2) {
    if (n2.length < n1.length) {
        const newStr2 = "0".repeat(Math.abs(n1.length - n2.length)) + n2;
        return n1 < newStr2 ? n1 : n2;
    } else if (n1.length < n2.length) {
        const newStr1 = "0".repeat(Math.abs(n1.length - n2.length)) + n1;
        return newStr1 < n2 ? n1 : n2;
    } else if (n1.length == n2.length) {
        return n1 < n2 ? n1 : n2;
    }
}

/* return smaller of two numbers as strings */
const a1 = parseInt(n1);
const a2 = parseInt(n2);

return a1 < a2 ? a1.toString() : a2.toString();