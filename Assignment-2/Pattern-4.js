let s = "";
for( let i=0; i<=5; i++){

     for( let k=5; k>i; k--){
        s+= "*";
     }
     for( let j=0; j<i; ++j){
        s +=" "
     }
     for( let j=0; j<i; ++j){
        s +=" "
     }
     
     for( let l=5; l>i; l--){
        s +="*";
     }
     
     s +="\n";
}
console.log(s)