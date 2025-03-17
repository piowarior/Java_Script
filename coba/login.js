let loginside = document.getElementsByClassName("login-side")[0]
let loginutama = document.querySelector(".login-utama")
let tombolregistrasi = document.getElementById("registrasi")
let tombolregistrasi2 = document.getElementById("registrasi2")

let ceklogin = 1
function pindah() {
    loginside.classList.toggle("pindah-login-side1")
    loginutama.classList.toggle("pindah-login-utama1")
    tombolregistrasi.classList.add("pindah-registrasi")
    loginside.addEventListener("transitionend", function() {
        loginside.classList.add("pindah-login-side2")
        tombolregistrasi.classList.add("pindah-registrasi2")
    })
    tombolregistrasi.addEventListener("transitionend", function () {
        tombolregistrasi2.classList.add("pindah2-registrasi")
    })
    
}

function pindah2() {
    loginside.style.width= "100%"
    loginside.addEventListener("transitionend", function() {
        loginutama.classList.remove("pindah-login-utama1")
        loginside.style.width= "50%"
    })
}


