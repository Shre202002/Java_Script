// => Write a JS code to calculate the sum of digits in a number
let n = prompt("Enter number ")
let s= 0, m = n, a = 0;
for(let i = 1; i<=Array.from(n).length; i++){
  a = m % 10;
  s += a;
  m = Math.trunc(m/10);
}
console.log(a , s, m, n)
console.log(`The Sum of Number is ${s}`)