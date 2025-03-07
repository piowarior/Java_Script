// => Hello world!
console.log('Hello world!');

// => Hello QuickRef.ME
console.warn('hello %s', 'QuickRef.ME');

// Prints error message to stderr
console.error(new Error('Oops!'));


let age = 7;

// String concatenation
'Tommy is ' + age + ' years old.';

// String interpolation
`Tommy is ${age} years old.`;


let i = 7.8;
let j = "juji";

console.log(`${i+j}`);


let u = false;

console.log(u);

if (u) {
    console.log("yuji ahioy");
    
}


let x1 = 3
let x2 = 2
let x3 = x1 + x2 == 8; 
let x4 = x1 + x2 

console.log(x1,x2,x3,x4);

if(x3){
    console.log("benar"); 
}else{
    console.log("cihuy");
    
}

juji = 7

var x=1;

// => true
result = (x == 1) ? true : false;

console.log(result);
console.log(juji);


let x5 = "yuji"

let x6 = (x5 == x5.length) ? "yuji makan":"yuji berak"


console.log(x6);

let x7;
for( i = 1 ; i <= 7 ; i++){
     x7 = i;
}

// console.log(x7*("*"));

// let x8 ;
function rekursif(n) {
    if(n<=0)return;
    return "*" ; rekursif(n-1)
}

console.log(rekursif(7));
// console.log(x8);

let x9 
function faktorial(k) {
    if (k<=0)return "";
    x9 = k - 1;
    return k * x9 +faktorial(k-1)
}
console.log(faktorial(5));


let x10 = document.getElementById("kotak")

function kotak() {
    x10.style.borderRadius = "200px"
}

let x11 = document.getElementById("kotak")
let x12 = document.getElementById("hero")

function geser() {
    x12.classList.add("geser")
    // x11.classList.add("geser2")
}
