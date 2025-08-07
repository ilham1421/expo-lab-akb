# Aplikasi Mobile Unismuh Makassar

Aplikasi mobile yang dibuat menggunakan Expo Router dengan tab navigation untuk menampilkan informasi tentang Universitas Muhammadiyah Makassar dan profil mahasiswa.

## Fitur Aplikasi

### 🏠 Tab Home

- Menampilkan informasi lengkap tentang Universitas Muhammadiyah Makassar
- Berisi nama universitas, lokasi, status akreditasi, dan visi misi
- Menampilkan gambar yang mendukung informasi universitas
- Menggunakan font kustom PT Sans untuk tampilan yang menarik

### ℹ️ Tab About

- Berisi penjelasan mengenai aplikasi yang dibuat
- Menjelaskan bahwa aplikasi ini dibuat untuk keperluan tugas
- Menyebutkan fungsi dari masing-masing halaman (Home, About, dan Profil)
- Menampilkan teknologi yang digunakan
- Menggunakan desain card yang rapi dan modern

### 👤 Tab Profil

- Menampilkan data diri pribadi meliputi:
  - Nama lengkap: Ilham Ganteng
  - NIM: 105841104921
  - Kelas: Sistem Informasi A
  - Jurusan: Sistem Informasi
  - Fakultas: Fakultas Ilmu Komputer
- Foto profil menggunakan gambar lokal
- Informasi kontak dan deskripsi tambahan

## Teknologi yang Digunakan

- **React Native**: Framework untuk pengembangan aplikasi mobile
- **Expo**: Platform untuk pengembangan aplikasi React Native
- **Expo Router**: Sistem navigasi berbasis file
- **TypeScript**: Bahasa pemrograman dengan type safety
- **Expo Vector Icons**: Library icon untuk aplikasi

## Struktur Navigasi

Aplikasi menggunakan Expo Router dengan struktur tab navigation:

```
app/
├── _layout.tsx          # Root layout dengan konfigurasi font
├── index.tsx            # Redirect ke (tabs)
└── (tabs)/              # Folder untuk tab navigation
    ├── _layout.tsx      # Tab layout configuration
    ├── index.tsx        # Home screen
    ├── about.tsx        # About screen
    └── profile.tsx      # Profile screen
```

## Komponen React Native yang Digunakan

- **View**: Container utama untuk layout
- **Text**: Menampilkan teks dengan berbagai styling
- **ScrollView**: Container yang dapat di-scroll
- **Image**: Menampilkan gambar lokal
- **StyleSheet**: Styling komponen dengan CSS-like syntax
- **Dimensions**: Mendapatkan dimensi layar untuk responsive design

## Cara Menjalankan Aplikasi

1. Pastikan Node.js sudah terinstall
2. Install dependencies:
   ```bash
   npm install
   ```
3. Jalankan aplikasi:
   ```bash
   npx expo start
   ```
4. Pilih platform yang diinginkan (iOS, Android, atau Web)

## Font Kustom

Aplikasi menggunakan font kustom yang sudah dikonfigurasi:

- **PT Sans**: Font utama untuk teks biasa
- **PT Sans Bold**: Font tebal untuk heading
- **Anton Regular**: Font untuk judul besar
- **Cinzel**: Font elegan untuk teks tertentu
- **Space Mono**: Font monospace

## Desain dan Styling

- Menggunakan warna utama biru (#0066CC) untuk konsistensi brand
- Background abu-abu muda (#f8f9fa) untuk kontras yang baik
- Card dengan shadow untuk memberikan kedalaman visual
- Icon dari Ionicons untuk tab navigation
- Responsive design yang menyesuaikan ukuran layar

## Fitur Khusus

- Tab navigation dengan icon yang berubah saat aktif/tidak aktif
- Smooth scrolling pada semua halaman
- Custom font loading dengan splash screen
- Error handling untuk font loading
- Responsive images dan layout

---

**Dibuat untuk tugas mata kuliah**  
**Universitas Muhammadiyah Makassar**  
**Fakultas Ilmu Komputer - Sistem Informasi**
