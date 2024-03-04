import Header from "@/components/reusable/header";
import Paragraph from "@/components/reusable/paragraph";
import Ornament1 from "./ornament1";
import Quote from "./quote";
import IndoMap from "./indo-map";
import Ornament3 from "./ornament3";

export default function SectionFive() {
  return (
    <section id="section-5">
      <Header
        title="Tersandung Anggaran"
        coverImage="/assets/section6/cover.jpeg"
      />
      <Paragraph className="relative py-8">
        <Ornament1 />
        <p>
          Penguasa kembali berganti, namun ide memindahkan ibu kota tetap hidup
          setelah Indonesia memasuki era reformasi. Wacana pemindahan ibu kota
          negara semakin gencar disuarakan setelah banjir besar melanda DKI
          Jakarta selama sepekan di masa pemerintahan Presiden Susilo Bambang
          Yudhoyono (SBY),
        </p>

        <p>
          Saat melawat ke Kazakhstan pada 2013, SBY mengatakan telah lama
          memikirkan wacana ini setelah melihat beberapa negara yang lebih dulu
          sukses memindahkan ibu kota, termasuk Kazakhstan.
        </p>

        <p>
          SBY menilai, pemindahan ibu kota akan menimbulkan dampak positif
          maupun negatif bagi Indonesia. Jika Indonesia memiliki kota pusat
          pemerintahan yang baru, ia optimistis kondisi Jakarta akan jauh lebih
          baik.
        </p>
      </Paragraph>
      <Quote />
      <div className="relative bg-[#FC9803] pt-8">
        <div
          style={{ background: "url(/assets/section6/noise.png)" }}
          className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-cover opacity-20"
        />
        <Paragraph className="relative z-20">
          <p>
            Bukan kali itu saja SBY punya ide untuk memindahkan ibu kota negara.
            Dalam acara Rapat Kerja Asosiasi Pemerintah Provinsi Seluruh
            Indonesia (APPSI) pada Desember 2009, ia pernah menyampaikan hal
            tersebut. Kemudian pada Agustus 2010, SBY bahkan menawarkan 3
            skenario Pemindahan Ibukota Negara ketika bertemu dengan para
            pemimpin media massa.
          </p>

          <p>
            Skenario pertama adalah mempertahankan Jakarta sebagai ibu kota,
            pusat pemerintahan, sekaligus kota ekonomi dan perdagangan. Opsi ini
            dipilih dengan harapan dapat membenahi masalah kemacetan,
            transportasi, pemukiman, dan tata ruang wilayah.
          </p>
        </Paragraph>
        <div className="relative my-8 bg-[#3C3C3B]">
          <Paragraph className="w-full py-12">
            <p className="px-[2rem] text-center text-lg font-bold leading-snug text-white xl:text-3xl">
              Sebelum Kalimantan Timur Dipilih, Daerah-daerah Ini Pernah Disebut
              Akan Menggantikan Jakarta <br />
              <span>sebagai Ibu Kota</span>
            </p>
          </Paragraph>
        </div>
        <div className="flex items-center justify-center">
          {/* Only For Desktop */}
          <IndoMap />
          {/* Only For Mobile */}
        </div>
        <div className="relative bg-[#3C3C3B]">
          <Paragraph className="relative w-full py-12 text-white">
            <Ornament3 />
            <p>
              Skenario kedua, membangun ibu kota yang benar-benar baru.
              Sedangkan skenario ketiga, ibu kota tetap di Jakarta, namun
              memindahkan pusat pemerintahan ke lokasi lain. Dari ketiga
              skenario ini, SBY lanjut mengajak semua komponen pemerintah dan
              masyarakat untuk membahas secara terbuka dan komprehensif atas
              wacana ini.
            </p>

            <p>
              Kemudian dalam Pidato Politik Partai Demokrat pada 2019 silam, SBY
              membuka tabir rencana pemindahan ibu kota di masa pemerintahannya.
              Diakuinya, pemerintah saat itu berencana memindahkan pusat
              pemerintahan ke kawasan Jawa Barat yang berjarak 1,5 jam dari
              Jakarta.
            </p>

            <p>
              Soal konsep, sang presiden banyak terinspirasi dari negara
              tetangga, Malaysia saat memindahkan pusat pemerintahan Putrajaya
              di luar Kuala Lumpur. 
            </p>

            <p>
              Namun, rencana pemindahan ibu kota negara dibatalkan setelah dua
              tahun pemerintah menggodok gagasan tersebut. SBY beralasan
              pemindahan ibu kota akan membutuhkan anggaran yang fantastis,
              sementara ada kebutuhan untuk pembangunan infrastruktur lainnya
              yang lebih mendesak. SBY memang dikenal menitikberatkan pada
              kebutuhan anggaran, dibandingkan banyak membahas soal lokasi baru
              yang akan dijadikan sebagai ibu kota pengganti Jakarta seperti
              yang dilakukan oleh presiden-presiden sebelumnya. 
            </p>

            <p>
              Selain itu, ada pula faktor lingkungan yang tidak mendukung. SBY
              mengatakan, deretan hal tersebut menjadi pertimbangan utama
              pemerintahannya melanjutkan kajian pemindahan ibu kota.
            </p>
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
