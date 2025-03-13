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

let x1 = document.getElementsByClassName("masukkan")[0];

let y = document.getel

function tombol(){

    if (x1.value == "") {
        console.log("kosong");
    }else{
        console.log("gak kosong");
        
    }
}