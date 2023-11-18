
//printing fibanocci series numbers from 0 to n 

let n = 15 ;

const fibanocci = (n) =>{
   let arr=[0,1];
   for(let i=2 ; i<n ; i++)
   {
     arr.push(arr[i-2] + arr[i-1]);
    }
    return arr;
}
console.log(fibanocci(n));