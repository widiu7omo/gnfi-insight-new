"use client";
import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";


export function CustomImageA() {
  return (<div className="relative overflow-clip font-sora bg-[#ffffff] py-20">
    <div className="max-w-4xl mx-auto w-full relative">
      <div className="max-w-[50%] w-full space-y-5 py-20 ">
        <h1 className="text-6xl font-bold leading-snug text-[#ad1618]">Menanti Kereta Cepat Merah Putih</h1>
        <p className="text-lg !leading-loose">
          Kereta Cepat Merah Putih (KCMP) digadang-gadang sebagai teknologi karya anak bangsa yang bakal digunakan dalam proyek kereta cepat Jakarta-Surabaya
        </p>
      </div>
      <div className="absolute top-0 right-0 z-20">
        <img src={baseUrl + '/assets/1.2.png'} alt="Jakarta" className="-ml-[40%]" />
        <img src={baseUrl + '/assets/1.1.png'} alt="Surabaya" className="-mt-[40%]" />
      </div>
      <div className="relative ">
        <img src={baseUrl + '/assets/1.0.png'} alt="Trains" />
        <div className="max-w-2xl mx-auto absolute bottom-[5%] w-full left-0 right-0">
          <div className="bg-white rounded-[2rem] shadow-2xl p-8 z-10 relative">
            <div className="text-[#ad1618] font-bold text-2xl text-center mb-[6rem]">Riset KCMP membutuhkan:</div>
            <div className="flex items-center justify-center text-white space-x-4 ">
              <div className="rounded-2xl bg-[#ad1618] p-4 flex flex-col items-center justify-end h-[90px] flex-1 relative">
                <img src={baseUrl + '/assets/1.7.png'} alt="Clock" className="mr-auto mb-4" />
                <div className="text-2xl font-bold">3 Tahun</div>
              </div>
              <div className="rounded-2xl bg-[#ad1618] p-4 flex flex-col items-center justify-end h-[90px] flex-1">
                <img src={baseUrl + '/assets/1.6.png'} alt="Clock" className="mr-auto" />
                <div className="text-2xl font-bold">19 tim</div>
                <p className="text-sm text-center">perguruan tinggi</p>
              </div>
              <div className="rounded-2xl bg-[#ad1618] p-4 flex flex-col items-center justify-end h-[90px] flex-1">
                <img src={baseUrl + '/assets/1.5.png'} alt="Clock" className="mr-auto" />
                <div className="text-2xl font-bold">Rp 19 miliar</div>
                <p className="text-sm text-center">dari LPDP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative -mt-[25%]">
        <img src={baseUrl + '/assets/1.3.png'} alt="Background" className="rounded-b-2xl" />
        <img src={baseUrl + '/assets/1.4.png'} alt="Roadmap" className="absolute top-[30%] left-0 right-0" />
        <div className="absolute left-8 top-[32%] text-2xl font-semibold text-white">
          Roadmap <br />
          KCMP:
        </div>
        <div className="absolute left-12 top-[57%] bg-white rounded-xl shadow-xl shadow-black/30 rounded-tr-none py-2 px-4">
          <div className="text-sm">Perancangan dan <br />desain awal</div>
        </div>
        <div className="absolute left-[50%] top-[45%] bg-white p-4 rounded-xl shadow-xl shadow-black/30 rounded-bl-none py-2 px-4">
          <div className="text-sm">Validasi teknis dan <br /> audit standar</div>
        </div>
        <div className="absolute left-12 top-[90%] bg-white p-4 rounded-xl shadow-xl shadow-black/30 rounded-tr-none py-2 px-4">
          <div className="text-sm text-right">Produksi komponen <br /> dan prototipe uji</div>
        </div>
        <div className="absolute right-[25%] top-[82%] bg-white p-4 rounded-xl shadow-xl shadow-black/30 rounded-tl-none py-2 px-4">
          <div className="text-sm">Uji fungsi <br />dan integrasi <br />sistem</div>
        </div>
      </div>
    </div>
    <div
      className="absolute bottom-0 pt-10 z-50 left-0 right-0 mx-auto max-w-4xl"
    >
      <img
        src={`${baseUrl}/assets/footer.png`}
        className="z-50 mx-auto hidden w-full sm:block [filter:brightness(0)_saturate(100%)_invert(15%)_sepia(89%)_saturate(6127%)_hue-rotate(357deg)_brightness(86%)_contrast(112%)]"
      />
    </div>
  </div>
  );
}
