// SPREAD OPERATOR UNPACK THE ELEMENTS I=OF ARRAY

// let num = [10, 20, 30, 40, 50, 60, 70, 80, 90,];
// let new_num = [...num]; // Cloning of an array 
// let num_2 = num   // Cloning With Of Assigning the array variable
// console.log(new_num)
// console.log(num_2)


//Murage Array
// let arr1 = [1, 2, 4, 8, 6];
// let arr2 = [11, 5, 8, 6, 8];
// let arr3 = [...arr1, ...arr2] // Margins More thead 2 array in single variable
// console.log(arr3)


//Compose OPERATOR
// let array_1 = [1, 5, 7, 3]
// let array_2 = [11, 25, 87, 73]
// let array_3 = [...array_1, 20, 07, 2002, ...array_2]  // Adding CUSTOM ELEMENTS In New Array While Murageing More than 2 array...!!!!1
// console.log(array_3)


// Spread Operator For String...

// let str = ' Hello World I am Java Script ';
// let new_str = [...str]
// console.log(new_str)
// let str_2 = Array.from(str);
// console.log(str_2)




// OBJECT CLONE SHALLOW COPY

let student = {
    name: 'Shre',
    age: 69,
    phn: 6969696969,
    E_mail: ' Unknown@mail.com',
    marks: [69, 96, 36, 39, 93]
}

let new_student = { ...student }

new_student.marks.push(007)

// console.log(new_student);
// console.log(student)


// Murge To OBJECTS 
let user = {
    name: 'Shre',
    City: 'xyz.xyz',
    phn: 6969696969,
}
let address = {
    street : '6969696/K2696969'
}
let new_user = {...user,...address}

Document.write = new_user;


