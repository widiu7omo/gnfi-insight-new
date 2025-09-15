"use client";

import { baseUrl } from "@/constants/meta";
import { COMPONENT_PARAGRAPH } from "@/data/component-front";
import { Paragraph } from "@/stories/Paragraph";
import { motion } from "framer-motion";
export function CustomImageB() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div
        className="relative w-full justify-center bg-cover bg-bottom pb-12 pt-16 md:pb-[8rem] md:pt-24 xl:pb-24"
        style={{ backgroundImage: `url(${baseUrl}/assets/2.1.1.png)` }}
      >
        <div className="absolute left-0 top-0 h-[30%] w-full bg-gradient-to-b from-[#B52874]" />
        <div className="space-y-14 md:space-y-24">
          <div className="z-1 relative mx-auto max-w-4xl md:px-0 px-4 ">
            <div className="flex w-full flex-col md:flex-row text-center items-stretch  bg-[#FE98D9] lg:rounded-t-3xl lg:rounded-b-3xl rounded-t-3xl rounded-b-none">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full md:w-[45%]"
              >
                <img
                  src={`/assets/2.3.png`}
                  alt="Ragusa"
                  className="rounded-3xl object-cover h-96 w-full md:w-full md:h-full"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="relative w-full md:w-[55%] flex flex-col justify-center text-left text-white px-6 md:px-14 py-8 md:py-12"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-[36px] md:text-[42px] font-black mb-4 text-[#000BFF]"
                >
                  Ragusa
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="mb-4 text-[#2A2A2A] text-lg md:text-xl font-semibold"
                >
                  Terletak di bilangan Gambir, Jakarta Pusat. Kedai es krim Ragusa
                  dikenal sebagai salah satu es krim tertua di Jakarta karena sudah
                  berdiri sejak 1932.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-[#2A2A2A] text-lg md:text-xl font-semibold"
                >
                  Menu andalannya ialah Es Krim Spageti yang pernah masuk dalam jajaran{" "}
                  <span className="text-[#000BFF]">"100 Most Iconic Ice Creams"</span>{" "}
                  TasteAtlas.
                </motion.p>
                <motion.img
                  src={`/assets/2.2.png`}
                  alt="Overlay"
                  initial={{ scale: 0, rotate: -15, opacity: 0 }}
                  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "backOut", delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -top-16 md:-top-24 -right-6 w-40 h-40 md:h-[14rem] md:w-[14rem] object-contain"
                />
              </motion.div>
            </div>
            <div className="bg-[#FE98D9]/70 backdrop-blur-sm rounded-b-3xl lg:mx-20">
              <Paragraph block={{
                component: COMPONENT_PARAGRAPH,
                componentProps: {
                  className: ' ',
                  children: <>
                    <h3>1.  Ragusa</h3>
                    <p>Bukan rahasia lagi kalau ibu kota memiliki segudang peninggalan bersejarah sejak zaman Belanda, salah satunya kedai es krim jadul. Adalah Ragusa, kedai es krim tertua di Jakarta yang sudah berdiri sejak 1932.</p>
                    <p>Dijelaskan dalam artikel Majalah <i>Sketsa</i> 28 berjudul “Ragusa Kedai Es Krim Cita Rasa Tempo Dulu”, Luigie Ragusa dan Vincenco Ragusa, merupakan dua sosok di balik berdirinya toko es krim bercita rasa <i>Batalia</i> (Batavia-Italia) di Jakarta. Mereka datang ke Indonesia di tahun 1930-an. Dua bersaudara berkebangsaan Italia ini awalnya ingin belajar menjahit di daerah Jakarta Pusat.</p>
                    <p>Namun, entah bagaimana, mereka kemudian membuat es krim dengan rasa manis dan tekstur lembut yang sukses membius pecinta es krim di kawasan itu. Sejak saat itu, keduanya banting setir dari penjahit menjadi pembuat es krim.</p>
                    <p>Ragusa membuka kedai es krim pertamanya pada 1932 di Pasar Gambir. Sayangnya, saat itu mereka hanya bertahan satu tahun.</p>
                    <p>Beberapa tahun berselang, tepat pada 1947, <i>duo</i> Ragusa membuka kedai es krim di Jalan Veteran I, Jakarta Pusat. Lokasinya berdekatan dengan Masjid Istiqlal.</p>
                    <p>Ragusa pernah memiliki 20 kedai yang tersebar di seluruh Jakarta pada zamannya. Namun, akibat kerusuhan 1998, banyak kedai yang tutup.</p>
                    <p>Kini, Ragusa menjelma menjadi kedai es krim legendaris di jantung Jakarta. Demi mempertahankan konsistensi rasa, mesin yang dipakai masih sama dengan mesin es krim yang dipakai pertama kali. Jika ada kerusakan, maka akan diperbaiki sendiri karena <i>spare part</i>-nya sudah tidak dijual.</p>
                    <p>Ragusa juga mendapatkan penghargaan dari Museum Rekor Dunia Indonesia (MURI) sebagai toko es krim tertua yang masih buka hingga sekarang.</p>
                  </>
                }
              }} />
            </div>
          </div>

          <div className="z-1 relative mx-auto max-w-4xl md:px-12 px-4">
            <div className="flex w-full flex-col md:flex-row-reverse text-center items-stretch">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full md:w-[45%]"
              >
                <img
                  src={`/assets/2.4.png`}
                  alt="Zangrandi"
                  className="h-96 w-full rounded-tr-3xl rounded-tl-3xl md:rounded-tl-none md:rounded-br-3xl object-cover md:rounded-tl-none md:rounded-bl-none md:w-full md:h-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="relative w-full md:w-[55%] flex flex-col justify-center text-left text-white bg-[#FE98D9] rounded-tr-none md:rounded-br-none rounded-br-3xl md:rounded-tl-3xl rounded-bl-3xl px-6 md:px-14 py-8 md:py-12"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-[36px] md:text-[42px] font-black mb-4 text-[#000BFF]"
                >
                  Zangrandi
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="mb-4 text-[#2A2A2A] text-lg md:text-xl font-semibold"
                >
                  Kedai es krim Zangrandi terletak di Surabaya dan telah eksis sejak
                  1930. Sudah berusia lebih dari satu abad, Zangrandi tetap
                  mempertahankan rasa otentik es krimnya.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-[#2A2A2A] text-lg md:text-xl font-semibold"
                >
                  Avocadocano menjadi salah satu menu andalan di kedai es krim
                  kebanggan kota pahlawan tersebut.
                </motion.p>
                <motion.img
                  src={`/assets/2.8.png`}
                  alt="Overlay"
                  initial={{ scale: 0, rotate: 10, opacity: 0 }}
                  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "backOut", delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -top-16 md:-top-24 -right-12 w-40 h-40 md:h-[14rem] md:w-[14rem] object-contain"
                />
              </motion.div>
            </div>
            <Paragraph block={{
              component: COMPONENT_PARAGRAPH,
              componentProps: {
                children: <>
                  <h3>2. Zangrandi</h3>
                  <p>Di Kota Pahlawan juga ada kedai es krim jadul yang sudah berdiri sejak 1930. Kedai itu bernama Retano Zangrandi Ijspaleis—lumrah disebut Zangrandi.</p>
                  <p>Kedai es krim satu ini berdiri pertama kali di Jalan Tunjungan 55 dengan nama Ijspaleisje Tutti Frutti. Saat ini, Zangrandi masih berdiri menyapa masyarakat Surabaya di Jalan Yos Sudarso No.15.</p>
                  <p>Awal mula berdirinya gerai es krim ini tak lepas dari keluarga asal Italia, Roberto Zangrandi. Berkat tangan lihai sang istri, terciptalah resep es krim lezat yang digemari masyarakat.</p>
                  <p>Akan tetapi, keluarga Zangrandi kembali ke Italia pada tahun 1960. Lalu, kedainya dibeli oleh Aditanumulia, sahabat Zangrandi. Sejak saat itu, namanya berganti menjadi Graha Es Krim Zangrandi.</p>
                  <p>Meskipun sudah berdiri selama hampir satu abad, Zangrandi tetap mempertahankan resep asli. Tak hanya itu, Dinas Kebudayaan, Kepemudaan, Olahraga, dan Pariwisata (Disbudporapar) Kota Surabaya menyebutkan, saat ini Kedai Zangrandi merupakan cagar budaya Kota Surabaya yang sudah ditetapkan sejak 2009 lalu.</p>
                  <p>Saking legendarisnya, Zangrandi dan Ragusa beberapa kali masuk ke dalam daftar <i>100 Most Iconic Ice Creams in the World</i> versi TasteAtlas. Dua kedai jadul ini bersanding dengan puluhan kedai es krim terkemuka di seluruh dunia.</p>
                </>
              }
            }} />
          </div>
          <div className="z-1 relative mx-auto max-w-4xl md:px-12 px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex w-full flex-col md:flex-row text-center items-stretch"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full md:w-[45%]"
              >
                <img
                  src={`${baseUrl}/assets/2.5.png`}
                  alt="Baltic"
                  className="h-96 w-full rounded-3xl
                     md:w-full md:h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="relative w-full md:w-[55%] flex flex-col justify-center text-left text-white 
                   rounded-3xl 
                   md:rounded-tl-none md:rounded-bl-none 
                   md:rounded-r-3xl 
                   px-6 md:px-14 py-4"
              >
                <p className="text-[36px] md:text-[42px] font-black mb-4 text-[#000BFF]">Baltic</p>
                <p className="mb-4 text-[#2A2A2A] text-lg md:text-xl font-semibold">
                  Tidak jauh dari Ragusa, ada kedai es krim Baltic di Jakarta tepatnya dekat Simpang Senen, Kwitang. <br />
                  Es krim bikinan Baltic menyesuaikan zaman karena banyak varian rasa favorit gen Z seperti <i>green tea</i> dan <i>peppermint tea</i>.
                </p>
                <p className="text-[#2A2A2A] text-lg md:text-xl font-semibold">
                  Menariknya, Baltic juga mendistribusikan es krimnya di Depok, Tangerang, Bekasi, hingga sebagian wilayah Bogor.
                </p>
              </motion.div>
            </motion.div>
            <Paragraph block={{
              component: COMPONENT_PARAGRAPH,
              componentProps: {
                children: <>
                  <h3>3. Baltic</h3>
                  <p>Baltic didirikan oleh Mulya Santosa pada 1939, beberapa tahun setelah Ragusa berdiri. Sebelumnya, kedai ini bernama Aric.</p>
                  <p>Uniknya, nama ‘Baltic’ sengaja diambil seperti nama di kawasan di utara Eropa yang dingin. Pemberian nama ini memang dibuat agar memberi kesan dingin.</p>
                  <p>Kedai sekaligus pabrik es krim Baltic berada di Jalan Kramat Raya No.12, Jakarta Pusat. Baltic tidak hanya menjual es krim yang ‘umum’, melainkan mengemasnya dengan berbagai bentuk atau desain lucu.</p>
                  <p>Salah satunya yang dijual adalah tart es krim yang sempurna untuk merayakan ulang tahun. Toko ini juga menjual es krim dengan berbagai rasa, mulai dari cokelat, vanilla, sampai rasa-rasa favorit GenZ, seperti green tea dan peppermint tea.</p>
                  <p>Hingga kini, es krim Baltic hanya dibuat dengan bahan alami, tanpa <i>essence</i>. Menariknya, Baltic tidak hanya dijual di area Jakarta saja, tetapi juga di Depok, Tangerang, Bekasi, hingga sebagian wilayah Bogor.</p>
                </>
              }
            }} />
          </div>
          <div className="z-1 relative mx-auto max-w-4xl md:px-12 px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex w-full flex-col md:flex-row-reverse text-center items-stretch"
            >
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full md:w-[45%]"
              >
                <img
                  src={`${baseUrl}/assets/2.6.png`}
                  alt="Tjanang"
                  className="h-96 w-full rounded-3xl md:w-full md:h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="relative w-full md:w-[55%] flex flex-col justify-center text-left text-white 
                   rounded-tr-none md:rounded-br-none 
                   rounded-br-3xl md:rounded-tl-3xl 
                   rounded-bl-3xl px-6 md:px-14 py-4"
              >
                <p className="text-[36px] md:text-[42px] font-black mb-4 text-[#000BFF]">Tjanang</p>
                <p className="mb-4 text-[#2A2A2A] text-lg md:text-xl font-semibold">
                  Gerai es krim Tjanang berdiri sejak 1950-an di Jakarta. Dulu, Tjanang menjadi salah satu lokasi langganan Presiden Sukarno untuk menikmati hidangan ringan.
                </p>
                <p className="text-[#2A2A2A] text-lg md:text-xl font-semibold">
                  Es krim Tjanang pernah tersaji di meja tamu-tamu negara karena pemerintah pernah memesannya untuk hajatan istimewa, salah satunya GANEFO 1963.
                </p>
              </motion.div>
            </motion.div>
            <Paragraph block={{
              component: COMPONENT_PARAGRAPH,
              componentProps: {
                children: <>
                  <h3>4. Tjanang</h3>
                  <p>Gerai es krim legendaris selanjutnya adalah Tjanang yang berdiri sejak 1950-an. Terletak di Jakarta, Dulunya, kedai ini bernama Tjan Njan. Namanya diubah karena aturan pemerintah Indonesia yang sempat melarang penggunaan nama yang berbau Tionghoa.</p>
                  <p>Seperti halnya kedai es krim jadul lainnya, Tjanang tetap mempertahankan cita rasa tempo dulunya. Es krim ini memiliki ciri khas tekstur sorbet.</p>
                  <p>Dulu, Tjanang menjadi salah satu lokasi langganan Presiden Sukarno untuk menikmati hidangan ringan. Bahkan, kedai ini juga menerima pesanan istimewa untuk sajian kenegaraan, salah satunya di ajang Ganefo 1963.</p>
                  <p>Bersama dengan Ragusa dan Baltic, Tjanang merupakan salah satu kedai es krim tua yang masih ada hingga sekarang di Jakarta. Tjanang berada di dalam <i>lobby</i> Hotel Cikini.</p>
                </>
              }
            }} />
          </div>
        </div>
      </div>

      <div className="bg-[#0013FF] w-full pt-20 pb-6 md:py-24 relative">
        <div className="z-1 relative mx-auto max-w-4xl md:px-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex w-full flex-col md:flex-row text-center items-stretch"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full md:w-[45%]"
            >
              <img
                src={`${baseUrl}/assets/2.7.png`}
                alt="Oen"
                className="h-96 w-full rounded-3xl md:w-full md:h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-full md:w-[55%] flex flex-col justify-center text-left text-white 
                   rounded-tr-none md:rounded-br-none 
                   rounded-br-3xl md:rounded-tl-3xl 
                   rounded-bl-3xl px-6 md:px-14 py-4"
            >
              <p className="text-[36px] md:text-[42px] font-black mb-4 text-[#00FF3C]">Oen</p>
              <p className="mb-4 text-white text-lg md:text-xl font-semibold">
                Toko Oen adalah restoran keluarga terkemuka di zamannya yang menyajikan hidangan khas Eropa dan Indonesia. Tempat <i>legend</i> ini didirikan oleh Liem Gien Nio-Oma Oen. Oen memiliki empat cabang, yakni Semarang, Malang, Jakarta, dan Surabaya. Namun, yang masih bertahan hingga saat ini adalah Semarang dan Malang. Selain kue-kuean, mereka juga menyajikan es krim sundae yang khas.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <Paragraph block={{
          component: COMPONENT_PARAGRAPH,
          componentProps: {
            className: 'text-white',
            children: <>
              <h3 className="!text-white">5. Oen</h3>
              <p>Toko Oen merupakan restoran keluarga terkemuka di zamannya yang menyajikan hidangan khas Eropa dan Indonesia. Tempat <i>legend</i> ini didirikan oleh Liem Gien Nio—Oma Oen.</p>
              <p>Lokasi toko pertamanya ada di Yogyakarta. Oma Oen awalnya hanya membuat kue-kuean di tahun 1910. Kemudian, pada 1922, bisnis ini meluas dan mulai memproduksi es krim.</p>
              <p>Oen memiliki empat cabang, yakni Semarang, Malang, Jakarta, dan Surabaya. Namun, yang masih bertahan hingga saat ini adalah Semarang dan Malang.</p>
              <p>Kawan, gerai di Semarang merupakan gerai pindahan dari Yogyakarta. Pemindahan ini dilakukan pada 1936 dan masih eksis sampai sekarang.</p>
              <p>Namun, ada cerita yang cukup rumit terkait Toko Oen di Malang. Bangunannya sempat mengalami masalah perizinan dan merek toko. Sejak 1990, aset bangunan Oen di Malang sudah dijual dan berpindah tangan.</p>
              <p>Kedua bangunan Oen juga merupakan cagar budaya yang dilindungi. Artinya, nama dan bentuk asli tidak dapat diubah sesuai dengan aturan yang ada.</p>
            </>
          }
        }} />
      </div>

      <div className="absolute bottom-0 z-50 mx-auto max-w-4xl">
        <img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
        />
      </div>
    </div>
  );
}
