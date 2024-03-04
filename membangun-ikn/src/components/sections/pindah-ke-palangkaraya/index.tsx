import Header from "@/components/reusable/header";
import Paragraph from "@/components/reusable/paragraph";
import Ornament1 from "./ornament1";
import Ornament2 from "./ornament2";
import Quote from "./quote";
import Ornament5 from "./ornament5";
import Ornament4 from "./ornament4";
import Ornament3 from "./ornament3";

export default function SectionThree() {
  return (
    <section id="section-3" className="relative">
      <Ornament2 />
      <Header
        title="Pindah ke Palangkaraya, Ide Bung Karno atau Semaun?"
        coverImage="/assets/section4/cover.webp"
        className="relative"
      />
      <Paragraph className="relative py-8">
        <Ornament1 />

        <p>
          Setelah Belanda mengakui kedaulatan Indonesia secara penuh pada 1949,
          situasi jadi lebih aman dan Jakarta kembali dijadikan ibu kota. Namun,
          wacana agar ibu kota dipindahkan lagi tetap tak berhenti.
        </p>

        <p>
          Adalah Bung Karno yang yang dianggap pernah mewacanakan agar Indonesia
          memiliki ibu kota di Kalimantan. Cerita ini muncul saat ia berkunjung
          ke Palangkaraya pada 17 Juli 1957. Di sana, ia melakukan seremoni
          peletakan batu pertama ibu kota provinsi Kalimantan Tengah tersebut.
        </p>

        <p>
          Saat itu, Bung Karno menyerukan agar kota Palangkaraya menjadi “modal
          dan model”. Tetapi setelah itu, tidak terdengar perkataan Bung Karno
          yang ingin memindahkan ibu kota negara ke Palangkaraya. Pasalnya
          setelah itu, Indonesia menghadapi tantangan yang cukup berat mulai
          dari perebutan Iran Barat hingga konflik dengan Malaysia.
        </p>

        <p>
          “Tapi apakah itu masuk rencana atau tidak kita bisa melihat pada saat
          itu. Pemindahan ibu kota bukan prioritas lagi. Karena Indonesia masuk
          masa kritis yang menyita waktu dan pemikiran,” ujar pegiat sejarah Neo
          Historia, Daniel Limantara.
        </p>

        <p>
          Pemindahan ibu kota negara ke Kalimantan juga ternyata pernah digagas
          oleh Semaun, tokoh Partai Komunis Indonesia (PKI) yang lama tinggal di
          Rusia. Dirinya pulang ke tanah air pada Desember 1956 dan menjadi
          penasehat pribadi Presiden Soekarno.
        </p>

        <p>
          Pada Kongres ke-4 Partai Murba, Semaun mengeluarkan gagasan itu yang
          kemudian diterbitkan sebagai brosur dengan judul Kodrat alam baru
          perekonomian dunia untuk kesejahteraan umat manusia.
        </p>

        <p>
          Sejarawan Harry A Poeze menjelaskan buku itu dimaksud sebagai buku
          panduan bagi partai untuk mengusir imperialisme dari Indonesia secara
          damai, dan menuju pada pembangunan Sosialisme.
        </p>

        <p>
          “Dia menekankan pentingnya transmigrasi untuk Indonesia. Bahkan dia
          mengajukan rencana untuk memindahkan “bangsa-bangsa ke Kalimantan,”
          jelasnya.
        </p>
        <p>
          Dikatakan oleh Poeze, Semaun terus mengulang-ulang gagasan itu dalam
          karya lainnya. Disebutkan olehnya, Bung Karno pun mendukung usul-usul
          itu dan memandang pemindahan ibu kota negara bisa dilaksanakan.
        </p>

        <p>
          “Apakah Soekarno kepincut dengan gagasan Semaun sehingga berniat
          memindahkan ibukota negara ke Palangkaraya? Masih perlu dikaji lebih
          jauh,” katanya.
        </p>

        <p>
          Wacana menjadikan Palangkaraya menjadi ibukota negara masih sumir.
          Wacana ini kemudian berakhir setelah Presiden Soekarno mengesahkan UU
          No 10/1964 yang menyatakan Jakarta tetap sebagai ibu kota negara.
        </p>

        <p>
          Dikatakan oleh sejarawan JJ Rizal, Bung Karno sebenarnya hanya ingin
          menjadikan Palangkaraya sebagai wajah “Jakarta” yang baru. Tetapi pada
          akhirnya, ucapnya, Bung Karno telah berketetapan hati menjadikan
          Jakarta sebagai ibu kota.
        </p>
      </Paragraph>
      <div className="relative bg-[#FFBEAA]">
        <Paragraph className="relative">
          <Quote />
          <div className="relative flex flex-col items-center space-x-2 xl:flex-row xl:items-end">
            <p className="flex-grow text-lg font-bold text-neutral-950">
              “Karena buat Soekarno tak ada kota lain yang punya identitas
              seperti Jakarta yang menjadi wadah tumbuhnya nasionalisme di
              Indonesia. Puncak nasionalisme di Indonesia itu di Jakarta. Inilah
              ibukota politik, tak tergantikan. Ini orientasi Soekarno,” ujar
              Rizal yang dimuat Kompas.
            </p>

            <div className="relative w-[165px] flex-none">
              <img
                src="assets/section4/jj.png"
                alt="JJ Rizal"
                className="object-contain"
              />
              <Ornament4 />
              <Ornament5 />
            </div>
          </div>
        </Paragraph>
        <Paragraph className="relative pb-8 text-neutral-950">
          <Ornament3 />
          <p>
            Rizal menjelaskan bukti Soekarno tetap memilih Jakarta sebagai
            ibukota negara adalah munculnya bangunan-bangunan simbolik, seperti
            Monumen Nasional (Monas), Kompleks Senayan dan Gelora Bung Karno.
          </p>
          <p>
            Soekarno, lanjutnya, malah menggagas konsep megapolitan yang
            menjangkau sampai Purwakarta di Jawa Barat. Tetapi, jelasnya,
            Soekarno efektif memerintah hanya pada kurun 1956-1965 sehingga ide
            ini belum sempat terwujud.
          </p>
          <p>
            “Jadi, Ali Sadikin mengantarkan konsep itu ke Sutiyoso, lalu
            Sutiyoso mengantarkan konsep megapolitan itu ke SBY. Idenya diterima
            SBY tapi disimplifikasi jadi pemindahan ibukota. Soal kenapa tak
            pakai nama megapolitan, mungkin ada sejarah lain,” ujar Rizal.
          </p>
        </Paragraph>
      </div>
    </section>
  );
}
