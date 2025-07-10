"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageA() {
  return (<div className="relative overflow-clip">
    <div className="rounded-l-[20rem] h-[50rem] w-[50vw] absolute top-0 right-[-0%] bottom-0 bg-gradient-to-br to-[80%] from-yellow-500 to-red-500"></div>
    <div className="rounded-l-[20rem] h-[50rem] w-[70vw] absolute top-[40%] blur-2xl right-[-10%] bottom-0 bg-gradient-to-br from-red-500 to-pink-500"></div>
    <motion.div className="noise2 backdrop-blur-2xl relative py-20">
      <div className="max-w-4xl mx-auto font-sora">
        <div className="flex gap-2 flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1 space-y-2">
            <div className="text-[#0149a5] text-7xl font-bold">PP Tunas</div>
            <div className="bg-[#2d8ee1] p-1 text-white font-bold text-4xl w-fit">Apa itu?</div>
            <div className="text-2xl text-neutral-700 pb-2 pt-4">Jumat, 28 Maret 2025</div>
            <div className="text-2xl font-medium">Pemerintah meluncurkan Peraturan Pemerintah (PP) Nomor 17 Tahun 2025 tentang Tata Kelola Penyelenggaraan Sistem Elektronik dalam Perlindungan Anak
              (PP Tunas)</div>
          </div>
          <div className="flex-1 w-full h-full">
            <img className="object-cover" src={baseUrl + '/assets/1.1.png'} alt="Prabowo" />
          </div>
        </div>
        <div className="relative w-full overflow-hidden p-10">
          <div className="absolute left-11 top-11 bottom-11 right-11 bg-gradient-to-r from-blue-800 to-blue-600 transform -skew-y-1 scale-110"></div>
          <div className="absolute left-12 top-12 bottom-12 right-12 bg-gradient-to-r from-blue-600 to-blue-400 transform skew-y-1 scale-110"></div>
          <div className="relative text-3xl text-center text-white py-6 px-4 font-bold">
            Bertujuan melindungi anak-anak dari ancaman <br />
            dan risiko bahaya di ruang digital
          </div>
        </div>
        <div className="space-y-8">
          <div className="text-center text-4xl font-bold pt-12">Hal-hal utama dalam PP Tunas:</div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1">
              <div className="bg-white rounded-2xl shadow-lg px-12 py-8">
                <ul className="list-disc text-xl font-medium space-y-2">
                  <li>Klasifikasi tingkat risiko platform digital</li>
                  <li>Pembatasan akses terhadap konten dan platform digital berdasarkan usia</li>
                  <li>Kewajiban platform digital untuk memverifikasi pengguna dan mengedukasi anak serta orang tua untuk berinternet secara aman</li>
                </ul>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white rounded-2xl shadow-lg px-12 py-8">
                <ul className="list-disc text-xl font-medium space-y-2">
                  <li>Pelibatan orang tua dalam memberi persetujuan terhadap penggunaan platform digital oleh anak</li>
                  <li>Larangan profiling anak untuk tujuan komersial</li>
                  <li>Sanksi bagi platform digital yang melanggar, mulai dari teguran hingga denda</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
  );
}
