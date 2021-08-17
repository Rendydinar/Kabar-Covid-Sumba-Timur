export const getDateFormated = (timestamp: Date):string => {
  const NAMA_HARI = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const NAMA_BULAN = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const TIME_NOW = timestamp;
  const HARI = TIME_NOW.getDay();
  const TANGGAL = TIME_NOW.getDate();
  const BULAN = TIME_NOW.getMonth();
  const TAHUN = TIME_NOW.getFullYear();
  
  return `${NAMA_HARI[HARI]} ${TANGGAL} ${NAMA_BULAN[BULAN]} ${TAHUN}`;
}

// convert milisecond to hours
export const milisecondToHour = (milisecond: number): number => {
  return  Math.floor(
    (milisecond % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
};

// convert milisecond to day
export const milisecondToDay = (milisecond: number): number => {
  return Math.floor(milisecond / (24 * 60 * 60 * 1000));
};

// convert milisecond to minutes
export const milisecondToMinutes = (milisecond: number): number => {
  return Math.floor((milisecond % (1000 * 60 * 60)) / (1000 * 60))
};
