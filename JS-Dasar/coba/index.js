let kotakmain = document.getElementById("kotak-main")
let kotakutama = document.getElementById("kotak-utama")

function gerak() {
    
    kotakmain.classList.toggle("pindah")

    kotakmain.addEventListener("transitionend", function(e) {
        if(e.propertyName === "width"){
            kotakmain.style.width = "400px"
            kotakutama.style.justifyContent = "start"
        }
    })
}