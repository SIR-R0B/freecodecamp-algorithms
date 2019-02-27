/*

Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at indice 0 rather than the 1 at indice 1, because 0+2 < 1+2.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

*/

function pairwise(arr, arg) {
  let indexArr = [];
  let result = 0;
  let otherIndex;

  for (let i = 0; i < arr.length; i++){
    if((arr.indexOf(arg - arr[i])!= -1)&&(i != (arr.indexOf(arg - arr[i])))){ //if arg minus ith element exists and the index is not being doubled/used twice
      if (indexArr.includes(i)||(indexArr.includes((arr.indexOf(arg - arr[i]))))){
          if (arr.indexOf(arg-arr[i]) != arr.lastIndexOf(arg-arr[i]) && (i != (arr.lastIndexOf(arg - arr[i])) && (!indexArr.includes(arr.lastIndexOf(arg-arr[i]))))){
              otherIndex = arr.lastIndexOf(arg - arr[i]);
          }else{
            break;
          }

      }else{
              otherIndex = (arr.indexOf(arg-arr[i]));
      }

        indexArr.push(i,otherIndex);
        console.log('IndexArray: '+indexArr);
        result += (i + otherIndex);
        console.log('Result: '+result)
    }  

  }
console.log('final indexArr: '+indexArr);
  return result;
}

pairwise([1, 1, 1], 2)
