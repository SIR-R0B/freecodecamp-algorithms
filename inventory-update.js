function updateInventory(curr, neww) {
    // All inventory must be accounted for or you're fired!
let qty = []
let items = []
let arr1 = []

/*if no new inventory sent, the updated array is equal to the current array, likewise if no current inventory is sent, the new inventory becomes the updated inventory, and in both cases, they'll need to be sorted just the same alpha ascending
*/

if ((!Array.isArray(neww)) || (!neww.length)) return curr.sort((a,b)=>{
if (a[1] === b[1]) return 0;
return (a[1] < b[1]) ? -1 : 1;
});
if ((!Array.isArray(curr)) || (!curr.length)) return neww.sort((a,b)=>{
if (a[1] === b[1]) return 0;
return (a[1] < b[1]) ? -1 : 1;
});

//break the two 2D arrays into two 1D arrays with corresponding indices
for (let i = 0; i < curr.length; i++) {
items.push(curr[i][1]);
qty.push(curr[i][0]);
}
for (let i = 0; i < neww.length; i++) {
if(neww[i] != []){
items.push(neww[i][1]);
qty.push(neww[i][0]);
}
}
//extract the items in both that need to have qty added together
for (let i = 0; i < curr.length; i++){
if ((items.indexOf(items[i])) != (items.lastIndexOf(items[i]))){
arr1.push([qty[i]+qty[items.lastIndexOf(items[i])], items[i]]);
//remove the extracted items from both 1D arrays
qty.splice(i,1);
items.splice(i,1);
}
}
// add the current inventory (that wasn't extracted and is also not in new inventory) to the combined final array
for(let i = 0; i <= (curr.length - arr1.length); i++) arr1.push([qty[i], items[i]]);
//if the item is left in both the items array and not already in the combined final array - add it
for (let i = 0; i < neww.length; i++){
if ((items.includes(neww[i][1])) && (!arr1.flat().includes(neww[i][1]) ) ){
   arr1.push(neww[i]);
}
}
//run sort alphabetical ascending on item name
return arr1.sort((a,b)=>{
if (a[1] === b[1]) return 0;
return (a[1] < b[1]) ? -1 : 1;
})
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];


//updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [])
//updateInventory(curInv, newInv);
