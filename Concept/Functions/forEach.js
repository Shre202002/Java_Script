// let arr = ['chintu', 'bablu' , 'raju' , 'kaliya']
// let str = ""
// arr.forEach(function(elem,index)
// {
// // console.log(++index +' : ' + elem)
// str += `<li>${++index} : ${elem}</li>`
// });
// document.querySelector('#list').innerHTML = str;





// let frd = [
//     {name : 'chintu' , subject: 'javascript' },
//     {name : 'bablu' , subject: 'React.js' },
//     {name : 'Raju' , subject: 'Node.js' },
//     {name : 'Ghantu' , subject: 'HTML/CSS' }
// ];
// let str = "";
// let get_student = function(student){
// frd.forEach( function (item){
//     str += ` <li>${item.name} : ${item.subject} </li>`
// })
// } 
// get_student();
// document.querySelector('#list').innerHTML = str;


let list = document.querySelector('#list');
let button = document.querySelector('.btn');
let add = document.querySelector('.add');
let remove = document.querySelector('.rem');
let note = document.querySelector('.note')
let remove_content = document.querySelector('.rem_elem')
let add_remove_content = document.querySelector('.add_rem_elem');
let frd = [
    { name: 'chintu', subject: 'javascript' },
    { name: 'bablu', subject: 'React.js' },
    { name: 'Raju', subject: 'Node.js' },
    { name: 'Ghantu', subject: 'HTML/CSS' }
];
let rem_frd = [];
let str = " ";
let rem_elem = '';

// Print the list in the DOM

function get_student() {
    frd.forEach(function (elem, index) {
        str += `<li>${++index}- ${elem.name} is learning  ${elem.subject}</li>`
    })
    list.innerHTML = str;
    note.innerHTML = `<b>The element present in list are: </b>`
}

button.addEventListener('click', function () {
    setTimeout(get_student, 2000);
});


// To Add Elements in the list

function add_student() {

    frd.push({ name: 'Rohan', subject: 'Java' });
   

    frd.forEach(function (elem, index) {
        str = `<li>${++index}: ${elem.name} is learning ${elem.subject}`;
    })
    list.innerHTML = str,
        note.innerHTML = `<b>The element  added is </b>`
}

add.addEventListener('click', function () {
    setTimeout(add_student, 2000)
})


// To Remove  from the list

function remove_student() {
    rem_frd.push(frd.pop());
    note.innerHTML = `<b>The element is removed </b>`
    console.log(rem_frd);
}
remove.addEventListener('click', function () {
    setTimeout(remove_student, 2000)
})


// TO Show Removed Elements  in the DOM

function show_rem_content() {
    rem_frd.forEach(function (content, index) {
        rem_elem += `<li> ${++index} : ${content.name} & ${content.subject}</li>`
    })
    list.innerHTML = rem_elem;
    note.innerHTML`<b>The removed Elements are: </b>`
}
remove_content.addEventListener('click', function () {
    setTimeout(show_rem_content, 2000);
})


//To Add Removed Element In the list Again
function to_add_again() {
    frd.concat(rem_frd)
    note.innerHTML = `<b>The removed Elements are Added Again: </b>`
    console.log(frd);
}
add_remove_content.addEventListener('click', function () {
    setTimeout(to_add_again, 2000);
})