
//checking whether given number is armstrong or not 
// what is armstrong number 
//eg: 153 = (1*1*1 + 5*5*5 + 3*3*3 = 153 )  //three digit armstrong no
//eg: 8208 =(8*8*8*8 + 2*2*2*2 + 0*0*0*0 + 8*8*8*8 = 8208)  //four digit armstrong number

let input = 153;
let n  = input;
let len = n.toString().length;
let sum = 0 ;
while(n>0)
{   
    let mod = n % 10 ;    
    sum = sum + Math.pow(mod,len);   
    n = parseInt(n/10);  
}
if(sum == input)
{
    console.log(`${input} is an armstrong number`)
}
else{
    console.log(`${input} is not an armstrong number`)
}

//printing armstrong numbers within the limit

let startno = 1 ;
let  endno = 1000;
let arr = [];
for(let i = startno ; i < endno ; i++)
{
    let n = i ;
    let sum = 0 ;
    let len = n.toString().length;
    while(n>0)
{   
    let mod = n % 10 ;    
    sum = sum + Math.pow(mod,len);   
    n = parseInt(n/10);  
}
if(sum == i)
{
   arr.push(i);
}

}
console.log(arr);