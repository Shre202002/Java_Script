// 2-> Write a js program to find maximum between three numbers using conditional operator.
let a = prompt("Enter first Number to comparer");
let b = prompt("Enter Second Number to comparer");
let c = prompt("Enter Third Number to comparer");
if (a > b && a > c) {
    console.log(a + " Is larger number from " + b +" & " +c);
}
else if (b > a && b > c) {
    console.log(b + " Is larger number than " + a +" & " +c);
}
else {
    console.log(c + " Is larger number than " + a +" & " +b)
}