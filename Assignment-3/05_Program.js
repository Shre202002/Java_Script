// => Write a JavaScript program to find the armstrong numbers of 3 digits. Go to the editor
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself.
//  For example, 371 is an Armstrong number since 3*3*3 + 73 + 1*3 = 371.
let n = prompt("Enter The Number: ");
let l = n.length;
let a = 0, r = 0, c = n;
for(let i = 0; i< l; i++){
    a = c % 10;
    r = r + ( a ** l); 
    c = Math. trunc(c/10)
}
if(r == n){
    console.log(`${n} is the ARMSTRONG NUMBER \n As result is ${r} `)
}
else{
    console.log(`${n} is not ARMSTRONG NUMBER \n As the result is ${r}`)
}
