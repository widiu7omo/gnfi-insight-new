import Paragraph from "@/components/reusable/paragraph";
import Ornament1 from "./ornament1";
import Ornament2 from "./ornament2";
import Door from "./door";
import Header from "@/components/reusable/header";

export default function SectionThree() {
  return (
    <section id="section-3" className="bg-[#CFCFCF]">
      <div className="bg-[#EF9402] relative py-8">
        <div
          style={{ backgroundImage: "url('assets/old-texture.png')" }}
          className="top-0 bottom-0 left-0 right-0 absolute z-0 opacity-30"
        />
        <div className="relative pb-24">
          <h2 className="max-w-3xl mx-auto text-center text-6xl font-bold leading-snug text-white">
            Dipelihara sejak Ribuan Tahun Lalu
          </h2>
          <Paragraph className="relative py-8 text-white">
            <Ornament1 />
            <Ornament2 />
            <p>
              Ada sejarahnya bagaimana kucing (Felis catus) bisa banyak
              dipelihara manusia. Jauh sebelum pecinta kucing seperti Rissa dan
              Brasti serta banyak orang Indonesia Lainnya, manusia sudah
              memelihara kucing sejak ribuan tahun silam. 
            </p>

            <p>
              Sama halnya dengan hewan peliharaan lainnya, kucing ternyata juga
              merupakan hasil domestikasi dari miacis yang juga merupakan nenek
              moyang dari anjing dan beruang. Miacis ini kemudian mengalami
              evolusi menjadi kucing besar seperti singa dan harimau yang
              kemudian berevolusi menjadi nenek moyang kucing domestik. Nenek
              moyang kucing domestik ini pertama kali ditemukan berdasarkan
              hasil fosil mumi di Mesir.
            </p>

            <p>
              Penelusuran sejarah mencatat bahwa domestikasi kucing terjadi pada
              10.000 tahun lalu di sebuah wilayah Timur Tengah yang mengelilingi
              Sungai Tigris dan Efrat. Masyarakat mengembangkan ikatan dengan
              kucing sebagai pengendali hama.
            </p>

            <p>
              Wilayah yang diyakini tempat domestikasi kucing pertama dikenal
              sebagai kawasan berbentuk bulan sabit. Setelah 10.000 tahun
              berlalu, wilayah tersebut kini menjadi sejumlah negara, seperti
              Irak, Turki, Suriah, Lebanon, Israel, Palestina, dan Mesir.
            </p>

            <p>
              Di Mesir, kucing dianggap sebagai dewa oleh rakyat. Pada tahun
              2004, Jean dari National Museum of Natural History in Paris
              melaporkan bahwa ditemukan bukti adanya kuburan manusia dan
              disampingnya terdapat kuburan kucing.
            </p>

            <p>
              “Fosil tersebut diperkirakan berumur 9.500 tahun. Hal ini
              mengungkapkan bahwa telah ada kedekatan antara manusia dan kucing
              sejak 10.000 tahun yang lalu,” tulis Dian Dwi Putri Ulan Sari
              Patongai dalam dalam Evolusi Kucing: Genetika dan Evolusi.
            </p>

            <p>
              Dalam tulisan tersebut, diuraikan pula bahwa ahli paleogenetik
              Claudio Ottoni membagi domestikasi kucing terjadi dalam dua jenis.
              Dia juga mengatakan kucing domestik memiliki nenek moyang yang
              sama yaitu berasal dari kucing liar Afrika.
            </p>

            <p>
              Penelitian yang dilakukan olehnya juga menjelaskan mengapa kucing
              menyebar ke seluruh dunia. Dirinya menganalisis, DNA purba dari
              sisa-sisa kucing yang ditemukan di kota pelabuhan, para ilmuwan
              menyimpulkan kucing ini dibawa menggunakan kapal.
            </p>
          </Paragraph>
        </div>
        <div className="relative max-w-[65ch] mx-auto space-y-8">
          <h3 className="w-[30rem] text-left text-4xl font-bold leading-snug text-white">
            Ribuan Tahun Lalu. Kedekatan Manusia dengan Kucing Mulai Terialin
          </h3>
          <Paragraph className="text-white">
            <p className="w-[250px]">
              Kucing merupakan hasil domestikasi dari miacis yang juga nenek
              moyang dari anjing dan beruang
            </p>
            <p className="w-[325px]">
              Macis kemudian mengalami evolusi menjadi kucing besar seperti
              singa dan harimau yang kemudian berevolusi menjadi nenek moyang
              kucing domestik
            </p>
          </Paragraph>
        </div>
        {/* Relative to full width */}
        <Door />
      </div>
      <div className="bg-gradient-to-b from-[#D9D9D9]/0 to-[#97BDD6]">
        <div className="relative max-w-3xl mx-auto pb-8 pt-20">
          <div className="flex items-start justify-center">
            <div className="relative flex-none w-[520px] pb-[12rem]">
              <img
                src="assets/cat-hunt.png"
                alt="Cat Hunt"
                className="object-cover"
              />
              <img
                src="assets/cat-statue.png"
                alt="Cat Statue"
                className="absolute -left-[5rem] bottom-0"
              />
            </div>
            <Paragraph className="flex-grow">
              <p>
                Domestikasi kucing terjadi pada 10.000 tahun lalu di sebuah
                wilayah Timur Tengah
              </p>
              <p>
                Saat itu,masyarakat menjalin ikatan dengan kucing yang dianggap
                berfungsi sebagai pengendali hama
              </p>
              <p className="font-bold">
                Kucing dibawa berlayar oleh manusia untuk membasmi hama di
                kapal. Itu yang membuat kucing menyebar ke seluruh dunia
              </p>
            </Paragraph>
          </div>
        </div>
        <Paragraph className="py-12">
          <p>
            Ada sejarahnya bagaimana kucing (Felis catus) bisa banyak dipelihara
            manusia. Jauh sebelum pecinta kucing seperti Rissa dan Brasti serta
            banyak orang Indonesia Lainnya, manusia sudah memelihara kucing
            sejak ribuan tahun silam.
          </p>

          <p>
            Sama halnya dengan hewan peliharaan lainnya, kucing ternyata juga
            merupakan hasil domestikasi dari miacis yang juga merupakan nenek
            moyang dari anjing dan beruang. Miacis ini kemudian mengalami
            evolusi menjadi kucing besar seperti singa dan harimau yang kemudian
            berevolusi menjadi nenek moyang kucing domestik. Nenek moyang kucing
            domestik ini pertama kali ditemukan berdasarkan hasil fosil mumi di
            Mesir.
          </p>

          <p>
            Penelusuran sejarah mencatat bahwa domestikasi kucing terjadi pada
            10.000 tahun lalu di sebuah wilayah Timur Tengah yang mengelilingi
            Sungai Tigris dan Efrat. Masyarakat mengembangkan ikatan dengan
            kucing sebagai pengendali hama.
          </p>

          <p>
            Wilayah yang diyakini tempat domestikasi kucing pertama dikenal
            sebagai kawasan berbentuk bulan sabit. Setelah 10.000 tahun berlalu,
            wilayah tersebut kini menjadi sejumlah negara, seperti Irak, Turki,
            Suriah, Lebanon, Israel, Palestina, dan Mesir.
          </p>

          <p>
            Di Mesir, kucing dianggap sebagai dewa oleh rakyat. Pada tahun 2004,
            Jean dari National Museum of Natural History in Paris melaporkan
            bahwa ditemukan bukti adanya kuburan manusia dan disampingnya
            terdapat kuburan kucing.
          </p>
          <p>
            “Fosil tersebut diperkirakan berumur 9.500 tahun. Hal ini
            mengungkapkan bahwa telah ada kedekatan antara manusia dan kucing
            sejak 10.000 tahun yang lalu,” tulis Dian Dwi Putri Ulan Sari
            Patongai dalam dalam Evolusi Kucing: Genetika dan Evolusi. Dalam
            tulisan tersebut, diuraikan pula bahwa ahli paleogenetik Claudio
            Ottoni membagi domestikasi kucing terjadi dalam dua jenis. Dia juga
            mengatakan kucing domestik memiliki nenek moyang yang sama yaitu
            berasal dari kucing liar Afrika. Penelitian yang dilakukan olehnya
            juga menjelaskan mengapa kucing menyebar ke seluruh dunia. Dirinya
            menganalisis, DNA purba dari sisa-sisa kucing yang ditemukan di kota
            pelabuhan, para ilmuwan menyimpulkan kucing ini dibawa menggunakan
            kapal.
          </p>
        </Paragraph>
      </div>
      <div
        className={
          "flex h-[800px] items-center justify-center bg-cover bg-center"
        }
        style={{
          backgroundImage:
            "linear-gradient(180deg, #97BDD6 0%, rgba(0, 0, 0, 0) 100%),url(assets/cat-sit.jpeg)",
        }}
      />
      <div className="bg-[#FFF4E9]">
        <Paragraph className="py-8">
          <p>
            “Kucing ini dijadikan sebagai penjaga gudang makanan dan hewan
            pengerat dan seringkali dibawa dalam pelayaran. Hal inilah yang
            menyebabkan kucing dapat tersebar ke seluruh penjuru dunia,” papar
            Rosdiana Ngitung dalam artikelnya yang diterbitkan Jurnal Sainsmat.
          </p>

          <p>
            Profesor Antropologi di Washington University, Fiona Marshall
            mengungkapkan bukti dimulainya hubungan antara kucing dan manusia
            mulai terlihat jelas ketika pertanian di China semakin berkembang,
            sekitar 5.500 sampai 5.280 tahun yang lalu.
          </p>

          <p>
            Ketika itu pertanian menjadi hal yang paling diminati. Hasil
            pertanian cukup melimpah dan berlebih. Sehingga banyak penduduk yang
            menyimpan di dalam keramik. Tetapi saat itu, ada gangguan tikus yang
            membutuhkan bantuan kucing.
          </p>

          <p>
            “Berdasarkan hasil pemeriksaan isotop pada gigi kucing diketahui
            bahwa, kucing tersebut telah memakan hama petani tersebut. Sejak
            saat itu diasumsikan hubungan antara manusia dan kucing semakin
            dekat,” paparnya.
          </p>

          <p>
            Para ahli percaya varietas kucing rumahan yang ada sekarang berasal
            dari jenis kucing liar. Tapi hal tersebut masih diragukan. Sehingga,
            satu tim peneliti yang dipimpin Carlos A. Driscolll mengumpulkan 979
            DNA dari kucing liar dan kucing domestik untuk menggali fakta lebih
            dalam guna menjawab keraguan itu.Dari penelitian yang hasilnya
            dipublikasikan di Jurnal Nature itu, diketahui bahwa, karena kucing
            liar adalah tipe hewan yang cenderung punya dan mempertahankan
            daerah teritorial, diperkirakan bahwa DNA kucing liar cenderung
            stabil dari waktu ke waktu,.
          </p>

          <p>
            Diperkirakan pula, semua kucing domestik yang ada merupakan hasil
            evolusi dari salah satu populasi kucing liar, sehingga bukti
            domestikasi kucing dapat dibangun. Ternyata berdasarkan hasil
            analisis genetika menunjukkan bahwa DNA kucing sangat mirip.
            Berdasarkan penelitian ini terungkaplah lima kelas genetik kucing
            liar, Felis silvestris silvestris di Eropa, Silvestris bieti di
            China, Felis silvestris ornate di Asia Tengah, dan Felis silvestris
            cafra di Asia Tenggara.
          </p>
        </Paragraph>
      </div>
    </section>
  );
}
