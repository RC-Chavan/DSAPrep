/**
 *  Time Complexity: O(n^2)
 *  Space Complexity: O(1)
 * 
 *  code Explaination:
 *  1. We are iterating over the array.
 *  2. We are finding the minimum element in the array.
 *  3. We are swapping the minimum element with the current element.
 *  4. We are returning the sorted array.
 */
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minimum = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[minimum] > arr[j]) {
                minimum = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minimum];
        arr[minimum] = temp;
    }

    return arr;
}

console.log(selectionSort([ 2, 3, 4, 5, 1 , 2 ,9, 0, 0 ]));
console.log(selectionSort([4.1, 1, 4, 2, 89, 12, 21, 32, 34, 21]));
console.log(selectionSort([ 0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]));
