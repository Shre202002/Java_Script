// =>  Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and 
// for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".
for (let i = 0; i < 100; i++) {
    console.log(`${i} ${ (i % 3 == 0 ? "is multiple of 3 so it's FIZZ" : " ")}`)
    console.log(`${i} ${ (i % 5 == 0 ? "is multiple of 5 so it's BUZZ" : " ")}`)
    console.log(`${i} ${ (i % 3 == 0 && i % 5 == 0 ? "is multiple of 3 & 5 so it's FIZZBUZZ" : "")}`)
}