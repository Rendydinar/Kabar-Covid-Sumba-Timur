# Kabar Covid Sumba Timur

<p align="center">
<img width="600" heigth="600 alt="large-logo" src="https://user-images.githubusercontent.com/50445892/147895934-b4bfbc89-1a67-42f1-a4d7-a744ae720c10.png">
</p>

[Kabar Covid Sumba Timur](https://kabar-covid-sumba-timur.vercel.app/)

Kabar Covid Sumba Timur adalah Situs Non-Official yang menampilkan informasi seputar COVID-19 Di Daerah Sumba Timur & Sekitarnya, selain informasi covid-19 situs ini juga menampilkan informasi seputar vaksin covid-19 & informasi seputar isolasi passien covid-19 di Sumba Timur.

Kabar Covid Sumba Timur dibangun atas dasar inisiatif masyarakat Sumba Timur untuk berbagi informasi dan saling membantu bagi masyarakat yang membutuhkan informasi seputar Covid-19 baik itu informasi jadwal vaksin, data covid harian, berita dari pemerintah daerah dan edukasi tentang Covid-19.

## Mulai

Untuk mulai menjalankan proyek secara lokal, ikuti langkah-langkah di bawah ini.

Pertama, kloning repositori.

```bash
git clone https://github.com/informers-19-unkriswina-sumba/Kabar-Covid-Sumba-Timur.git
```

Kemudian, instal dependensi dan ambil data ke mesin lokal Anda menggunakan npm.

```bash
cd Kabar-Covid-Sumba-Timur
npm install
```

Penyiapan Firebase untuk database **(see file /Kabar Covid Sumba Timur/firebase/Database Schema.txt)** untuk instruksi

Copy variabel local pada file .env.local **(Important to use firebase)**

```bash
# TODO. Fill in with Firebase Config
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_DATABASE_URL=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# for firebase-admin
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=s
```

Terakhir, jalankan server pengembangan.

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) dengan browser Anda untuk melihat hasilnya.

### Belajarlah lagi

Untuk mempelajari lebih lanjut tentang Next.js, lihat referensi berikut:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

Untuk mempelajari lebih lanjut tentang Firebase, lihat referensi berikut:

- [Firebase Documentation](https://firebase.google.com/docs) - Firebase Documentation

Untuk mempelajari lebih lanjut tentang Reactjs, lihat referensi berikut:

- [Getting Started – React](https://reactjs.org/docs/getting-started.html) - Getting Started – React

### Alat yang Sering Digunakan

- [Material-UI](https://mui.com/)
- [Figma](https://www.figma.com/)
- [Measure Web Performance](https://web.dev/measure)

### Lisensi

Kabar Covid SumbaTimur berada di bawah [MIT License](LICENSE.md)
