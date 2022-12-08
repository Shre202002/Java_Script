// 9-> Write a JS program to find first and last digit of a number.
/*
let n = prompt(" Enter Number: ");
n= Math.floor(n);
let p= n.length
let s = 0, l = 0, a=n.length;


for (let i = 1; i <= p; i++) {
    s = n % 10;
    n = n / 10;
    console.log( a +"th digit  of the number is: " +s);
    a--;
} */

function firstDigit(n)
    {
        // Remove last digit from number
        // till only one digit is left
        while (n >= 10)
            n /= 10;
       
        // return the first digit
        return Math.floor(n);
    }
   
    // Find the last digit
    function lastDigit(n)
    {
        // return the last digit
        return Math.floor(n % 10);
    }
 
// Driver code
 
         let n = 98562;
        document.write(firstDigit(n) + " "
        + lastDigit(n));