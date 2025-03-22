/**
 *  Bubble Sort
 *  Time Complexity: O(n^2)
 *  Space Complexity: O(1)
 */

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([32, 12, 21, 43, 100, 20, 00, 01, 02]));