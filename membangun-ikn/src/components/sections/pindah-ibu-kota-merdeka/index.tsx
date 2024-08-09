'use client'
import { motion } from 'framer-motion'
import { Libre_Baskerville } from 'next/font/google'
import Ornament1 from './ornament1'
import Paragraph from '@/components/reusable/paragraph'
import Ornament2 from './ornament2'
import Ornament3 from './ornament3'
import Quote from './quote'
import Ornament5 from './ornament5'
import Ornament6 from './ornament6'
import { baseUrl } from '@/constants/meta'
export const vollkornFont = Libre_Baskerville({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
})
export default function SectionTwo() {
  return (
    <section
      id="section-2"
      className="bg-gradient-to-b from-[#312C18] to-[#B4B0AD]"
    >
      <div className="space-y-8 py-16 xl:py-36">
        <motion.h2
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`relative mx-auto max-w-2xl text-center text-2xl font-bold leading-snug text-white lg:text-3xl xl:text-5xl ${vollkornFont.className}`}
        >
          <span className="relative z-50">
            Pindah Ibu Kota sejak Baru Merdeka
          </span>
          <Ornament1 />
        </motion.h2>
        <div className="relative mx-auto px-4  xl:max-w-7xl xl:px-0">
          <motion.img
            viewport={{ once: true }}
            initial={{ rotate: 0, y: 20 }}
            whileInView={{ rotate: 2, opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            src={`${baseUrl}/assets/e42f5d290b3f0cf65ba5d712a3a4ae41.jpeg`}
            alt="Dokumentasi Soekarno"
            className="relative z-10 mx-auto origin-top-left rotate-2 border-4 border-white object-cover shadow"
          />
          <Ornament2 />
          <Ornament3 />
        </div>
        <Paragraph
          className={`pt-9 text-white ${vollkornFont.className} relative font-[400]`}
        >
          <p>
            Memindahkan ibu kota memang bukan wacana baru. Ide tersebut sudah
            muncul sejak Indonesia baru merdeka, bahkan pernah terwujud meski
            hanya sementara dan bersifat darurat. Hal yang melatarbelakangi
            pemindahan ibu kota ini adalah kondisi di dalam negeri yang tidak
            stabil.
          </p>
          <p>
            Pada tahun 1945, tentara NICA (Netherlands Indies Civil
            Administration atau Pemerintahan Sipil Hindia Belanda) kembali
            menduduki Jakarta. Kondisi tersebut yang membuat ibu kota menjadi
            tidak kondusif. Sehingga, pada 1 Januari 1946, Soekarno menggelar
            rapat terbatas di Pegangsaan Timur No.56 untuk membahas
            keberlangsungan pemerintahan pusat. Bila presiden, wakil presiden,
            serta menteri-menterinya tidak dipindahkan ke tempat yang lebih
            aman, maka ancamannya adalah kedaulatan Indonesia.
          </p>
          <p>
            Dalam rapat terbatas, Sultan Hamengkubuwono IX mengusulkan
            Yogyakarta sebagai pilihan untuk ibu kota sementara. Setelah
            perundingan berjalan, Presiden Sukarno pun menyetujui bila pusat
            pemerintahan akan dipindahkan pada 3 Januari 1946. Mengutip dari
            buku Bung Karno Penyambung Lidah Rakyat, Sukarno berkata seperti
            berikut:
          </p>
          <Ornament5 />
        </Paragraph>
        <Quote />
        <Paragraph
          className={`text-white ${vollkornFont.className} relative font-[400]`}
        >
          <p>
            Pemindahan rombongan pemerintah pusat dilakukan menggunakan Kereta
            Luar Biasa (KLB) dengan berlangsung menegangkan. Sebab, mereka
            memasuki KLB secara diam-diam agar tidak ketahuan oleh NICA. Bahkan,
            lampu gerbong pun dimatikan dan mereka berusaha untuk tidak bicara
            serta harus mengatur napas.
          </p>
          <p>
            Rencana tersebut berhasil dan mereka tiba di Yogyakarta saat dini
            hari pada 4 Januari 1946. Setelahnya, aktivitas pemerintahan
            berlangsung di Gedung Agung Yogyakarta. Segala biaya operasional
            pemerintahan ditanggung oleh Kraton Yogyakarta dengan bantuan
            Kadipaten Pakualaman sampai dengan 27 Desember 1949.
          </p>
          <p>
            Yogyakarta sendiri tidak sepenuhnya aman. Pada tanggal 19 Desember
            1948 pukul 6 pagi, tentara NICA pun melakukan serangan ke Kota
            Yogyakarta dan sekitarnya, termasuk lapangan terbang Maguwo.
            Peristiwa ini kemudian dikenal sebagai Agresi Militer II.
          </p>
          <p>
            Sidang kabinet darurat pun segera dilakukan pada hari itu juga untuk
            menyikapi keadaan genting tersebut. Kabar pun tersiar kepada para
            pemimpin bangsa, bahkan yang berada di luar Pulau Jawa. Hasil rapat
            melahirkan mandat untuk membentuk pemerintahan yang dipimpin oleh
            Syafruddin Prawiranegara di Bukittinggi. Setelah Bung Karno dan
            wakil presiden Mohammad Hatta ditangkap untuk kemudian diasingkan ke
            Brastagi oleh tentara NICA, maka kepemimpinan sudah beralih ke
            Syafruddin.
          </p>
          <p>
            Sebelumnya, Bung Hatta dan Syafruddin sebelumnya sudah pernah
            bertemu di Bukittinggi pada November 1948 untuk membahas kesiapan
            dalam mempertahankan kemerdekaan. Karena kondisi Yogyakarta yang
            darurat, Bung Hatta pun kembali ke sana dan Syafruddin tetap di
            Bukittinggi untuk berjaga-jaga.
          </p>
          <Ornament6 />
        </Paragraph>
      </div>
    </section>
  )
}
