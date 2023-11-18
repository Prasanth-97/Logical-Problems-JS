// perfect number or not

let a=33550336;
let sum = 0;
for(let i=1 ; i<a ; i++)
{
    if(a%i == 0)
    {
      sum = sum+i
    }
}
if(sum == a)
{
    console.log("perfect number")
}
else{
    console.log("Not a perfect number")
}


//print perfect numbers within the limit

let a1 = 1;
let b1 = 100;
let res1 = [];
for(let i=a1 ; i<=b1 ; i++){
    let sum1 = 0;
    for(let j=1 ; j<i ; j++) {
        if(i%j == 0){
            sum1 = sum1 + j;
        }
    }
    if(sum1 == i)
    {
    res1.push(i)
    }
}
console.log(res1);

