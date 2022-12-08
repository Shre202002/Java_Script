let string = "";
let string1 = "";
for( let i=0; i<=5; i++){

    for( let j=5; j>i; j--){

          string += "  ";

    }
    for(let k=0; k<=i; ++k){
        string += " *";
    }

    string += "\n";
}
console.log(string);