let array = [ 3,5,6,2,4]

array.forEach(yuji)

function yuji(array) {
    console.log(array);
    
}


// let angka
// let tampung = 0

// function rekursif(angka) {
//     if(angka <= 1){
//         tampung += angka
//         return tampung
//     }
//     return rekursif(angka - 1)
// }

// rekursif (7)


let object = {
    
    nama:"uhuy",
    umur:12
}

console.log(object);

const pen = {
    brand: "Pilot",
    type: "Gel Pen",
    details: {
        "color": "blue",
        design: "ergonomic",
        material: "plastic",
        price: {
            currency: "USD",
            amount: 1.5
        }
    }
};

const pens = [
    { color: "blue", design: "ergonomic", material: "plastic" },
    { color: "red", design: "sleek", material: "metal" },
    { color: "black", design: "classic", material: "wood" }
];

console.log(pens[0].color);  // Output: blue
console.log(pens[1].material);  // Output: metal


console.log(pen.details.color); // Output: blue
console.log(pen.details.price.amount); // Output: 1.5
console.log(pen);
console.log(pens);


let x1 = [
    [1,2,3],
    ["mujiron","kuki","mubarok"],
    ["juji",5.67, 3]
]


console.log(x1);
console.log(typeof x1[0][2],[2][0]);


let x3 = "yuji"

console.log(x3);

x3.x4 = "mutoto"

console.log(x3.x4);
