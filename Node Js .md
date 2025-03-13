# 🚀 Update Node.js Menggunakan fnm (Fast Node Manager)  

## 📌 Cek Versi Node.js Saat Ini  
```sh
node -v
```
💡 Hasil awal: `v12.22.9` (versi lama)

---

## 🔽 Install fnm (Fast Node Manager)  
```sh
curl -o- https://fnm.vercel.app/install | bash
```
✅ Proses install akan mengecek dependencies seperti `curl` dan `unzip` sebelum mendownload fnm.

---

## 🔍 Verifikasi fnm Terinstall  
```sh
fnm -v
```
💡 Jika muncul **"command not found"**, jalankan:
```sh
source ~/.zshrc
```

🔹 **Jika masih bermasalah:**
```sh
ls ~/.local/share/fnm
```
Jika folder `fnm` ada, berarti fnm sudah terinstall, tapi belum dikenali oleh shell.

---

## 🔄 Install Node.js Versi Terbaru  
```sh
fnm install 22
```
🛠️ Menginstall **Node.js v22.14.0**.

---

## 🔄 Gunakan Versi Node.js yang Baru  
```sh
fnm use 22
```
✅ Harusnya sekarang menggunakan versi **22.x.x**, tapi cek dengan:
```sh
node -v
```
Jika masih versi lama (`v12.22.9`), lanjut ke langkah berikut.

---

## ⚠️ Fix PATH agar fnm Berjalan dengan Benar  
Jika versi Node.js masih belum berubah, tambahkan fnm ke PATH:
```sh
export PATH="$HOME/.local/share/fnm:$PATH"
eval "$(fnm env)"
```
Sekarang cek ulang:
```sh
node -v
```
🎉 Harusnya sudah **v22.14.0**!

---

## 🔒 Agar Perubahan PATH Permanen  
Tambahkan perintah PATH ke `~/.zshrc`, supaya tidak perlu diulang setiap kali buka terminal:
```sh
echo 'export PATH="$HOME/.local/share/fnm:$PATH"' >> ~/.zshrc
echo 'eval "$(fnm env)"' >> ~/.zshrc
source ~/.zshrc
```
✅ Sekarang setiap kali buka terminal, fnm otomatis dikenali!

---

## 🎯 Kesimpulan  
1️⃣ **Cek versi Node.js:** `node -v`  
2️⃣ **Install fnm:** `curl -o- https://fnm.vercel.app/install | bash`  
3️⃣ **Install Node.js terbaru:** `fnm install 22`  
4️⃣ **Gunakan versi terbaru:** `fnm use 22`  
5️⃣ **Perbaiki PATH jika perlu:** `export PATH="$HOME/.local/share/fnm:$PATH"`  
6️⃣ **Simpan perubahan PATH permanen:** `echo 'export PATH="$HOME/.local/share/fnm:$PATH"' >> ~/.zshrc`  

💯 Sekarang kamu sudah berhasil **mengupdate Node.js menggunakan fnm** dengan cara yang benar! 🚀🔥