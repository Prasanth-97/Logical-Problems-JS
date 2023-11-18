
// check if a list of integers contains only odd numbers

let num = "13079";
let arr = num.split("").map(Number);
function f1(num){
for(let i=0 ; i< num.length ; i++)
{
    if(arr[i] % 2 == 0){
        return false;
    }
}
return true;
}
console.log(f1(arr))