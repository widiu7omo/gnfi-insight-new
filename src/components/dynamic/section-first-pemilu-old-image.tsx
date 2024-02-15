"use client";
import { Signika } from "next/font/google";
import { motion } from "framer-motion";
const signikaFont = Signika({ weight: "400" });
export default function SectionFirstPemiluOldImage() {
  return (
    <div
      className="h-fit relative w-full mx-auto py-8 flex items-center justify-center flex-col shadow-[inset_0px_-2px_4.8px_2px_rgba(0,0,0,0.1),_inset_0px_4px_4px_rgba(0,0,0,0.1)]"
      style={{
        background:
          "url('pemilu-dan-dinamikanya-dari-masa-ke-masa/assets/canvas-first-pemilu.png')",
      }}
    >
      <div className="space-y-8">
        <motion.img
          initial={{ rotate: 3, scale: 1.2 }}
          whileInView={{ rotate: 0, scale: 1 }}
          transition={{ delay: 0.3 }}
          src="pemilu-dan-dinamikanya-dari-masa-ke-masa/assets/kulonprogokab.go.id.jpg"
          className="h-full border-8 border-white shadow-2xl"
          alt="kulon progo"
        />
        <div
          className="prose mx-auto !text-neutral-700 text-xl w-[60ch]"
          style={{ ...signikaFont.style }}
        >
          <p>
            Sejak awal kemerdekaan, penyelenggaraan pemilihan umum telah menjadi
            salah satu program utama yang diusung oleh para pendiri negara.
            Meskipun rencana dari Maklumat X menyatakan bahwa pemilihan umum
            diadakan pada Januari 1946, namun pelaksanaannya terhambat beberapa
            tahun karena agresi militer Belanda. Di samping itu, ketidaksiapan
            perangkat perundang-undangan dan infrastruktur menjadi faktor yang
            juga mengakibatkan pelaksanaan pemilu terpaksa ditunda.
          </p>
          <p>
            Pemilihan umum tahun 1955 diselenggarakan sebagai bagian dari
            langkah demokratisasi pascakemerdekaan Indonesia. Tujuan pemerintah
            pada masa itu adalah untuk mengukuhkan sistem demokrasi parlementer
            dan memberikan hak kepada warga negara untuk ikut serta dalam
            memilih perwakilan mereka dalam proses politik.
          </p>
          <p>
            Hal ini menjadi langkah signifikan dalam pembentukan pemerintahan
            yang lebih representatif dan mendirikan dasar demokrasi di
            Indonesia, dengan UU No. 7 Tahun 1953 sebagai dasar hukum
            pelaksanaannya. Secara konseptual, pelaksanaannya memang memiliki
            perbedaan dengan Maklumat X.
          </p>
          <p>
            Pada Pemilu 1955, persaingannya memperebutkan 260 kursi DPR, 520
            kursi Konstituante, dan 14 wakil golongan minoritas yang ditunjuk
            oleh pemerintah. Dalam pemilihan anggota DPR, 36 parpol, 34 ormas,
            dan 48 peserta independen terlibat. Sementara pemilihan anggota
            Konstituante diikuti oleh 39 parpol, 23 ormas, dan 29 peserta
            independen. Pemilu ini sering dianggap sebagai yang paling
            demokratis dalam sejarah Indonesia. Partisipasinya mencakup berbagai
            parpol dengan berbagai orientasi.
          </p>
          <p>
            Proses menuju penyelenggaraan Pemilu 1955 melibatkan tiga masa
            kabinet yang berbeda. Kabinet Wilopo bertanggung jawab atas
            persiapan, sementara pelaksanaannya dilakukan oleh Kabinet Ali
            Sastroamidjojo dan Kabinet Burhanuddin Harahap.
          </p>
        </div>
      </div>
    </div>
  );
}
