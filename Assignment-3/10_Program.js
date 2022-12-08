// => Write a JavaScript function to capitalize the first letter of a string.





// let  n = prompt("Enetr Your Name in Small Letters: ")
// console.log(`Your name in Captel Letters IS : ${n.toUpperCase()}` )








/************************************************************************************************************************************** */










// => Write a JavaScript function to capitalize the first letter of each word in a string.


function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string."));



// let str = "A Brown Fox Jump over sleepy dog. "
// str = str.split(" ");
// let y= str.length;
// for(let i = 0 ; i< y; i++){
//     str= console.log(str[i][0].toUpperCase() + str[i].substr(1))
// } 






/********************************************************************************** ******************************************* */



// =>  Write a JavaScript function that takes a string which has lower and upper case letters as a parameter 
// and converts upper case letters to lower case, and lower case letters to upper case.

let l = prompt("Enter String ");
console.log(`Upper Case is ${l.toUpperCase()}`)
console.log(` Lower Case is ${l.toLowerCase()}`)


