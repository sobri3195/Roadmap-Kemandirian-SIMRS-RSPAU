# Roadmap Kemandirian SIMRS RSPAU 90 Hari

Aplikasi frontend-only untuk memantau rencana transisi pengelolaan SIMETRIS selama 90 hari. Dibangun dengan Vite, React, dan TypeScript. Data disimpan hanya di `localStorage`; tidak ada backend, autentikasi, atau sinkronisasi cloud.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka alamat yang ditampilkan Vite. Untuk memeriksa build produksi:

```bash
npm run build
npm run preview
```

Output situs statis tersedia di folder `dist/`.

## Deployment ke Vercel

1. Impor repositori ini di Vercel.
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.
5. Deploy.

`vercel.json` menyediakan rewrite SPA ke `index.html`, sehingga refresh pada route/hash aplikasi tidak menghasilkan 404.

## Data dan privasi

- Perubahan tersimpan di browser perangkat melalui `localStorage`.
- Gunakan Ekspor/Impor JSON di halaman Pengaturan untuk pemindahan manual.
- Jangan masukkan data pasien nyata, kata sandi, token, atau informasi rahasia.
- Tombol reset mengembalikan data contoh setelah konfirmasi.
