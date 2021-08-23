/**
 * DISCLAIMER: 
 * Testing ini langsung menggunakan database production,
 * untuk itu mohon berhati-hati dalam melakukan query/operasi database
 */

import FirebaseApp from "../firebase/clientApp";
import { DATA_VAKSIN_COLLECTION } from "../firebase/firestore/collection";
import { IVaksin } from "../interfaces";

enum EnumJenisVaksin {
  SINOVAC='Sinovac',
  ASTRA_ZANECA='AstraZeneca',
  SINOPHARM='Sinopharm',
  PFIZER='Pfizer',
  NOVAVAX='Novavax'
}


const DATA_VAKSIN:IVaksin[] = [
  {
    date: '23-08-2021',
    img_url: 'https://firebasestorage.googleapis.com/v0/b/kabar-covid-sumba-timur.appspot.com/o/data-vaksin%2FWhatsApp%20Image%202021-08-22%20at%2010.31.50.jpeg?alt=media&token=b70f37ee-7a80-4008-afea-22fe4370eca4',
    isShow: true,
    jenis_vaksin: EnumJenisVaksin.SINOVAC,
    keterangan: `
    Vaksinasi dosis ke 2 Sinovac.
    Bagi masyarakat Kecamatan Rindi  maupun yg dari luar wilayah di Puskesmas Tanaraing.    
    Pada hari Senin tanggal 23 Agustus 2021 yang bertempat di aula kecamatan rindi, jam 09.00- 14.00 WITA.
    Mohon saudara/saudari agar hadir tepat Waktu
    Janga lupa PROKES 🙏😇
    `,
    kewajiban: ['Wajib Menaati Prokes'],
    kouta: 0,
    place_map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1964.7034382437087!2d120.759167626716!3d-9.98320964160418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c4f59a9b88e7f%3A0x59568cea60d04940!2sKantor%20Camat%20Rindi!5e0!3m2!1sen!2sid!4v1629602689838!5m2!1sen!2sid" width="600" height="450" style="border:0;width:100%;" allowfullscreen="" loading="lazy"></iframe>',
    sumber: 'Tim Vaksinator Puskesmas Tanaraing',
    timestamp: 1629680400000,
    waktu_berakhir_timestamp: 1629698400000
  },
  {
    date: '23-08-2021',
    img_url: 'https://firebasestorage.googleapis.com/v0/b/kabar-covid-sumba-timur.appspot.com/o/data-vaksin%2FWhatsApp%20Image%202021-08-22%20at%2010.31.50%20(1).jpeg?alt=media&token=0479f578-55b0-4e1b-9aa6-ba838fd8bda6',
    isShow: true,
    jenis_vaksin: EnumJenisVaksin.ASTRA_ZANECA,
    keterangan: `
    Vaksinasi Dosis 1 AstraZaneca. Peserta vaksinasi adalah masyarakat dan lansia di Desa Kadahang.
    Pada hari Senin tanggal 23 Agustus 2021 yang bertempat di SD Kadahang.
    `,
    kewajiban: [
      'Sasaran vaksin berusia 18 tahun ke atas, dan tidak dalam kondisi hamil',
      'Membawa fotocopy KTP atau KK',
      'Sarapan terlebih dahulu sebelum datang ke lokasi vaksinasi',
      'Menggunakan masker dan menjaga protokol kesehatan',
    ],
    kouta: 50,
    place_map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.2355218851194!2d120.02321301488772!3d-9.4007176932636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4b5a5e8631e8eb%3A0xa486a947f05598e7!2sSDN%20Kadahang!5e0!3m2!1sen!2sid!4v1629603645618!5m2!1sen!2sid" width="600" height="450" style="border:0;width:100%;" allowfullscreen="" loading="lazy"></iframe>',
    sumber: 'Akun Resmi Facebook Puskesmas Rambangaru',
    timestamp: 1629676800000,
    waktu_berakhir_timestamp: 1629709200000
  },
  {
    date: '24-08-2021',
    img_url: 'https://firebasestorage.googleapis.com/v0/b/kabar-covid-sumba-timur.appspot.com/o/data-vaksin%2FWhatsApp%20Image%202021-08-22%20at%2010.31.50%20(1).jpeg?alt=media&token=0479f578-55b0-4e1b-9aa6-ba838fd8bda6',
    isShow: true,
    jenis_vaksin: EnumJenisVaksin.ASTRA_ZANECA,
    keterangan: `
    Vaksinasi Dosis 1 AstraZaneca. Peserta vaksinasi adalah masyarakat dan lansia Desa Persiapan Matawai Mandangu.
    Pada hari Selasa tanggal 24 Agustus 2021 yang bertempat di Gedung GKS Ranting Praimarada.
    `,
    kewajiban: [
      'Sasaran vaksin berusia 18 tahun ke atas, dan tidak dalam kondisi hamil',
      'Membawa fotocopy KTP atau KK',
      'Sarapan terlebih dahulu sebelum datang ke lokasi vaksinasi',
      'Menggunakan masker dan menjaga protokol kesehatan',
    ],
    kouta: 30,
    place_map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2340.47917374833!2d120.01809279726132!3d-9.403744034782708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4b5af67146118f%3A0x3c94e28a7f52daa4!2sGKS%20Kadahang!5e0!3m2!1sen!2sid!4v1629603825551!5m2!1sen!2sid" width="600" height="450" style="border:0;width:100%;" allowfullscreen="" loading="lazy"></iframe>',
    sumber: 'Akun Resmi Facebook Puskesmas Rambangaru',
    timestamp: 1629763200000,
    waktu_berakhir_timestamp: 1629795600000
  },
  {
    date: '25-08-2021',
    img_url: 'https://firebasestorage.googleapis.com/v0/b/kabar-covid-sumba-timur.appspot.com/o/data-vaksin%2FWhatsApp%20Image%202021-08-22%20at%2010.31.50%20(1).jpeg?alt=media&token=0479f578-55b0-4e1b-9aa6-ba838fd8bda6',
    isShow: true,
    jenis_vaksin: EnumJenisVaksin.ASTRA_ZANECA,
    keterangan: `
    Vaksinasi Dosis 1 AstraZaneca. Peserta vaksinasi adalah masyarakat dan lansia Desa Wunga.
    Pada hari Rabu tanggal 25 Agustus 2021 yang bertempat di Kantor Desa Wunga.
    `,
    kewajiban: [
      'Sasaran vaksin berusia 18 tahun ke atas, dan tidak dalam kondisi hamil',
      'Membawa fotocopy KTP atau KK',
      'Sarapan terlebih dahulu sebelum datang ke lokasi vaksinasi',
      'Menggunakan masker dan menjaga protokol kesehatan',
    ],
    kouta: 50,
    place_map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62986.13470490476!2d119.93638192276602!3d-9.365670331610705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4b4fe056e3aed9%3A0x8abfd2d4bda5b31a!2sWunga%2C%20Haharu%2C%20East%20Sumba%20Regency%2C%20East%20Nusa%20Tenggara!5e0!3m2!1sen!2sid!4v1629604198181!5m2!1sen!2sid" width="600" height="450" style="border:0;width:100%;" allowfullscreen="" loading="lazy"></iframe>',
    sumber: 'Akun Resmi Facebook Puskesmas Rambangaru',
    timestamp: 1629849600000,
    waktu_berakhir_timestamp: 1629882000000
  },
  {
    date: '26-08-2021',
    img_url: 'https://firebasestorage.googleapis.com/v0/b/kabar-covid-sumba-timur.appspot.com/o/data-vaksin%2FWhatsApp%20Image%202021-08-22%20at%2010.31.50%20(1).jpeg?alt=media&token=0479f578-55b0-4e1b-9aa6-ba838fd8bda6',
    isShow: true,
    jenis_vaksin: EnumJenisVaksin.ASTRA_ZANECA,
    keterangan: `
    Vaksinasi Dosis 1 AstraZaneca. Peserta vaksinasi adalah masyarakat dan lansia Desa Napu.
    Pada hari Kamis tanggal 26 Agustus 2021 yang bertempat di Kantor Desa Napu.
    `,
    kewajiban: [
      'Sasaran vaksin berusia 18 tahun ke atas, dan tidak dalam kondisi hamil',
      'Membawa fotocopy KTP atau KK',
      'Sarapan terlebih dahulu sebelum datang ke lokasi vaksinasi',
      'Menggunakan masker dan menjaga protokol kesehatan',
    ],
    kouta: 50,
    place_map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13627.982813650522!2d119.93524456650363!3d-9.39665679057008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbffe47d2666213b0!2sKantor%20Desa%20Napu!5e0!3m2!1sen!2sid!4v1629604388730!5m2!1sen!2sid" width="600" height="450" style="border:0;width:100%;" allowfullscreen="" loading="lazy"></iframe>',
    sumber: 'Akun Resmi Facebook Puskesmas Rambangaru',
    timestamp: 1629936000000,
    waktu_berakhir_timestamp: 1629968400000
  },
  {
    date: '27-08-2021',
    img_url: 'https://firebasestorage.googleapis.com/v0/b/kabar-covid-sumba-timur.appspot.com/o/data-vaksin%2FWhatsApp%20Image%202021-08-22%20at%2010.31.50%20(1).jpeg?alt=media&token=0479f578-55b0-4e1b-9aa6-ba838fd8bda6',
    isShow: true,
    jenis_vaksin: EnumJenisVaksin.ASTRA_ZANECA,
    keterangan: `
    Vaksinasi Dosis 1 AstraZaneca. Peserta vaksinasi adalah masyarakat dan lansia Desa Praibakul.
    Pada hari Jumat tanggal 27 Agustus 2021 yang bertempat di Kantor Desa Praibakul.
    `,
    kewajiban: [
      'Sasaran vaksin berusia 18 tahun ke atas, dan tidak dalam kondisi hamil',
      'Membawa fotocopy KTP atau KK',
      'Sarapan terlebih dahulu sebelum datang ke lokasi vaksinasi',
      'Menggunakan masker dan menjaga protokol kesehatan',
    ],
    kouta: 50,
    place_map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d695.7186461097679!2d120.04608281814754!3d-9.458265501133623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4425bb7bf4ef08f4!2sKantor%20Desa%20Praibakul!5e0!3m2!1sen!2sid!4v1629604961106!5m2!1sen!2sid" width="600" height="450" style="border:0;width:100%;" allowfullscreen="" loading="lazy"></iframe>',
    sumber: 'Akun Resmi Facebook Puskesmas Rambangaru',
    timestamp: 1630022400000,
    waktu_berakhir_timestamp: 1630054800000
  },
  {
    date: '28-08-2021',
    img_url: 'https://firebasestorage.googleapis.com/v0/b/kabar-covid-sumba-timur.appspot.com/o/data-vaksin%2FWhatsApp%20Image%202021-08-22%20at%2010.31.50%20(1).jpeg?alt=media&token=0479f578-55b0-4e1b-9aa6-ba838fd8bda6',
    isShow: true,
    jenis_vaksin: EnumJenisVaksin.ASTRA_ZANECA,
    keterangan: `
    Vaksinasi Dosis 1 AstraZaneca. Peserta vaksinasi adalah Masyarakat Haharu.
    Pada hari Sabtu tanggal 28 Agustus 2021 yang bertempat di Aula Kecamatan Haharu.
    `,
    kewajiban: [
      'Sasaran vaksin berusia 18 tahun ke atas, dan tidak dalam kondisi hamil',
      'Membawa fotocopy KTP atau KK',
      'Sarapan terlebih dahulu sebelum datang ke lokasi vaksinasi',
      'Menggunakan masker dan menjaga protokol kesehatan',
    ],
    kouta: 100,
    place_map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7871.1579600194445!2d120.04209235096697!3d-9.458265473817148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4b5bf9ab4237f1%3A0x94ae6a3bbb7c6174!2sKantor%20Kecamatan%20Haharu!5e0!3m2!1sen!2sid!4v1629605130437!5m2!1sen!2sid" width="600" height="450" style="border:0;width:100%;" allowfullscreen="" loading="lazy"></iframe>',
    sumber: 'Akun Resmi Facebook Puskesmas Rambangaru',
    timestamp: 1630108800000,
    waktu_berakhir_timestamp: 1630141200000
  }
]


async function RealAddManyDataVaksin (){
  const batch = FirebaseApp.firestore().batch();
  try {
    DATA_VAKSIN.forEach((vaksin: IVaksin) => {
      batch.set(DATA_VAKSIN_COLLECTION.doc(), {
        keterangan: vaksin.keterangan,
        sumber:vaksin.sumber,
        img_url: vaksin.img_url,
        jenis_vaksin: vaksin.jenis_vaksin,
        date: vaksin.date,
        timestamp:vaksin.timestamp,
        place_map:vaksin.place_map,
        kewajiban:vaksin.kewajiban,
        kouta:vaksin.kouta,
        waktu_berakhir_timestamp:vaksin.waktu_berakhir_timestamp
      }); 
    });
    // Commit the batch
    const resultInsertManyDataVaksin = await batch.commit();
    console.log('resultInsertManyDataVaksin', resultInsertManyDataVaksin);
    return 'done';
  } catch(err) {
    return 'failed';
  }
}

export default RealAddManyDataVaksin;