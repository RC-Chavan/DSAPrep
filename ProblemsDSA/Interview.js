// Q1. Anagrams
// function groupAnagrams(words) {
//     let map = {};
//     for(let i = 0; i < words.length; i++) {
//         let sortedWord = words[i].split("").sort().join("");
//         if (! map[ sortedWord ] ) {
//             map[sortedWord] = [];
//         }
//         map[sortedWord].push(words[i]);
//     }
//     return map;
// }

// let result = groupAnagrams(['eat', 'tea', 'ate', 'tan', 'nat', 'bat']);
// result = Object.values(result);
// console.log(result);

// Q2. Pagination

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let pageSize = 2;
// let pageNumber = 3;

// function paginate(array, pageSize, pageNumber) {
//     let start = (pageSize * (pageNumber - 1));
//     let end = start + pageSize;

//     let result = array.slice(start, end);

//     return result;
// }

// let result = paginate(array, pageSize, pageNumber);
// console.log(result);

// Q3. Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// let nums = [-4,-1,0,3,10]

// function square(num) {
//     let square = num * num;
//     return square;
// }

// function main(nums) {
//     let result = [];
//     // sortedResult = [];
//     for (let i = 0; i < nums.length; i++) {
//         let number = square(nums[i]);
//         result.push(number);
//     }
//     console.log(result);
//     let a = result.sort((a, b) => b - a);
//     return result;
//     // for (let j = 0; j < result.lenght; j++) {
//     //     console.log()
//     // }
// }
// let result = main(nums);
// console.log(result);

// sorting algorithm:- 
// brute force - 


// row = 
// column = 
  // [1, 2, 3,
  // 4, 5, 6,
  // 7, 8, 9]

// function spiralOrder(matrix) {
//     let row = matrix.length;
//     let column = matrix[0].length;

//     for(let i = 0; i < matrix.length; i++) {
//         console.log(row);
//         console.log(column);
//         console.log(matrix);
//     }
//     return result;
// }

// let result = spiralOrder([[1, 2, 3],[4, 5, 6], [7, 8, 9]]);