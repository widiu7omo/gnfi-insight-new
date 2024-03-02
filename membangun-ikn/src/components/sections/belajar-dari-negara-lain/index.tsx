import Header from "@/components/reusable/header";
import Paragraph from "@/components/reusable/paragraph";
import Ornament1 from "./ornament1";
import Ornament2 from "./ornament2";
import Ornament3 from "./ornament3";

export default function SectionSeven() {
  return (
    <section id="section-7">
      <Header
        title="Belajar dari Negara Lain"
        coverImage="/assets/section8/cover.jpeg"
      />
      <div className="bg-[#435440] relative flex items-start justify-center">
        <Ornament1 />
        <Paragraph className="py-8 text-white">
          <p>
            Memindahkan ibu kota bukan hal asing di dunia ini. Tak hanya
            Indonesia, sejumlah negara juga pernah memindahkan ibu kotanya.
          </p>

          <p>
            Pemindahan ibu kota ini ada yang sudah berlangsung sejak ratusan
            tahun silam, misalnya Brasil. Saat belum merdeka dan masih berada di
            bawah kekuasaan Portugis, ibu kota Brasil adalah Salvador. Lalu pada
            1763, ibu kota dipindah ke Rio de Janeiro, dan pindah lagi ke
            Brasilia pada 1960 saat negara di Amerika Selatan tersebut sudah
            merdeka.
          </p>

          <p>
            Pemindahan ibu kota Brasil dari Rio de Janeiro ke Brasilia merupakan
            salah satu inspirasi bagi Indonesia. Pada 2019 silam, Menteri
            PPN/Kepala Bappenas saat itu Bambang Brodjonegoro menyebut bahwa
            alasan pemindahan ibu kota Indonesia dan Brasil memang serupa, yakni
            pemerataan pembangunan. Di Brasil, pembangunan yang awalnya lebih
            banyak bertumpu di daerah pesisir menjadi meluas hingga ke pedalaman
            Amazon.
          </p>
        </Paragraph>
      </div>
      <div className="bg-[#E5E5E5] relative flex items-start justify-center py-8">
        <div className="max-w-4xl flex space-x-4">
          <img
            src="/assets/section8/bambang.png"
            alt="Bambang Brojonegoro"
            className="w-[175px] object-contain flex-none"
          />
          <div className="relative">
            <p className="flex-grow font-bold text-lg z-10 relative">
              “Ketika ekonomi bertumbuh di Rio De Janeiro dan Santos, wilayah
              pedalaman dan Amazon tertinggal dibandingkan wilayah pantai. Upaya
              pemindahan ibu kota ke wilayah Amazon bisa dibaca sebagai upaya
              pemerataan pembangunan. Brasilia tidak hanya pusat pemerintahan,
              tetapi menjadi pusat kegiatan ekonomi bagi wilayah sekitarnya."
              ujar Bambang dalam Forum Merdeka Barat (FMB) 9 yang digelar di
              Gedung Widjojo Nitisastro, Kementerian PPN/Bappenas, Rabu
              (10/7/2019).
            </p>
            <Ornament2 />
          </div>
        </div>
      </div>
      <div className="bg-[#435440] relative flex items-start justify-center">
        <Ornament3 />
        <Paragraph className="py-8 text-white">
          <p>
            "Meski wilayah Amazon masih kalah dibandingkan wilayah pantai, tapi
            ketimpangan bisa diatasi. Untuk itu, kita juga berupaya meratakan
            pembangunan antara Jawa dan luar Jawa. Ketimpangan pendapatan dan
            ekonomi ini yang harus kita atasi. Paling tidak, kita dapat
            mengurangi ketimpangan tersebut," lanjutnya.
          </p>

          <p>
            Berbagai negara memindahkan ibu kota karena alasan yang beragam.
            Salah satu alasan yang paling umum adalah kondisi ibu kota lama yang
            kurang ideal, baik itu dalam hal geopolitik maupun infrastruktur dan
            kepadatan penduduk. Biasanya, bekas ibu kotanya kemudian tetap
            menjadi kota terbesar sekaligus pusat ekonomi di negara tersebut.
          </p>

          <p>
            Brasil juga adalah salah satu negara yang melakukan pemindahan ibu
            kota seperti demikian sehingga pusat ekonomi dan pemerintahannya
            tidak berada di satu kota yang sama. Contoh lainnya adalah Nigeria
            yang memindahkan ibu kota dari Lagos dan Abuja, Pakistan dari
            Karachi ke Islamabad, juga Kazakhstan awalnya beribukota di Almaty
            menjadi Astana.
          </p>

          <p>
            Tetangga Indonesia di Asia Tenggara juga pernah memindahkan ibu
            kota. Myanmar memindahkan ibu kota dari Yangon ke Naypyidaw pada
            2005. Sayangnya, pemindahan ibu kota Myanmar itu dinilai gagal.
          </p>

          <p>
            Pemerintah Myanmar membangun Naypyitaw dengan berbagai infrastruktur
            mentereng, mulai dari jalan raya yang lebar, pusat perbelanjaan,
            hingga lapangan golf. Namun, kotanya justru sepi bagaikan kota
            hantu, sementara pembangunannya memakan biaya hingga 4 miliar dolar
            AS yang didapat dari utang China.
          </p>

          <p>
            Sementara itu, Malaysia yang kerap disalahpahami bahwa mereka
            memindahkan ibu kota ke Putrajaya pada 1999, nyatanya tetap
            menjadikan Kuala Lumpur sebagai ibu kota. Kenyataannya, Putrajaya
            memang dibangun sebagai tujuan pemindahan pusat pemerintahan, namun
            tak lantas menjadikannya sebagai ibu kota.
          </p>
        </Paragraph>
      </div>
    </section>
  );
}
