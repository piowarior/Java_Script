# Java_Script

# 📌 Catatan Belajar JavaScript

## 🚀 Apa Itu JavaScript?
JavaScript (JS) adalah bahasa pemrograman yang digunakan untuk membuat halaman web lebih **dinamis dan interaktif**.

✔ **HTML** → Struktur (Kerangka website)
✔ **CSS** → Tampilan (Gaya dan warna)
✔ **JavaScript** → Interaksi (Animasi, tombol, validasi form, dll.)

Tanpa JavaScript, web hanya berupa halaman statis seperti dokumen biasa. JS bisa digunakan di **browser (Frontend)** atau **server (Backend dengan Node.js).**

---

## 🛠 Persiapan Belajar JavaScript
### **1️⃣ Alat yang Diperlukan:**
- **Visual Studio Code (VS Code)** 📝
- **Browser** (Chrome, Firefox, Edge, Safari) 🌐
- **Node.js** (Opsional untuk backend) 🔧
- **Ekstensi VS Code yang direkomendasikan:**
  - **Live Server** (Untuk melihat perubahan secara langsung)
  - **ESLint** (Untuk membantu menulis kode lebih rapi)
  - **JavaScript (ES6) Code Snippets**

---

## 🎯 Cara Menjalankan JavaScript
### **📍 Di Browser**
✅ **Lewat Console Developer Tools**
1. Buka Chrome
2. Tekan **`F12`** → Pilih tab **Console**
3. Ketik:
   ```javascript
   console.log("Halo Dunia!");
   ```
4. Tekan **Enter**, hasilnya muncul!

✅ **Di dalam HTML**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Belajar JavaScript</title>
</head>
<body>
    <h1 id="judul">Halo Dunia!</h1>
    <button onclick="ubahTeks()">Klik Saya</button>
    
    <script>
        function ubahTeks() {
            document.getElementById("judul").innerText = "Teks Berubah!";
        }
    </script>
</body>
</html>
```

✅ **Menggunakan File `.js` Terpisah**
1. Buat file `script.js`
2. Tulis kode:
   ```javascript
   console.log("Halo dari file script.js!");
   ```
3. Hubungkan di HTML:
   ```html
   <script src="script.js"></script>
   ```
4. **Buka `index.html` di browser**, lalu cek **Console (`F12`)**.

---

### **📍 Di Node.js**
1. **Cek apakah Node.js sudah terinstall:**
   ```bash
   node -v
   ```
2. **Jalankan kode JavaScript di Node.js:**
   - Buat file `app.js`
   - Tulis kode:
     ```javascript
     console.log("Halo dari Node.js!");
     ```
   - Jalankan di terminal:
     ```bash
     node app.js
     ```
   - Hasilnya akan muncul di terminal, bukan di browser!

---

## 🌍 Frontend vs Backend JavaScript
✔ **Frontend (Tampilan di browser)**
   - **File `.js` atau `.jsx`** (Jika menggunakan React)
   - Mengatur tampilan web (DOM Manipulation, event handling, animasi)
   - Contoh framework: **React.js, Vue.js, Angular**

✔ **Backend (Server-Side dengan Node.js)**
   - File `.js` tersimpan di backend
   - Mengelola data, API, database
   - Contoh framework: **Express.js (untuk backend berbasis Node.js)**

> **Node.js ≠ Browser** → Di Node.js, kita tidak bisa langsung menampilkan tampilan seperti di browser!

---

## 🔥 Hal yang Perlu Dipelajari Selanjutnya:
✅ **Dasar-Dasar JavaScript**
   - Variabel (`let`, `const`, `var`)
   - Tipe data (String, Number, Boolean, Array, Object)
   - Operator (Aritmatika, Perbandingan, Logika)
   - Kondisi (`if`, `switch`)
   - Perulangan (`for`, `while`)
   - Function (Fungsi biasa & arrow function)
   - Event Handling (Klik tombol, input form, dll.)

✅ **DOM (Document Object Model)**
   - Cara membaca dan mengubah elemen HTML dengan JavaScript
   - Contoh: `document.getElementById("id")`

✅ **AJAX & Fetch API** (Mengambil data dari server tanpa reload halaman)

✅ **Framework / Library** (Setelah dasar kuat)
   - **Frontend:** React.js (Paling populer) ⚛️
   - **Backend:** Express.js (Untuk server berbasis Node.js) 🚀

---

# 📌 Roadmap Belajar JavaScript dari Dasar ke Mahir 🚀

## ✅ 1. Pahami Dasar JavaScript (Jangan loncat ke framework dulu!)
- Apa itu JavaScript dan cara kerjanya?
- Menjalankan JavaScript di browser & Node.js
- Sintaks dasar (variabel, tipe data, operator)
- Struktur kontrol (if-else, loop, switch)
- Fungsi & Scope

## ✅ 2. Manipulasi DOM (Biar Bisa Interaktif di Web!)
- Cara memilih elemen HTML (`document.getElementById`)
- Mengubah isi teks & gaya elemen CSS
- Menambahkan & menghapus elemen HTML
- Event Listener (`onclick`, `onchange`)

## ✅ 3. Pahami Konsep Lanjutan JavaScript
- Array & Object
- Callback & Promise (Asynchronous JS)
- Fetch API & AJAX (Ngambil data dari server)
- ES6+ (Arrow Function, Spread Operator, Destructuring)

## ✅ 4. Belajar JavaScript untuk Frontend
- Mulai dengan file `.js` biasa dulu!
- Latihan bikin fitur interaktif di HTML
- Setelah paham, baru coba React.js (pakai `.jsx`)

## ✅ 5. (Opsional) Belajar JavaScript untuk Backend
- Pahami Node.js & Express.js
- Bikin API sederhana
- Koneksi ke database (MongoDB, MySQL)



---

## 🎯 Kesimpulan
✔ **JavaScript bisa digunakan untuk Frontend & Backend**
✔ **Di browser untuk tampilan (HTML + JS), di Node.js untuk backend**
✔ **Jika ingin tampilan interaktif, gunakan file `.js` yang dihubungkan ke HTML**
✔ **Jika ingin membuat backend, gunakan Node.js + Express.js**
✔ **Belajar step-by-step mulai dari dasar hingga framework!** 🚀

---

Selanjutnya, kita bisa mulai dari **variabel & tipe data!** 💡

# 🚀 Panduan Lengkap JavaScript untuk Pemula

## **1️⃣ Variabel (Menyimpan Data)**

- **`var`** → Bisa dideklarasikan ulang dan diubah nilainya, tetapi kurang aman karena tidak mengikuti block scope.
- **`let`** → Bisa diubah nilainya, tetapi tidak bisa dideklarasikan ulang dalam satu scope.
- **`const`** → Tidak bisa diubah nilainya setelah dideklarasikan.

📌 **Contoh:**

```js
var nama = "Rohis";  // Bisa dideklarasi ulang
let umur = 18;        // Bisa diubah, tapi tidak bisa dideklarasi ulang
const kota = "Jakarta"; // Tidak bisa diubah
```

---

## **2️⃣ Tipe Data (Jenis Data dalam JavaScript)**

- **`string`** → Menyimpan teks.
- **`number`** → Menyimpan angka (bilangan bulat & desimal).
- **`boolean`** → Menyimpan `true` atau `false`.
- **`array`** → Menyimpan kumpulan data dalam satu variabel.
- **`object`** → Menyimpan data dalam bentuk pasangan **key: value**.
- **`null`** → Nilai kosong (didefinisikan secara sengaja).
- **`undefined`** → Variabel yang belum diberi nilai.
- **`bigint`** → Menyimpan angka sangat besar.
- **`symbol`** → Digunakan untuk membuat identifier unik.

📌 **Contoh:**

```js
let teks = "Halo";      // string
let angka = 25;         // number
let benar = true;       // boolean
let hobi = ["Coding", "Game"]; // array
let orang = { nama: "Rohis", umur: 18 }; // object
let kosong = null;      // null
let belum;              // undefined
let besar = 12345678901234567890n; // bigint
let unik = Symbol("id"); // symbol
```

---

## **3️⃣ Perulangan (Mengulang Kode)**

- **`for`** → Digunakan untuk perulangan dengan jumlah yang sudah diketahui.
- **`while`** → Digunakan untuk perulangan selama kondisi bernilai **true**.
- **`do while`** → Sama seperti `while`, tetapi minimal dijalankan **sekali** sebelum mengecek kondisi.
- **`forEach`** → Digunakan untuk melakukan iterasi pada array.
- **`map`** → Mirip `forEach`, tetapi mengembalikan array baru dengan hasil perubahan pada setiap elemen.

📌 **Contoh:**

```js
// for loop
for (let i = 1; i <= 5; i++) {
    console.log("Angka ke-", i);
}

// while loop
let j = 1;
while (j <= 5) {
    console.log("Iterasi ke-", j);
    j++;
}

// do while loop
let k = 1;
do {
    console.log("Minimal sekali jalan -", k);
    k++;
} while (k <= 5);

// forEach loop (untuk array)
let angkaArray = [1, 2, 3, 4, 5];
angkaArray.forEach((item) => console.log("Item:", item));

// map loop (mengembalikan array baru)
let kuadrat = angkaArray.map((item) => item * item);
console.log(kuadrat);
```

---

## **4️⃣ Kondisi (Mengontrol Alur Program)**

- **`if`** → Mengeksekusi kode jika kondisi bernilai **true**.
- **`else`** → Mengeksekusi kode jika kondisi dalam `if` bernilai **false**.
- **`else if`** → Digunakan untuk mengecek beberapa kondisi secara berurutan.
- **`switch`** → Alternatif dari `if else` untuk mengevaluasi banyak kondisi.

📌 **Contoh:**

```js
let nilai = 75;

if (nilai >= 80) {
    console.log("Grade A");
} else if (nilai >= 70) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}

// switch case
let warna = "merah";
switch (warna) {
    case "merah":
        console.log("Warna favoritmu merah!");
        break;
    case "biru":
        console.log("Warna favoritmu biru!");
        break;
    default:
        console.log("Warna tidak dikenali.");
}
```

---

## **5️⃣ Function (Membuat Kode yang Bisa Dipanggil Berulang)**

- **`function`** → Membuat fungsi biasa dengan `function namaFungsi() {}`.
- **`arrow function`** → Alternatif dari function biasa dengan sintaks lebih ringkas `() => {}`.
- **`callback`** → Fungsi yang dikirim sebagai argumen ke fungsi lain dan dieksekusi di dalamnya.
- **`anonymous function`** → Fungsi tanpa nama, biasanya digunakan langsung sebagai callback.

📌 **Contoh:**

```js
// Function biasa
function sapa(nama) {
    return "Halo, " + nama;
}
console.log(sapa("Rohis"));

// Arrow function
const tambah = (a, b) => a + b;
console.log(tambah(5, 3));

// Callback function
function proses(angka, callback) {
    return callback(angka);
}
console.log(proses(10, (n) => n * 2));

// Anonymous function
setTimeout(function() {
    console.log("Ini dijalankan setelah 2 detik");
}, 2000);
```

---

## **6️⃣ Event (Menangani Interaksi Pengguna)**

- **`addEventListener`** → Menambahkan event listener ke elemen.
- **`onclick`** → Menjalankan kode saat elemen diklik.
- **`onchange`** → Menjalankan kode saat nilai input berubah.
- **`onkeydown`** → Menjalankan kode saat tombol keyboard ditekan.

📌 **Contoh:**

```js
document.getElementById("klik").addEventListener("click", () => {
    alert("Tombol diklik!");
});

// Event pada input
let input = document.getElementById("teks");
input.onchange = () => {
    console.log("Nilai berubah: ", input.value);
};
```

---

## **7️⃣ Asynchronous (Menjalankan Kode Secara Tidak Sinkron)**

- **`setTimeout`** → Menjalankan kode setelah waktu tertentu.
- **`setInterval`** → Menjalankan kode berulang kali dengan jeda waktu tertentu.
- **`Promise`** → Menangani operasi asinkron dengan status **pending, fulfilled,** atau **rejected**.
- **`async/await`** → Cara modern untuk menangani operasi asinkron dengan kode yang lebih mudah dibaca.
- **`fetch API`** → Mengambil data dari server menggunakan HTTP request.

📌 **Contoh:**

```js
// setTimeout: menjalankan setelah 2 detik
setTimeout(() => {
    console.log("Ini dijalankan setelah 2 detik");
}, 2000);

// setInterval: menjalankan setiap 1 detik
let hitung = 1;
let interval = setInterval(() => {
    console.log("Hitungan ke-", hitung);
    hitung++;
    if (hitung > 5) clearInterval(interval);
}, 1000);

// Promise: simulasi operasi asinkron
let janji = new Promise((resolve, reject) => {
    let sukses = true;
    setTimeout(() => {
        if (sukses) {
            resolve("Berhasil!");
        } else {
            reject("Gagal!");
        }
    }, 2000);
});

janji.then((pesan) => console.log(pesan)).catch((err) => console.log(err));

// async/await: cara lebih mudah membaca operasi asinkron
async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Terjadi kesalahan:", error);
    }
}
fetchData();


## **8️⃣ Object-Oriented Programming (OOP) di JavaScript**  
- `class` → Template untuk membuat objek.  
- `constructor` → Fungsi dalam class yang dijalankan saat objek dibuat.  
- `this` → Mengacu pada objek saat ini.  
- `extends` → Untuk mewarisi properti dan metode dari class lain (inheritance).  
- `super` → Memanggil constructor dari class induk.  
- `getter & setter` → Method khusus untuk membaca dan mengubah properti.  

### 📌 **Contoh:**  
```js
// Class dan Object
class Manusia {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    sapa() {
        return `Halo, nama saya ${this.nama} dan umur saya ${this.umur} tahun.`;
    }
}

let orang1 = new Manusia("Rohis", 18);
console.log(orang1.sapa());

// Inheritance
class Pelajar extends Manusia {
    constructor(nama, umur, sekolah) {
        super(nama, umur);
        this.sekolah = sekolah;
    }

    info() {
        return `${this.sapa()} Saya sekolah di ${this.sekolah}.`;
    }
}

let murid = new Pelajar("Rohis", 18, "SMK 1 Jakarta");
console.log(murid.info());
```

---

## **9️⃣ Destructuring & Spread Operator**  
- **Destructuring** → Memecah array atau objek menjadi variabel terpisah.  
- **Spread (`...`)** → Menggabungkan atau menyalin elemen array/objek dengan lebih mudah.  

### 📌 **Contoh:**  
```js
// Destructuring Array
let buah = ["Apel", "Jeruk", "Mangga"];
let [pertama, kedua, ketiga] = buah;
console.log(pertama, kedua, ketiga);

// Destructuring Object
let user = { nama: "Rohis", umur: 18 };
let { nama, umur } = user;
console.log(nama, umur);

// Spread Operator
let angka1 = [1, 2, 3];
let angka2 = [4, 5, 6];
let semuaAngka = [...angka1, ...angka2];
console.log(semuaAngka);
```

---

## **🔟 Higher Order Functions**  
- **Function yang menerima function lain sebagai argumen atau mengembalikan function.**  

### 📌 **Contoh:**  
```js
// Higher Order Function
function operasi(angka, callback) {
    return callback(angka);
}

// Callback function
console.log(operasi(5, (n) => n * 2)); // Output: 10
console.log(operasi(10, (n) => n + 3)); // Output: 13
```

---

## **1️⃣1️⃣ Modul di JavaScript (Import & Export)**  
- **Import & Export** digunakan untuk membagi kode ke beberapa file agar lebih rapi.  

### 📌 **Contoh (File: `math.js`)**  
```js
export function tambah(a, b) {
    return a + b;
}
export function kali(a, b) {
    return a * b;
}
```
### 📌 **Contoh (File: `main.js`)**  
```js
import { tambah, kali } from "./math.js";
console.log(tambah(3, 4)); // Output: 7
console.log(kali(3, 4)); // Output: 12
```

---

## **1️⃣2️⃣ Error Handling (Try & Catch)**  
- **Menangkap error agar program tidak berhenti tiba-tiba.**  

### 📌 **Contoh:**  
```js
try {
    let hasil = 10 / 0;
    console.log(hasil);
} catch (error) {
    console.log("Terjadi kesalahan:", error.message);
} finally {
    console.log("Eksekusi selesai.");
}
```

---

## **1️⃣3️⃣ Local Storage & Session Storage**  
- **localStorage** → Menyimpan data secara permanen di browser.  
- **sessionStorage** → Menyimpan data hanya selama sesi browser terbuka.  

### 📌 **Contoh:**  
```js
// Simpan data
localStorage.setItem("nama", "Rohis");
console.log(localStorage.getItem("nama")); // Output: Rohis

// Hapus data
localStorage.removeItem("nama");
```

---

## **1️⃣4️⃣ Regular Expression (Regex)**  
- **Digunakan untuk mencocokkan pola dalam teks.**  

### 📌 **Contoh:**  
```js
let teks = "Halo, nama saya Rohis.";
let regex = /Rohis/;
console.log(regex.test(teks)); // Output: true
```

---

## **1️⃣5️⃣ Fetch API & AJAX (Mengambil Data dari Server)**  
- **Digunakan untuk mengambil data dari API atau server.**  

### 📌 **Contoh:**  
```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Terjadi kesalahan:", error));
```

---

## **1️⃣6️⃣ WebSockets (Komunikasi Real-time)**  
- **Untuk komunikasi real-time antara client dan server.**  

### 📌 **Contoh:**  
```js
let socket = new WebSocket("wss://echo.websocket.org");

socket.onopen = () => {
    console.log("Terhubung ke server");
    socket.send("Halo server!");
};

socket.onmessage = (event) => {
    console.log("Pesan dari server:", event.data);
};
```

---

## **1️⃣7️⃣ Web Worker (Menjalankan JavaScript di Background)**  
- **Digunakan untuk menjalankan tugas berat tanpa mengganggu UI.**  

### 📌 **Contoh (worker.js):**  
```js
onmessage = function(e) {
    let hasil = e.data * 2;
    postMessage(hasil);
};
```
### 📌 **Contoh (main.js):**  
```js
let worker = new Worker("worker.js");
worker.postMessage(5);

worker.onmessage = function(e) {
    console.log("Hasil dari worker:", e.data);
};
```

---

## **1️⃣8️⃣ Event Loop (Cara JavaScript Menangani Asynchronous)**  
- **Menjelaskan bagaimana JavaScript menangani tugas asynchronous secara non-blocking.**  

### 📌 **Contoh:**  
```js
console.log("Mulai");
setTimeout(() => console.log("Async"), 0);
console.log("Selesai");

// Output:
// Mulai
// Selesai
// Async (karena setTimeout masuk ke event loop)
```

