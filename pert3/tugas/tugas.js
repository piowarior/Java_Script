// const mysql = require('mysql2');

// // Buat koneksi ke database MySQL
// const connection = mysql.createConnection({
//     host: 'localhost',    // Host MySQL (biasanya localhost)
//     user: 'root',         // User MySQL kamu
//     password: '',         // Password MySQL (isi kalau ada)
//     database: 'tes'       // Ganti dengan nama database kamu
// });

// // Cek koneksi
// connection.connect((err) => {
//     if (err) {
//         console.error('Koneksi gagal: ' + err.stack);
//         return;
//     }
//     console.log('Terhubung ke database dengan ID ' + connection.threadId);
// });

// module.exports = connection; // Ekspor koneksi supaya bisa dipakai di file lain
let x1 = document.querySelectorAll(".masukkan")
let x2
let x3 = document.getElementById("parg")

function tombol(){
    x2 = false
    x1.forEach(lakukan=>{
        if (lakukan.value == "") {
            x2 = true
        }
    })

    if (x2) {
       x3.innerHTML = "Form Validasi Kamu Masih Kosong"
       x3.style.color = "red"
    }else{
        x3.innerHTML = ""
    }


}