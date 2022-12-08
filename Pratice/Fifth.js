// 5-> Write a program to find sum of all natural numbers between 1 to n.
let n=prompt("Enter Limit of Sum of number");
console.log("Type Of data entered is: "+typeof(n))
let s=0;
for (let i=1; i<=n; i++){
    s=s+i;
}
console.log("The Sum of "+n +" Natural Number is: "+s);