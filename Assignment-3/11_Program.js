// => Write a JavaScript function to concatenates a given string n times (default is 1). Go to the editor
//       Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"
function con(n){
let p = " ";
i=0;
do{
    p += "Ha! "
    i++;
}while(i!=n)
return (p);
}
let n = prompt("Enter Number You Want To print: ")
 n = parseInt(n);
 console.log(con(n))