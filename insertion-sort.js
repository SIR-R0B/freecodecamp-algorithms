/*
Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
*/
/*
function selectionSort(array) {
  // change code below this line
  let sortArray = [];

  for (let i = 0; i < array.length+sortArray.length; i++) {
    let min = Math.min(...array);
    sortArray.push(min);
    array.splice((array.indexOf(min)),1);
  }
  console.log(sortArray);
  // change code above this line
  return sortArray;
}*/

function selectionSort(array) {
    let temp = array; // copy array so you can remove values without changing array
    let sortArray = [];
  
    for (let i = 0; i < temp.length+sortArray.length; i++) { // only loop through temp
      let min = Math.min(...temp) // gets the min from temp
      sortArray.push(min)
      temp.splice((temp.indexOf(min)),1) // removes the min for the next loop
    }
    console.log(sortArray);
    return sortArray;
  }



// test array:
selectionSort([
  4,
  1,
  2,
  8,
  345,
  123,
  43,
  32,
  5643,
  63,
  123,
  43,
  2,
  55,
  1,
  234,
  92
]);
