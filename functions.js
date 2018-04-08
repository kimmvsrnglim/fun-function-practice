console.log('yay! practicing js functions!');

// Positive Numbers 
    // Taking in an array of numbers and returning a new array with only positive numbers

var arr = [-2, -1, 0, 1, 2, 3];

var newArr = arr.filter(function(positiveNums) {
    return positiveNums >= 0;
});

console.log(newArr);


// Even Numbers
    // Given an array of numbers, return array of even numbers 

var nums = [1, 2, 3, 4, 5, 6];

var newNums = nums.filter(function(evenNums) {
    return evenNums % 2 == 0;
});

console.log(newNums);

// Square the Numbers 

var numsToSquare = [1, 2, 3, 4];

var squaredNums = numsToSquare.forEach(function(numToSquare) {
    return console.log(Math.pow(numToSquare, 2));
})


