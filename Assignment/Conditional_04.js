// 4-> Write a js program to check whether year is leap year or not using conditional operator.
let y=prompt("Enter Year To Check Weather It Is Leap Year Or Not: ")
if( y%4==0){

    if( y%100 == 0 && y%400 == 0){
        console.log( y +" Is Leap Year");
    }
    else{
        console.log(y +" Is skipped As Leap Year")
    }
}
else{
    console.log(y +" Is not Leap Year")
}