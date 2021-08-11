export interface IKelurahan {
  name: string;
  total: number;
}

export interface IKecamatan {
  name: string;
  kelurahan: IKelurahan[];
  total?: number;
}

export interface IIsolasi {
  name: string;
  kasus_terkonfirmasi: number;
  place_map: string;
  terkonfirmasi?:number;
  menunggu_hasil_pcr?:number;
}

export interface IVaksin {
  date: string;
  img_url: string;
  timestamp: number;
}