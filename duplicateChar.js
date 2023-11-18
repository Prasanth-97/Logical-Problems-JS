
// to find the duplicate characters in a string.

let str1 = "Prasanthp";
let str = str1.toLowerCase();
let len = str.length;
let res = [];
for(let i=0 ; i<len ; i++){
    for(let j=i+1 ; j<len ; j++){
        if(str[i] == str[j]){
            res.push(str[i]);
        }
        
    }
}
console.log(res.join(""));