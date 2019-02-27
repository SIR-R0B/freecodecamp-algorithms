function permAlone(str) {
//convert string to array
let arr = str.split('');
let result = 0;

function swap(index1, index2){
//[a,b,c] swap(1,2) => [a,c,b]
let temp = arr[index1];
arr[index1] = arr[index2];
arr[index2] = temp;
}

function generate(n){
let regex = /([a-z])\1+/;
if ((n === 1) && !(regex.test(arr.join('')))) result++;
else {
for (let i = 0; i < n; i++){
generate(n-1);
swap((n % 2  ? 0 : i), n-1);
}
}
}

generate(arr.length);
  return result;
}

permAlone('aab');
