// => Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.

// Student Name	Marks
let David	 =  55
let Vinoth	 =  77
let Divya	 =  88,
// The grades are computed as follows :

// Range	Grade
// <60     F
// <70     D
// <80     C
// <90     B
// <100	   A
// console.log{`David's Grades Are (${David} ${()?()})`}

/*
let average =( David + Vinoth + Divya + Ishitha + Thomas)/5;
if(average<100){
    console.log(" You Had Scored A grade");
}
else if( average > 100 &&average<90){
    console.log(" You Had Scored B grade");
}
else if(average<80 && average> 90 ){
    console.log(" You Had Scored C grade");
}
else if(average<70){
    console.log(" You Had Scored D grade");
}
else if(average<60){
    console.log(" You Had Scored E grade")
}
else{
    console.log(" You are Fail..!!");
}

*/


switch(true){
    case David >=90:
        console.log(`David had scored ${David} and A Grade`);
        break;
    case David >= 80 && David < 90:
        console.log(`David had scored ${David}  and B Grade`);
        break;
    case David > 70 && David < 80:
        console.log(`David had scored ${David}  and C Grade`);
        break;
    case David > 60 && David <70 :
        console.log(`David had scored ${David}  and  D Grade`);
        break;
    case David > 50 && David <60:
        console.log(`David had scored ${David}  and E Grade`);
        break;
    case David > 40 && David < 50  :
        console.log(`David had scored ${David}  and Fail`);
        break;
        default:
            console.log("Enter Valid Marks.")
    
}
switch(true){
    case Vinoth >=90:
        console.log(`David had scored ${Vinoth} and A Grade`);
        break;
    case Vinoth >= 80 && Vinoth < 90:
        console.log(`David had scored ${Vinoth}  and B Grade`);
        break;
    case Vinoth > 70 && Vinoth < 80:
        console.log(`David had scored ${Vinoth}  and C Grade`);
        break;
    case Vinoth > 60 && Vinoth <70 :
        console.log(`David had scored ${Vinoth}  and  D Grade`);
        break;
    case Vinoth > 50 && Vinoth <60:
        console.log(`David had scored ${Vinoth}  and E Grade`);
        break;
    case Vinoth > 40 && Vinoth < 50  :
        console.log(`David had scored ${Vinoth}  and Fail`);
        break;
        default:
            console.log("Enter Valid Marks.")
    
}
switch(true){
    case Divya >=90:
        console.log(`David had scored ${Divya} and A Grade`);
        break;
    case Divya >= 80 && Divya < 90:
        console.log(`David had scored ${Divya}  and B Grade`);
        break;
    case Divya > 70 && Divya < 80:
        console.log(`David had scored ${Divya}  and C Grade`);
        break;
    case Divya > 60 && Divya <70 :
        console.log(`David had scored ${Divya}  and  D Grade`);
        break;
    case Divya > 50 && Divya <60:
        console.log(`David had scored ${Divya}  and E Grade`);
        break;
    case Divya > 40 && Divya < 50  :
        console.log(`David had scored ${Divya}  and Fail`);
        break;
        default:
            console.log("Enter Valid Marks.")
    
}



// const day = new Date().getDay();
// const month = new Date().getMonth();
// console.log(day)
// console.log(month)




/*
switch (true) {
	// If score is 90 or greater
	case grade >= 90:
		console.log("A");
		break;
	// If score is 80 or greater
	case grade >= 80:
		console.log("B");
		break;
	// If score is 70 or greater
	case grade >= 70:
		console.log("C");
		break;
	// If score is 60 or greater
	case grade >= 60:
		console.log("D");
		break;
	// Anything 59 or below is failing
	default:
		console.log("F");
}*/