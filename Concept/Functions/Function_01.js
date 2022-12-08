function add_two( a, b){
    let c= a + b;
    return(c);
 }
 let n1=prompt("Enter First number");
 let n2=prompt("Enter second number");
 n1 = parseInt(n1);
 n2 = parseInt(n2);
 let c= add_two(n1, n2)
console.log(`The sum of ${n1} and ${n2} is: ${c}`);