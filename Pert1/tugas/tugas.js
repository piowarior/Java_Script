    let b = ""

function ganti(){

    let a = document.getElementById("kotak")
 
    if(a.style.backgroundColor == "green" || b == "blue"){
        a.style.backgroundColor = "red"
        b = "red"
    }else{
            a.style.backgroundColor = "blue"
         b = "blue"
    }
}

// document.getElementById("kotak2")

// document.getElementById("tombol2").addEventListener("click", document.getElementById("kotak2").style.backgroundColor = "red" )


// document.getElementById("navbar").addEventListener("click", function(){
//     console.log("masukk kedalam bubble");
// })

let index = document.getElementById("dropdown")

// index.style.display = "none"

// document.getElementById("menuButton")

function keluar(){

    index.classList.toggle("show")
}

