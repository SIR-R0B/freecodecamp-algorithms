function sym(args) {

let arr = [];
let symArr = [];
let arr1;
let arr2;

function findDif() {
symArr = [];
arr1 = [... new Set(arr[0])];
arr2 = [... new Set(arr[1])];
console.log('arr1: '+arr1);
console.log('arr2: '+arr2)

for (let i = 0; i < arr1.length; i++){
if (!(arr2.includes(arr1[i]))) symArr.push(arr1[i]);
}

for (let i = 0; i < arr2.length; i++){
if (!(arr1.includes(arr2[i]))) symArr.push(arr2[i]);
}
}

for (let i = 0; i < arguments.length; i++) arr[i] = arguments[i];

while(arguments.length >= 2) {
if (arr[1] == undefined) break;
findDif();
arr.shift();
arr.shift();
arr.unshift(symArr);
} 

console.log('final symArr: '+symArr);
  return symArr;
}

//sym([1, 2, 3], [5, 2, 1, 4]);

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
