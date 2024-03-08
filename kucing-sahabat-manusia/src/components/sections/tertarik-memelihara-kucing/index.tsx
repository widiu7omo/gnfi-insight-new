import Paragraph from "@/components/reusable/paragraph";
import GoodFood from "./good-food";
import Clean from "./clean";

export default function SectionSeven() {
  return (
    <section id="section-7">
      <div className="relative bg-[#FFF7F7]">
        <div className="absolute top-0 bottom-0 right-0 left-0 z-0 bg-gradient-to-b from-[#EDC3B7] to-[#6D9AF5]/50 h-screen" />
        <h2 className="text-6xl max-w-4xl mx-auto text-center font-bold leading-snug relative top-[5rem] h-screen">
          Tertarik Memelihara Kucing? Perhatikan Hal Ini!
        </h2>
        <div className="bg-[#FFF7F7] relative top-[10rem] mb-[10rem]">
          <img
            src="assets/cat-sleep.png"
            alt="Cat Sleep"
            className="top-[-62rem] absolute"
          />
          <Paragraph className="py-8 relative">
            <p>
              Kawan GNFI tertarik memelihara kucing juga? Tentu saja bisa, yang
              penting perlu diperhatikan bahwa jenis kucing yang dipelihara
              statusnya tidak dilindungi atau terancam punah, juga kesehatan
              kucingnya harus selalu diperhatikan?
            </p>

            <p>
              Lantas, apa saja yang perlu dilakukan untuk memastikan kucing
              senantiasa sehat?
            </p>

            <p>
              Pada dasarnya, hal yang harus diperhatikan dalam memelihara kucing
              tak banyak berbeda dengan hewan lain.{" "}
            </p>
            <div className="pl-[15rem] relative">
              <GoodFood />
              <div className="relative">
                <p className="text-3xl font-bold text-[#823600] mb-0">
                  Pertama
                </p>
                <p className="mt-2">
                  Pemilik harus selalu memberi makanan berkualitas baik yang
                  mana saat ini sudah banyak makanan kucing dengan berbagai
                  merek yang tersedia di pasaran. Setiap merek memiliki
                  komposisi dan kandungan yang berbeda-beda, sehingga pemilik
                  perlu tahu betul kebutuhan nutrisi kucingnya agar bisa memilih
                  makanan yang cocok.
                </p>
              </div>
            </div>
            <div className="relative">
              <Clean />
              <div className="relative pr-[15rem]">
                <p className="text-3xl font-bold text-[#823600] mb-0">Kedua</p>
                <p className="mt-2">
                  Pemilik harus memperhatikan kebersihan kucingnya. Apabila
                  dibutuhkan, kucing dapat dimandikan secara berkala. Jika
                  kucing menggunakan bak pasir untuk membuang kotoran, itu pun
                  wajib dibersihkan beberapa kali dalam sehari.
                </p>
              </div>
            </div>
            <div className="relative">
              <div>
                <p className="text-3xl font-bold text-[#823600] mb-0">Ketiga</p>
                <p>
                  adalah vaksin dan steril. Vaksinnya terdiri dari vaksin core
                  (inti) dan vaksin non-core (noninti). Sederhananya, vaksin
                  core adalah vaksin dasar yang wajib diberikan kepada semua
                  kucing, sedangkan vaksin non-core diberikan apabila kucing
                  mengidap penyakit tertentu. Sementara itu, steril dibutuhkan
                  untuk mengontrol populasi serta meminimalisir perilaku kucing
                  yang menganggu, seperti berkelahi dengan kucing lain atau
                  spraying (buang air untuk menandai wilayah kekuasaan).
                </p>
                <p>
                  Vaksin ini penting karena penyakit tidak hanya bisa
                  membahayakan kucing, melainkan juga pemiliknya. Salah satu
                  penyakit tersebut adalah rabies. Kendati rabies lebih banyak
                  menjangkiti anjing, namun kucing pun bisa menularkannya kepada
                  manusia.
                </p>
              </div>
            </div>
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
