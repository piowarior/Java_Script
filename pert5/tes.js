// let x1 = ""; // Deklarasikan di luar loop
// let x2 = "";

// let a = 1;
// for(a; a <= 7; a++){
//     x1 = "*";  // Bisa diubah di dalam loop, tapi tetap bisa diakses di luar
//     let b = 1;
//     for(b; b<= 7; b++){
//         x1+= "+";  // Sama, tetap bisa diakses di luar loop
//     }
    
// }

// console.log(x1)


// let x1 = "*";

// for (let a = 1; a <= 3; a++) {  // Loop a (3 kali)
//     console.log("Iterasi a ke-" + a);
    
//     for (let b = 1; b <= 3; b++) {  // Loop b (3 kali di dalam setiap loop a)
//         x1 += "+";
//         console.log("  Iterasi b ke-" + b + " → x1: " + x1);
//     }
// }


// let a = 1;
// let b = 1;
// let c = 1;


// for ( a; a<= 7; a++){
//     let x1 = a;

//     for( b; b<= 7; b++){
//         x1 += "="
//         console.log(x1);
//     }

//     console.log(x1);

//     for( ; c <= 7; c++){
//         x1 += "#"
//         console.log(x1);
//     }
    
// }


// let a = 1;
// let b = 1;
// let c = 7;


// for ( ; a <= 7 ; a++){
//     let x1 = a;
//     for ( ; b <= 7 ; b++){
//         x1 += "+";
//         console.log(x1);

//         for ( ; c >= 1; c--){
//             x1 += "#";
//             console.log(x1);
//         }
//     }
// }

for (let a = 1; a <= 7; a++) {
    let x1 = "1" + "+".repeat(a) + "=".repeat(7 - a);
    console.log(x1);
}
