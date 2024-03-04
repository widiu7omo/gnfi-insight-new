import Header from "@/components/reusable/header";
import Paragraph from "@/components/reusable/paragraph";
import Ornament1 from "./ornament1";
import Ornament2 from "./ornament2";
import Arrow from "./arrow";
import Card from "./card";
import QuoteIcon from "./quote-icon";
import QuoteIconSmall from "./quote-icon-small";
import Quote from "./quote";
import Ornament3 from "./ornament3";
import Ornament4 from "./ornament4";

export default function SectionEight() {
  return (
    <section id="section-8">
      <Header
        title="Peluang dan Tantangan IKN"
        coverImage="/assets/section9/cover.jpeg"
      />
      <Paragraph className="relative py-8">
        <Ornament1 />
        <p>
          Berkaca dari kota-kota besar yang sudah lama berdiri di Indonesia,
          dibutuhkan paradigma baru dalam membangun kota. Ini diperlukan untuk
          menghindari masalah yang selama ini menjangkiti kota-kota besar
          tersebut, mulai dari belum terpenuhinya kebutuhan hunian, fasilitas
          yang tidak merata, kemacetan lalu lintas, hingga polusi.
        </p>

        <p>
          Hal itu disampaikan oleh Bambang Brodjonegoro dalam webinar bertajuk
          “Refleksi Pembangunan IKN dari Perspektif Lingkungan dan Kelembagaan”
          yang diselenggarakan oleh Sekolah Arsitektur, Perencanaan, dan
          Pengembangan Kebijakan (SAPPK) Institut Teknologi Bandung (ITB) pada
          Kamis (6/7/2023). Menurut Bambang yang hadir dalam kapasitasnya
          sebagai Guru Besar Fakultas Ekonomi dan Bisnis Universitas Indonesia,
          IKN punya peluang untuk menjadi kota yang berbeda dan ideal karena
          dibangun dari nol, berbeda dengan kebanyakan kota besar lain yang
          tumbuh karena didorong oleh market yang menginginkan orang tinggal di
          sana.
        </p>

        <p>
          "Dengan IKN, kita berharap, ketika kita membangun kota dari nol, kita
          akan punya kota yang menjadi standar bagi pembangunan kota lain di
          indonesia" ujar Bambang.
        </p>

        <p>
          Bambang menjelaskan bahwa idealisme IKN tertuang dalam visi sebagai
          kota paling berkelanjutan di dunia. IKN diharapkan menjadi kota yang
          punya ruang hijau memadai, terhubung dengan transportasi publik,
          energinya terbarukan, mandiri secara pangan, aman dan terjangkau,
          efisien dengan teknologi, bebas kemiskinan, juga menjunjung
          keberagaman.
        </p>
      </Paragraph>
      <div className="flex items-center justify-center">
        <div className="relative max-w-[65ch] -skew-y-2 bg-black px-[2rem] py-6 xl:px-[8rem]">
          <Ornament2 />
          <h3 className="skew-y-2 text-center text-lg font-bold text-white xl:text-4xl ">
            IKN, Standar Baru Pembangunan Kota?
          </h3>
        </div>
      </div>
      <Card />
      <Quote />
      <Paragraph className="relative py-8">
        <Ornament3 />
        <Ornament4 />
        <p>
          Namun di balik peluang tersebut, ada pula tantangan yang dihadapi
          dalam pembangunan IKN. Dosen Teknik Geologi Universitas Diponegoro
          Andang Bachtiar yang juga menjadi pembicara di webinar ini
          mengingatkan bahwa dari aspek alamiah, IKN menghadapi tantangan dalam
          hal ketersediaan air dan potensi longsor.
        </p>

        <p>
          "Minim (akuifer air tanah). Kalau boleh dikatakan, nggak ada sumber
          air baku, apalagi di KIPP-nya. Itu lempung sampai 100-2000 meter,
          pasir ada paling 2, 3 meter," ujar Andang.
        </p>

        <p>
          Terkait ancaman longsor, Andang menjelaskan bahwa penyebabnya adalah
          IKN berada di wilayah yang didominasi oleh struktur patahan naik. 
        </p>

        <p>
          “Ini patahan naik dan endapannya laut dalam. Secara geologi, kalau
          kita punya endapan laut dalam dan ada di permukaan bumi, dia pasti
          diangkat dan ditomahkan, istilahnya." katanya.
        </p>

        <p>
          Selain longsor, ada pula ancaman bahaya lain, di antaranya gunung
          lumpur dan kandungan gas dangkal di tanah, juga kebakaran hutan dan
          batubara, serta tsunami bawah laut Selat Makassar. Andang mengingatkan
          bahwa hal tersebut perlu diperhatikan karena akan berpengaruh terhadap
          biaya dan mitigasi bencana.
        </p>

        <p>
          Bukan cuma dari alam, tantangan IKN juga datang dari manusia itu
          sendiri. Ini disampaikan oleh Dosen SAPPK ITB Saut Aritua Hasiholan
          Sagala yang mengemukakan bahwa tantangan yang dimaksud adalah soal
          bagaimana warga IKN berperilaku.
        </p>

        <p>
          Saut memberi contoh terkait perilaku masyarakat yang perlu
          diperhatikan, yakni cara warga mengolah sampahnya. Ini penting agar
          bagaimana warga IKN bisa berperilaku selaras dengan visi dan misi
          kotanya. Dalam konteks pengelolaan sampah, maka ini berkaitan dengan
          circular economy yang ingin diterapkan di IKN.
        </p>

        <p>
          "Di IKN, tadi disebutkan impiannya adalah menjadi kota yang secara
          pengelolaan persampahan, circular economy, ini sebetulnya tidak hanya
          aspek struktur atau infrastruktur, tetapi aspek behavior-nya juga.
          Jadi artinya, perlu ada perhatian tentang bagaimana masyarakatnya bisa
          lebih siap untuk betul-betul menjadi contoh global citizen," terang
          Saut.
        </p>
      </Paragraph>
    </section>
  );
}
