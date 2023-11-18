// lcm of two numbers

let a= 10;
let b= 45;
for(let i=1  ; i<a*b ; i++)
{
    if(i%a == 0 && i%b == 0)
    {
       console.log(i);
       break; 
    }
}

// lcm of three numbers

let a1= 10;
let b1= 45;
let c1 = 20;
for(let i=1  ; i<a1*b1*c1 ; i++)
{
    if(i%a1 == 0 && i%b1 == 0 && i%c1 == 0)
    {
       console.log(i);
       break; 
    }
}


