import Header from "@/components/reusable/header";
import Paragraph from "@/components/reusable/paragraph";
import Ornament1 from "./ornament1";
import Ornament2 from "./ornament2";

export default function SectionSix() {
  return (
    <section id="section-6">
      <Header
        coverImage="/assets/section7/cover.jpeg"
        customTitle={
          <div className="px-10 py-8 bg-white/30 backdrop-blur-sm rounded-xl border-2 border-white/10 max-w-5xl text-center">
            <h2 className="text-5xl font-bold text-white drop-shadow-lg">
              Mewujudkan Wacana Lama
            </h2>
          </div>
        }
      />
      <div className="bg-[#374B1E] py-8">
        <Paragraph className="py-12 text-white">
          <Ornament1 />
          <Ornament2 />
          <p>
            Wacana pemindahan ibu kota akhirnya benar-benar diwujudkan pada era
            Presiden Joko Widodo. Sejak awal, semua kandidat lokasi ibu kota
            baru berada di luar Jawa dengan alasan pemerataan pembangunan agar
            pertumbuhan penduduk dan ekonomi tidak tersentralisasi di Pulau
            Jawa.
          </p>

          <p>
            Pada 8 Agustus 2019, Jokowi lewat akun Instagram miliknya menyebut
            ada tiga kandidat wilayah yang berpotensi besar menjadi ibu kota
            Indonesia, yakni kawasan Tahura Bukit Soeharto di Kalimantan Timur,
            Kabupaten Gunung Mas di Kalimantan Tengah, dan Kalimantan Selatan.
            Lalu pada 26 Agustus 2019 Jokowi akhirnya mengumumkan keputusan
            pemerintah memindahkan ibu kota negara ke Kalimantan Timur, tetapi
            bukan di Bukit Soeharto, melainkan di sebagian Kabupaten Penajam
            Paser Utara dan sebagian Kabupaten Kutai Kartanegara.
          </p>

          <p>
            Penentuan wilayah tersebut dilandaskan pada berbagai aspek yang
            telah dikaji bertahun-tahun. Disebutkan, kajian beberapa wilayah
            yang menjadi prospek ibu kota Indonesia telah dilakukan sejak 2016
            silam. Menurut informasi yang dirilis pemerintah, setidaknya ada
            sembilan poin utama pemilihan Kalimantan Timur sebagai ibu kota
            Indonesia, salah satunya tingkat aksesibilitas yang tinggi karena
            dekat dengan infrastruktur dan kota besar, Balikpapan dan Samarinda.
          </p>

          <p>
            Hal yang tidak kalah penting, letak Kalimantan yang berada di
            tengah-tengah wilayah Indonesia menjadi faktor penguat bahwa pulau
            tersebut ideal dijadikan sebagai ibu kota. Secara geografis,
            Kalimantan juga relatif aman dan minim terjadi ancaman bencana alam
            maupun konflik sosial.
          </p>

          <p>
            Ibu Kota Negara tersebut dinamakan Nusantara. Nama itu terpilih dari
            80 calon nama yang telah dihimpun. Jokowi menambatkan hatinya pada
            Nusantara sebab istilah tersebut sudah identik dengan Indonesia,
            bahkan sebelum Indonesia merdeka.Pembangunan serta pemindahan ibu
            kota negara yang bernama Nusantara itu merupakan proyek jangka
            panjang yang diperkirakan akan selesai di tahun 2045. Prioritas
            pembangunan di kawasan tersebut pun dilakukan secara bertahap.
          </p>

          <p>
            Tahap pertama dalam kurun 2020-2024, pembangunan berfokus pada zona
            infrastruktur dasar dan utama seperti Istana Kepresidenan, Gedung
            MPR/DPR RI, dan perumahan. Desain Istana Kepresidenan merupakan
            hasil karya seniman dari Bali, Nyoman Nuarta. Rancangan gambar
            tersebut sangat identik dengan Indonesia melalui desain bangunan
            berbentuk burung garuda. Desain tersebut diterima Jokowi lewat
            sayembara Istana Presiden yang digelar oleh Kementerian Pekerjaan
            Umum dan Perumahan Rakyat.
          </p>

          <p>
            Kemudian, tahap kedua pembangunan IKN dilanjutkan pada 2025-2023
            dengan mulai mengembangkan IKN sebagai pusat inovasi dan ekonomi,
            seperti membangun perkantoran, hotel, dan kawasan industri.
            Sementara itu tahap terakhir pembangunan pada 2035-2045 berfokus
            pada penyelesaian pembangunan seluruh infrastruktur dan ekosistem 3
            kota.
          </p>
        </Paragraph>
      </div>
    </section>
  );
}
