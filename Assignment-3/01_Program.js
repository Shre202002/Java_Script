// => Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers


let a = prompt("Enter First Number: ")
let b = prompt("Enter Second Number: ")
// let c = prompt(" Enter The Limit To Check Your GCD");
// c = parseInt(c);
for( let i=2 ; i<=100000; i++){
    if(a % i == 0 && b % i == 0){
        console.log(`the greatest common divisor (GCD) of two positive integers ${a} & ${b} is: ${i}`)
    }
   
}