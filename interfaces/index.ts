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

export interface IBerita {
  title: string;
  date: string;
  author: string;
  link_document: string;
  sumber: string;
  description: string;
  contentHtml: string;
  img: string;
  link_site?: string[] | undefined; 
  type: string;
  id:string;
}
export interface IBeritaCard {
  date: string;
  title: string;
  id: string;
  author: string;
  description: string;
  img: string;
  type: string;
  sumber: string;
}

export interface IEdukasiCard {
  title:string;
  id: string;
  target:string[];
  date:string;
  author:string;
  sumber:string;
  description:string;
  img:string;
}


export interface IEdukasi {
  title: string;
  date: string;
  author: string;
  sumber: string;
  description: string;
  contentHtml: string;
  img: string;
  link_site?: string[] | undefined; 
  target:string[];
  id:string;
}

export interface IQnA {
  title: string;
  content: string;
  sumber: string;
}

export interface IFormTambahDataVaksin {
  keterangan: string;
  sumber:string;
  img_uri: string;
  jenis_vaksin: string;
  date: string;
  image_name: string;
  timestamp?:number
  place_map?:string;
  kewajiban?:string[];
  kouta?:number;
  waktu_berakhir_timestamp?:number
}

export interface IKontributor {
  name: string;
  img_url:string;
  facebook: string;
  instagram: string;
  twitter: string;
  bio: string;
  position:string;
}