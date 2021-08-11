export const getHariIni = ():string => {
  const NAMA_HARI = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const NAMA_BULAN = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const TIME_NOW = new Date();
  const HARI = TIME_NOW.getDay();
  const TANGGAL = TIME_NOW.getDate();
  const BULAN = TIME_NOW.getMonth();
  const TAHUN = TIME_NOW.getFullYear();
  return `${NAMA_HARI[HARI]} ${TANGGAL} ${NAMA_BULAN[BULAN]} ${TAHUN}`;
}
