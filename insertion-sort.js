/**
 * Insertion Sort.
 * @param {Array} arr. An array needs to be sorted.
 * @return {Array}. Return the sorted array.
 */
function insertionSort1(arr) {
    var len = arr.length,
        i = 0,
        j = 0;
    for(i = 1; i<len; i++) {
        for(; j<i; j++) {
            if(arr[j] > arr[i]){
                arr.splice(j,0,arr[i]);
            }
        }
    console.log(arr);
    }
    return arr;
}
function insertionSort2(arr) {
    var len = arr.length,
        i = 0,
        j = 0;
    for(; i<len; i++) {
        for(j = i+1; 0<j; j--) {
            if(arr[j]<arr[i]){
                arr.splice(i,0,arr[j]);
            }
        }
    console.log(arr);
    }
   return arr;
}

insertionSort1([1,10,40,3,20,2,17]);
insertionSort2([1,10,40,3,20,2,17]);