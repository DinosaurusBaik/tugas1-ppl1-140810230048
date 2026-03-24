# 👕 RESTful API - Sistem Chart Baju

Build Status | Security Scan | Docker Ready

API Backend untuk manajemen **chart baju (keranjang belanja)** yang sederhana dan terstruktur. API ini dibuat menggunakan Node.js dan Express, serta menggunakan MongoDB sebagai database. Sistem ini meniru konsep chart seperti pada platform e-commerce, dimana user dapat menambahkan produk baju sebelum checkout.

---

## 📑 Daftar Isi

* Fitur Utama
* Persiapan & Instalasi
* Arsitektur Proyek
* Dokumentasi API
* Panduan Git Workflow
* Automasi & Keamanan

---

## ✨ Fitur Utama

✅ Full CRUD: Tambah, lihat, update, dan hapus item chart
✅ JSON Standard Response: Semua response dalam format JSON
✅ Validasi Data: Input seperti nama dan quantity diperiksa
✅ MongoDB Integration: Penyimpanan data menggunakan database NoSQL
✅ Containerized: Siap dijalankan dengan Docker
✅ CI/CD Ready: Terintegrasi dengan GitHub Actions

---

## 🚀 Persiapan & Instalasi

### Prasyarat

* Node.js v18+
* MongoDB atau Docker

---

### Opsi 1: Menggunakan Docker

Jalankan perintah berikut:

```bash
docker-compose up --build
```

Akses API di:

```
http://localhost:3000
```

---

### Opsi 2: Instalasi Manual

Clone repository:

```bash
git clone https://github.com/username/chart-baju-api.git
cd chart-baju-api
```

Install dependency:

```bash
npm install
```

Setup file environment:

```bash
cp .env.example .env
```

Jalankan aplikasi:

```bash
npm start
```

---

## 🏗️ Arsitektur Proyek

```
.
├── .github/workflows   # GitHub Actions CI/CD
├── models/             # Schema MongoDB
├── routes/             # Endpoint API
├── index.js            # Entry point aplikasi
├── Dockerfile
├── docker-compose.yml
└── package.json
```

---

## 📡 Dokumentasi API

### Endpoint Utama

| Method | Endpoint       | Deskripsi              |
| ------ | -------------- | ---------------------- |
| GET    | /api/chart     | Ambil semua item chart |
| GET    | /api/chart/:id | Detail item            |
| POST   | /api/chart     | Tambah item            |
| PUT    | /api/chart/:id | Update item            |
| DELETE | /api/chart/:id | Hapus item             |

---

### Contoh Request Body (POST/PUT)

```json
{
  "name": "Kaos Oversize",
  "size": "L",
  "quantity": 2,
  "price": 120000
}
```

---

### Contoh Response Success

```json
{
  "status": "success",
  "data": {
    "_id": "abc123",
    "name": "Kaos Oversize",
    "size": "L",
    "quantity": 2,
    "price": 120000
  }
}
```

---

### Contoh Response Error

```json
{
  "status": "error",
  "message": "Invalid input"
}
```

---

## 🔄 Panduan Git Workflow

Menggunakan **Feature Branch Flow**:

* main → production
* develop → integration
* feature/* → pengembangan fitur

### Conventional Commits

| Type  | Keterangan            |
| ----- | --------------------- |
| feat  | fitur baru            |
| fix   | perbaikan bug         |
| chore | perubahan konfigurasi |
| test  | penambahan testing    |

### Contoh Commit

```bash
feat: add chart item endpoint
fix: resolve validation error
chore: setup docker environment
```

---

## 🛡️ Automasi & Keamanan (CI/CD/CS)

Project ini menggunakan GitHub Actions untuk otomatisasi:

### 1. CI (Continuous Integration)

* Install dependency
* Menjalankan unit testing

### 2. CS (Security Scan)

* npm audit untuk cek kerentanan dependency

### 3. CD (Continuous Deployment)

* Build Docker image setiap push ke branch utama

---

## 📌 Status Project

* REST API: ✔️
* Docker: ✔️
* GitHub Actions: ✔️
* MongoDB Integration: ✔️

---

## 👨‍💻 Author

Nama: Daniel Bintang W. S
NIM: 140810230048

Project ini dibuat untuk memenuhi tugas pengembangan RESTful API dengan integrasi Docker dan GitHub Actions.
