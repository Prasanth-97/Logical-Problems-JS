// checking given number is prime number or not

let a = 97 ;

function f1(){
for(let i=2 ; i<a ; i++)
{
  if(a%i == 0)
  {
    return `${a} is not a prime number`
  } 
}
return `${a} is a prime number`
}
console.log(f1(a));


// print prime numbers from lower limit to upper limit

let a1 = 10 ;
let b1 = 100 ;
let res =[];
function f2(){
    let temp = 0 ;
    for(let i=a1 ; i<= b1 ; i++)
    {
        for(let j=2 ; j<i ; j++)
        {
          if(i%j == 0)
          {
            temp = temp+1;
                  }
        }
        if(temp == 0)
        {
           res.push(i);
        }
        else{
            temp = 0 ;
        }
    }
    return res;
}
console.log(f2())