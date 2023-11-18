//swap two numbers without using the third variable

let a = 20;
let b = 30;
[b,a] = [a,b];
console.log(a,b);

// swap two numbers with using the third variable

let c=40;
let d=60;
let temp = d;
d = c;
c = temp;
console.log(c,d)

