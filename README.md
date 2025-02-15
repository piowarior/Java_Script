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


Selanjutnya, kita bisa mulai dari **variabel & tipe data!** 💡

---

### 🎮
<p align="center">
  <img width="200px" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWNsOWo3N3RpbHJ0cTl3cjE1NHg2ajhsbjlvamcwb29veTlwOXJ4aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11lxCeKo6cHkJy/giphy.gif">
</p>


