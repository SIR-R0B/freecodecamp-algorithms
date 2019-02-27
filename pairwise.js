/*

Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at indice 0 rather than the 1 at indice 1, because 0+2 < 1+2.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

*/

function pairwise(arr, arg) {
  let indexArr = [];
  let result = 0;
  let otherIndex;
  let pair;

  for (let i = 0; i < arr.length; i++){
    pair = arg - arr[i];
    if((arr.indexOf(pair)!= -1)&&(i != (arr.indexOf(pair)))){ //if arg minus ith element exists and the index is not being doubled/used twice
      if (indexArr.includes(i)||(indexArr.includes((arr.indexOf(pair))))){
          if (arr.indexOf(pair) != arr.lastIndexOf(pair) && (i != (arr.lastIndexOf(pair)) && (!indexArr.includes(arr.lastIndexOf(pair))))){
              otherIndex = arr.lastIndexOf(pair);
          }else{
            break;
          }

      }else{
              otherIndex = (arr.indexOf(pair));
      }

        indexArr.push(i,otherIndex);
        result += (i + otherIndex);
    }  

  }
  return result;
}

pairwise([1, 1, 1], 2)
