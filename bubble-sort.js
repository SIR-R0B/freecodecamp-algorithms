function bubbleSort(array) {
  // first I implemented a sweeping bubble sort that would start again at the beginning after every sort, which is probably not a bubble sort at all but a different kind of sort.
/*let temp;
let i = 0;

while(i < array.length){
  if (array[i+1]<array[i]){
      temp = array[i];
      array[i] = array[i+1];
      array[i+1] = temp;
      i = 0;
  } else i++;
}
  console.log(array);*/

function swap(a,b){
let temp;
temp = array[a];
array[a] = array[b];
array[b] = temp;
}

for (let i = 0; i < array.length; i++){
for(let j = 0; j < array.length-1-i; j++){
if(array[j]>array[j+1]) swap(j,j+1); 
}
}
  // change code above this line
  return array;
}

// test array:
bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
