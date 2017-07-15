/**
 * Bubble Sort.
 * @param {Array} arr. An array needs to be sorted.
 * @return {Array}. Return the sorted array.
 */
function bubbleSort(arr) {
    var i = 0,
        j = 0,
        temp = 0;
    for(i = arr.length-1; 0 < i; i--) {
        for(; j < i; j++) {
            if(arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        console.log(arr);
    }
    return arr;
}
