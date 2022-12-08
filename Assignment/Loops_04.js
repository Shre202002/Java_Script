//4-> Write a JS program to find sum of all natural numbers between 1 to n.
let a=prompt("Enter The Limit to find the sum: ")
let s=0;
for(let i=0; i<=a; i++){
    s=s+i;
}
console.log("The Sum of " +a +" is " +s);