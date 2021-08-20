export interface IKelurahan {
  name: string;
  total: number;
  isShow?: boolean;
  isDesa?: boolean;
}

export interface IKecamatan {
  name: string;
  kelurahan: IKelurahan[];
  isShow?: boolean;
  total?: number;
}

export interface IIsolasi {
  nama_tempat: string;
  kasus_terkonfirmasi: number;
  place_map: string;
  terkonfirmasi?:number;
  menunggu_hasil_pcr?:number;
}

export interface IVaksin {
  date: string;
  img_url: string;
  timestamp: number;
  keterangan?: string;
  sumber?: string;
  jenis_vaksin?: string;  
  place_map?:string;
  kewajiban?:string[];
  kouta?:number;
  waktu_berakhir_timestamp?:number
  isShow: boolean;
}