export const getDateFormat = (dateParam: any):string => {
  const NAMA_HARI = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const NAMA_BULAN = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  const HARI = dateParam.getDay();
  const TANGGAL = dateParam.getDate();
  const BULAN = dateParam.getMonth();
  const TAHUN = dateParam.getFullYear();
  return `${NAMA_HARI[HARI]} ${TANGGAL} ${NAMA_BULAN[BULAN]} ${TAHUN}`;

};
