//6-> Write a JS program to find sum of all odd numbers between 1 to n.
let a=prompt("Enter The Limit to find the sum of Odd number: ")
let s=0;
for(let i=0; i<=a; i++){
    if(i%2!=0){
        s =s+i;
    }
}
console.log("The Sum of " +a +" is " +s);