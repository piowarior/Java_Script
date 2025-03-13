# 📦 Rangkuman Database MySQL

## 📌 **Cek Database yang Ada**
```sql
SHOW DATABASES;
```
📋 **Hasil:**
```
+--------------------+
| Database           |
+--------------------+
| information_schema |
| javafx_db          |
| manajemen_gudang   |
| mysql              |
| performance_schema |
| phpmyadmin         |
| sys                |
+--------------------+
```
---

## 🛠 **Membuat Database Baru**
```sql
CREATE DATABASE tes;
```
✅ **Database `tes` berhasil dibuat!**

🔄 **Gunakan database yang telah dibuat:**
```sql
USE tes;
```
---

## 🏗 **Membuat Tabel untuk Login**
```sql
CREATE TABLE login (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);
```
📂 **Tabel `login` berhasil dibuat!**

🔍 **Cek daftar tabel dalam database:**
```sql
SHOW TABLES;
```
📋 **Hasil:**
```
+---------------+
| Tables_in_tes |
+---------------+
| login         |
+---------------+
```
---

## 📝 **Menambahkan Data User**
```sql
INSERT INTO login (nama, password) VALUES ('user1', 'password123');
```
✅ **Data user berhasil ditambahkan!**

🔍 **Cek data dalam tabel `login`:**
```sql
SELECT * FROM login;
```
📋 **Hasil:**
```
+----+--------+-------------+
| id | nama   | password    |
+----+--------+-------------+
|  1 | user1  | password123 |
+----+--------+-------------+
```
---

## 🔌 **Menghubungkan ke Node.js**
🛠 **Install package `mysql2`:**
```sh
npm install mysql2
```

📜 **Kode untuk koneksi di Node.js:**
```js
const mysql = require('mysql2');

const koneksi = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password_kamu',  // Ganti dengan password MySQL
    database: 'tes'
});

koneksi.connect((err) => {
    if (err) {
        console.error('❌ Koneksi gagal:', err);
    } else {
        console.log('✅ Koneksi berhasil!');
    }
});
```
🎯 **Jalankan dengan:**
```sh
node tugas.js
```
---

## 🚀 **Fix Error: Access Denied**
Jika muncul error `Access denied for user 'root'@'localhost'`, coba perbaiki dengan:
```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'passwordbaru';
FLUSH PRIVILEGES;
```
🔄 **Gunakan password baru untuk koneksi!**

---

🎉 **Selesai! Sekarang database sudah bisa digunakan dengan Node.js!** 🚀

