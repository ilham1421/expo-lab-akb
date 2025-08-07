# Aplikasi Daftar Mahasiswa - Expo Router

Aplikasi mobile yang dibuat menggunakan React Native dengan Expo Router untuk menampilkan daftar mahasiswa dan detail mahasiswa.

## 🎯 Fitur Aplikasi

### 📋 Halaman Daftar Mahasiswa

- Menampilkan semua mahasiswa dalam bentuk list
- Setiap item menampilkan nama dan NIM mahasiswa
- Icon person di sebelah kiri nama
- Icon arrow kanan untuk navigasi
- Tap pada item untuk melihat detail

### 👤 Halaman Detail Mahasiswa

- Informasi lengkap mahasiswa:
  - Foto profil (dari URL dummy Picsum)
  - Nama lengkap
  - NIM (Nomor Induk Mahasiswa)
  - Kelas
  - Jurusan
  - Fakultas
  - Email
  - Nomor WhatsApp
- Tombol kembali di header dan bottom
- Kontak bisa diklik untuk melihat info detail

## 🚀 Teknologi yang Digunakan

- **React Native**: Framework mobile development
- **Expo**: Platform untuk development React Native
- **Expo Router**: File-based routing system
- **TypeScript**: Type-safe JavaScript
- **Expo Vector Icons**: Library icon (Ionicons)

## 📁 Struktur Aplikasi

```
app/
├── _layout.tsx                 # Root layout configuration
├── index.tsx                   # Halaman daftar mahasiswa (home)
└── mahasiswa/
    └── [id].tsx               # Halaman detail mahasiswa (dynamic route)

data/
└── mahasiswa.js               # Data mahasiswa lokal
```

## 🗃️ Data Mahasiswa

Data mahasiswa disimpan dalam file `data/mahasiswa.js` berisi:

- **10 mahasiswa** dengan data lengkap
- **ID unik** untuk setiap mahasiswa
- **Foto profil** menggunakan Picsum Photos (URL dummy)
- **Informasi akademik** lengkap (nama, NIM, kelas, jurusan, fakultas)
- **Kontak** (email dan WhatsApp)

Contoh data:

```javascript
{
  id: '1',
  nama: 'MUH. ILHAM AKBAR',
  nim: '105841105822',
  foto: 'https://picsum.photos/200/200?random=1',
  kelas: '6B',
  jurusan: 'TEKNIK INFORMATIKA',
  fakultas: 'Fakultas TEKNIK',
  email: '105841105822@student.unismuh.ac.id',
  phone: '+62 812-3456-7890'
}
```

## 🎨 Desain & UI

### Warna Tema

- **Primary**: #0066CC (Biru)
- **Background**: #f8f9fa (Abu-abu muda)
- **Card**: White dengan shadow
- **Text**: #333 (Gelap), #666 (Medium), #999 (Terang)

### Komponen

- **Card dengan shadow** untuk setiap item
- **Header dengan gradient** biru
- **Icons** dari Ionicons (person, chevron, mail, whatsapp, arrow-back)
- **Responsive design** yang menyesuaikan layar
- **Touch feedback** pada setiap interaksi

## 🧭 Navigasi

### File-based Routing

- `app/index.tsx` → Halaman utama (/)
- `app/mahasiswa/[id].tsx` → Detail mahasiswa (/mahasiswa/1, /mahasiswa/2, dst)

### Navigasi Methods

- **Link component** dari expo-router untuk navigasi deklaratif
- **router.back()** untuk kembali ke halaman sebelumnya
- **Dynamic routing** dengan parameter ID mahasiswa

## 🎭 Interaksi

### Halaman Daftar

- **Tap pada card mahasiswa** → Navigasi ke detail
- **Visual feedback** saat touch
- **Smooth scrolling** untuk daftar panjang

### Halaman Detail

- **Tombol kembali** di header dan bottom
- **Tap pada kontak** → Show alert dengan info lengkap
- **Foto profil** dengan border biru
- **Card terpisah** untuk info akademik dan kontak

## 📱 Cara Menjalankan

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Jalankan aplikasi**:

   ```bash
   npx expo start
   ```

3. **Pilih platform**:
   - Android: Tekan `a` atau scan QR dengan Expo Go
   - iOS: Tekan `i` atau scan QR dengan camera
   - Web: Tekan `w` untuk buka di browser

## ✨ Fitur Khusus

- **Dynamic routing** dengan parameter ID
- **Error handling** jika mahasiswa tidak ditemukan
- **Custom fonts** (PT Sans family)
- **Loading states** dan **error states**
- **Consistent styling** di seluruh aplikasi
- **TypeScript support** untuk type safety
- **No external API** - semua data lokal

## 🎓 Data Mahasiswa Tersedia

1. MUH. ILHAM AKBAR - Teknik Informatika
2. ANDI SARI DEWI - Sistem Informasi
3. MUHAMMAD RIZKI - Teknik Informatika
4. SITI NURHALIZA - Sistem Informasi
5. AHMAD FAUZI - Teknik Elektro
6. FATIMAH AZZAHRA - Sistem Informasi
7. BAYU PRATAMA - Teknik Informatika
8. NURUL HIDAYAH - Teknik Elektro
9. DIMAS ARDIANSYAH - Sistem Informasi
10. LINDA SARI - Teknik Informatika

Semua mahasiswa dari **Universitas Muhammadiyah Makassar** dengan fakultas **Teknik** dan **Ilmu Komputer**.

---

**Dibuat untuk memenuhi tugas pengembangan aplikasi mobile**  
**Menggunakan React Native, Expo, dan Expo Router**
