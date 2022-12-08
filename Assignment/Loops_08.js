//8-> Write a JS program to count number of digits in a number.
let a=prompt("Enter The Number: ");
let b= a.length
let p=0;
for(let i =0; i<=b; i++){
        a=a%10;
        a=a/10;
        p++;
}
console.log("The Number You had entered is of: "+p +" Digits");