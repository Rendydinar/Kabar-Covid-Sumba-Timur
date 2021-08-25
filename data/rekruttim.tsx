import {
  MESSAGE_WHATSSAPP_TO_JOIN_IN_TEAM_VIDEO_EDITOR,
  MESSAGE_WHATSSAPP_TO_JOIN_IN_TEAM_EDITOR_GAMBAR,
  MESSAGE_WHATSSAPP_TO_JOIN_IN_TEAM_PENCARI_INFORMASI_VAKSIN,
  MESSAGE_WHATSSAPP_TO_JOIN_IN_TEAM_QNA,
} from '../constant';
import { FaVideo } from 'react-icons/fa';
import { IoMdPhotos } from 'react-icons/io';
import { GiSpyglass } from 'react-icons/gi';
import { MdQuestionAnswer } from 'react-icons/md';
import { IJoinKontributor, IKontributor } from '../interfaces';

const LIST_TIM_TO_JOIN: IJoinKontributor[] = [
  {
    icon: <GiSpyglass size={35} fill='#28DF99' />,
    title: 'Pencari Informasi Vaksin',
    description:
      'Melakukan pencarian informasi jadwal vaksin untuk daerah Sumba Timur baik itu lewat sosial media (facebook, instagram, dll), melalui informasi yang diserbarkan melalui WhatsApp atau melalui cara kamu sendiri agar bisa bisa memperoleh informasi jadwal vaksin',
    jobDescription: [
      'Melakukan pencarian informasi jadwal vaksin di Sumba Timur, lebih disarankan jadwal vaksin yang akan berlangsung',
      'Memiliki sumber informasi jadwal vaksin yang jelas seperti: tanggal, lokasi vaksin, sumber informasi, jenis vaksin dan lain sebagainya',
    ],
    linkToJoin: `https://api.whatsapp.com/send?phone=6282217971133&text=${MESSAGE_WHATSSAPP_TO_JOIN_IN_TEAM_PENCARI_INFORMASI_VAKSIN}`,
  },
  {
    icon: <FaVideo size={35} fill='#28DF99' />,
    title: 'Editor Video',
    description:
      'Membuat video terkait Covid-19 baik itu video edukasi, video berita, dan video tentang perkembangan website jika ada pembaruan fitur yang baru.',
    jobDescription: [
      'Membuat video dengan kejelasan konten yang mudah dipahami',
      'Membuat video yang menarik & edukatif dengan menggunakan bahasa yang mudah dipahami oleh masyarakat Sumba Timur',
      'Membuat video yang dapat dinikmati semua kalangan',
      'Membuat video yang tidak mengandung unsur sara, kekerasan, dan kontent +18 tahun',
      'Sertakan sumber konten yang diambil jika ada',
      'Anda bebas menggunakan aplikasi untuk mengedit viode & tidak ada batasan durasi video yang ditentukan.',
    ],
    linkToJoin: `https://api.whatsapp.com/send?phone=6282217971133&text=${MESSAGE_WHATSSAPP_TO_JOIN_IN_TEAM_VIDEO_EDITOR}`,
  },
  {
    icon: <IoMdPhotos size={35} fill='#28DF99' />,
    title: 'Editor Gambar',
    description:
      'Membuat kontent berupa gambar terkait Covid-19 baik itu gambar edukasi, gambar berita, gambar informasi covid-19 harian, dan gambar tentang perkembangan website jika ada pembaruan fitur yang baru.',
    jobDescription: [
      'Membuat gambar dengan kejelasan konten yang mudah dipahami',
      'Membuat gambar yang menarik & edukatif dengan menggunakan bahasa yang mudah dipahami oleh masyarakat Sumba Timur',
      'Membuat gambar yang dapat dinikmati semua kalangan',
      'Membuat gambar yang tidak mengandung unsur sara, kekerasan, dan kontent +18 tahun',
      'Sertakan sumber yang diliput jika ada',
    ],
    linkToJoin: `https://api.whatsapp.com/send?phone=6282217971133&text=${MESSAGE_WHATSSAPP_TO_JOIN_IN_TEAM_EDITOR_GAMBAR}`,
  },
  {
    icon: <MdQuestionAnswer size={35} fill='#28DF99' />,
    title: 'Tanya Jawab',
    description:
      'Membuat konten tanya-jawab seputar covid-19. konten bisa berupa edukasi, informasi himbauan, ataupun tips menjalani hidup selama pandemi. Wajib untuk menyertakan kejelasan sumber informasi yang didapatkan',
    jobDescription: [
      'Mencari informasi terkait covid-19 yang bisa diolah untuk menjadi konten tanya jawab',
      'Konten tanya jawab dikemas dengan menarik & edukatif dengan menggunakan bahasa yang mudah dipahami oleh masyarakat Sumba Timur',
      'Membuat konten tanya-jawab yang dapat dinikmati semua kalangan',
      'Membuat konten tanya-jawab tidak mengandung unsur sara, kekerasan, dan kontent +18 tahun',
      'Wajib untuk sertakan sumber informasi yang didapatkan. (Usahakan untuk mendapatkan sumber yang jelas)',
    ],
    linkToJoin: `https://api.whatsapp.com/send?phone=6282217971133&text=${MESSAGE_WHATSSAPP_TO_JOIN_IN_TEAM_QNA}`,
  },
];

export default LIST_TIM_TO_JOIN;
