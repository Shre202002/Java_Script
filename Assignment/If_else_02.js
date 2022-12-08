//2-> Write a js program to find maximum between three numbers.
let a = prompt("Enter first Number to comparer");
let b = prompt("Enter Second Number to comparer");
let c = prompt("Enter Third Number to comparer");
if(a>b){
    if(a>c){
        console.log(a+" Is larger Than " +b +" & " +c);
    }
    else{
        console.log(c+" Is larger Than "+b +" & " +a);
    }
}
else if(b>a){
    if(b>c){
        console.log(b+" Is larger Than "+a +" & " +c);
    }
    else{
        console.log(c+" Is larger Than "+b +    " & " +a);
    }
}