// document.getElementById("tombol").addEventListener("click", function() {
//     document.getElementById("judul").innerText = "Teks Berubah!";
//     alert("Kamu menekan tombol!");
// });

// document.getElementById("judul").innerText = "Halo, JavaScript!";

// let rohis = ["yuji","lmaou","nni"];
// console.log(rohis[2]);


let input = document.createElement("input"); // Buat elemen input
input.type = "text"; // Set tipe input
input.placeholder = "Masukkan teks..."; // Tambahkan placeholder
document.body.appendChild(input); // Tambahkan ke dalam body
