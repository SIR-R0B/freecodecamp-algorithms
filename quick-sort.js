let quickSort = (arr, left = 0, right = arr.length-1) => {
    if (left >= right) return;
    let pivot = arr[left];
    let index = partition(arr,left,right,pivot);
    quickSort(arr,left,index-1);
    quickSort(arr, index, right);
    return arr;
}
let partition = (arr, left, right, pivot) => {
    while(left <= right){
        while(arr[left] < pivot){
            left++;
        }
        while(arr[right] > pivot){
            right--;
        }
        if(left <= right){
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return left;
}

console.log(quickSort([4,1,55,9238,0,2,3,55,99,1000,7,36]));
