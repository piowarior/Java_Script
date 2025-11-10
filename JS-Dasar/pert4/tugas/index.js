function kalkulator(){
    let input = document.getElementById("inputan-kalkulator").value
    let hasil = document.getElementById("hasil")

    console.log("hasilnya :", eval(input));
    hasil.innerHTML = eval(input)
}

let inputanotp = document.getElementsByClassName("masukkan")

Array.from(inputanotp).forEach((put, index)=>{
    put.addEventListener("input", function (){
        if (this.value.length === 1) {
            inputanotp[index + 1].focus();
        }
    })
})


let coba = null;
let coba2;
console.log(coba);
console.log(coba2);
