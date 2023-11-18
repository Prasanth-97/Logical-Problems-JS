//Reverse a String/Palindrome String

let str = "madam"
let arr = str.split("").reverse().join("");
if(str == arr){
    console.log("str is palindrome")
}
else{
    console.log("str is not a palindrome")
}


//reverse a number and check it is palindrome or not

let num = 121;
let arr1 = String(num).split("").reverse().join("");

if(num == arr1){
    console.log("num is palindrome")
}
else{
    console.log("num is not a palindrome")
}
