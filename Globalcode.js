let a = 10
let message = "Hello World"

function hello() {
    message = " Hello World"
    console.log ( message + a )
}

function changeA() {
    a = 15 
    message = "it will change to "
    console.log ( message + a)
}

hello()
console.log(a)
changeA()
console.log(a)