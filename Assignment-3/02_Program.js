// => Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

let s = 0;
for( let i= 0; i<1000; i++){
   if( i % 3 == 0 && i % 5 == 0){
    s += i;
   }
}
console.log(`The sum of product of two Numbers 3 & 5 is: ${s}`)