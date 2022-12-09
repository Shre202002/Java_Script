/*
let element = document.getElementsByClassName("box");
let box3 = element[2];
let box2 = element[1].innerText;
let box4 = element[3].innerHTML;
console.log(element[2]);
console.log(box3);
let v = element[2].innerText;
let v1 = element[2].innerHTML;
box3.innerHTML = "<b>3 This is Third Box with inner.HTML </b>"
box4.innerText = "4 This is Fourth  Box with inner.Text "
console.log( v)
console.log( v1)
console.log( typeof v)
console.log(box4)
console.log(box2)
 */



/********************************** Styling With JS ******************** */


// let tags = document.getElementsByTagName("p")
// console.log(tags)
// let friends = ["Cintu", "Bablu", "Raju", "Jaggu", "Monika" ]
// for(let i = 0; i< tags.length; i++){
//     tags[i].innerHTML = friends[i];
//     tags[i].style.color = "Blue"
//     tags[i].style.backgroundColor = "Yellow"
//     tags[i].style.height = "100px"
//     tags[i].style.width = "500px"
//     tags[i].style.fontFamily = " 'Secular One', sans-serif";
// }
// console.log(tags)

// let a = document.getElementsByClassName("box1");
// let b = document.getElementById("box2")
// console.log(a[0].innerText);
// console.log(a[0].getAttribute("class"));
// console.log(document.getElementById("box2").innerText)
// console.log(document.getElementById("box2").innerHTML= "<b><center>This is Div </center></b>")
// console.log(b.getAttribute("style"))
// console.log(b.getAttributeNode("style"))
// console.log(b.attributes[2])     




/********************************SET ATTRIBUTE*************************** */





// let c = document.getElementsByClassName("style")[0];

// // c.setAttribute("class","new_style");
// c.attributes[0].value = "new_style"



/******************************************************  Quary Seletor ********************************************* */


 let element = document.querySelector(".box")
 let element1 = document.querySelectorAll(".box")
console.log(element)
console.log(element1)
element1[2].setAttribute("class", "mybox")
console.log(element1[2])
