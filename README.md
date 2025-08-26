# Request to Email API

Proyek ini merupakan **API sederhana** yang berfungsi untuk mengirimkan data request (misalnya dari form website atau aplikasi) ke email tujuan yang telah dikonfigurasi. API ini cocok digunakan sebagai backend service untuk **form contact, feedback, atau notifikasi otomatis**.

---

## 🚀 Fitur
- Mengirim data request ke email secara otomatis.
- Mendukung format **JSON request**.
- Konfigurasi email dapat disesuaikan (SMTP server, port, username, password).
- Respon API berupa **status sukses/gagal**.
- Struktur kode bersih dan mudah dikembangkan.

---

## 📂 Struktur Folder
```
request-to-email-api/
│── config/         # Konfigurasi (SMTP, environment)
│── routes/         # Routing API
│── controllers/    # Logika pengiriman email
│── utils/          # Helper function
│── index.js        # Entry point aplikasi
│── package.json    # Dependency project
│── README.md       # Dokumentasi proyek
```

---

## ⚙️ Instalasi

1. Clone repository:
   ```bash
   git clone https://github.com/username/request-to-email-api.git
   cd request-to-email-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Buat file `.env` dengan konfigurasi berikut:
   ```env
   PORT=5000
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=youremail@gmail.com
   SMTP_PASS=yourpassword
   TO_EMAIL=receiver@gmail.com
   ```

---

## ▶️ Menjalankan API
```bash
npm start
```

API akan berjalan di `http://localhost:5000`.

---

## 📬 Endpoint API

### 1. Kirim Email
- **URL:** `/send-email`
- **Method:** `POST`
- **Headers:**
  ```
  Content-Type: application/json
  ```
- **Request Body:**
  ```json
  {
    "name": "Panji Gunawan",
    "email": "panji@example.com",
    "message": "Halo, ini pesan dari API!"
  }
  ```

- **Response Sukses:**
  ```json
  {
    "success": true,
    "message": "Email berhasil dikirim"
  }
  ```

- **Response Gagal:**
  ```json
  {
    "success": false,
    "message": "Gagal mengirim email"
  }
  ```

---

## 📖 Catatan
- Pastikan Anda menggunakan **app password** jika menggunakan Gmail (bukan password utama).
- API ini bisa di-deploy di **Vercel, Railway, Render, atau VPS**.
- Bisa dikombinasikan dengan frontend (React, Vue, atau website statis).

---

## 👨‍💻 Author
Dibuat oleh **Panji Gunawan**  
5th Semester, Sistem Informasi – Universitas Singaperbangsa Karawang  
