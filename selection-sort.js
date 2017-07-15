/**
 * Selection Sort
 * @param {Array} arr. An array needs to be sorted.
 * @return {Array}. Return the sorted array.
 */
function selectionSort(arr) {
    var len = arr.length,
        i = 0,
        j = 0,
        min = 0,
        temp = 0;
    for(; i<len; i++) {
        min = i;
        for(j = i+1; j<len; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
        console.log(arr);
    }
    return arr;
}
