
// to remove all white spaces from a string without using replace()

let str = "  hi i  am   prasanth      ";
let arr = str.split(" ").join("");  //trim() removes spaces on front and end only does not remove spaces inbetween
console.log(arr);