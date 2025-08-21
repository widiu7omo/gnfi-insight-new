"use client";
import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";


export function CustomImageA() {
  return (<div className="relative overflow-clip font-sora bg-[#ffffff] py-10 md:py-20">
    <div className="max-w-4xl mx-auto w-full relative px-4 md:px-0">
      <div className="max-w-full md:max-w-[50%] w-full space-y-3 md:space-y-5 py-10 md:py-20 relative z-30">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight md:leading-snug text-[#ad1618]">Menanti Kereta Cepat Merah Putih</h1>
        <p className="text-sm md:text-lg !leading-relaxed md:!leading-loose">
          Kereta Cepat Merah Putih (KCMP) digadang-gadang sebagai teknologi karya anak bangsa yang bakal digunakan dalam proyek kereta cepat Jakarta-Surabaya
        </p>
      </div>
      <div className="absolute top-0 right-0 z-20 hidden md:block">
        <img src={baseUrl + '/assets/1.2.png'} alt="Jakarta" className="-ml-[40%] w-auto max-w-none" />
        <img src={baseUrl + '/assets/1.1.png'} alt="Surabaya" className="-mt-[40%] w-auto max-w-none" />
      </div>
      <div className="relative">
        <img src={baseUrl + '/assets/1.0.png'} alt="Trains" className="w-full h-auto" />
        <div className="max-w-2xl mx-auto absolute bottom-[2%] md:bottom-[5%] w-full left-0 right-0 px-4">
          <div className="bg-white rounded-xl md:rounded-[2rem] shadow-2xl p-4 md:p-8 z-10 relative">
            <div className="text-[#ad1618] font-bold text-lg md:text-2xl text-center mb-4 md:mb-[6rem]">Riset KCMP membutuhkan:</div>
            <div className="flex flex-col md:flex-row items-center justify-center text-white space-y-2 md:space-y-0 md:space-x-4">
              <div className="rounded-xl md:rounded-2xl bg-[#ad1618] p-3 md:p-4 flex flex-row md:flex-col items-center justify-between md:justify-end h-auto md:h-[90px] w-full md:flex-1 relative">
                <img src={baseUrl + '/assets/1.7.png'} alt="Clock" className="w-6 h-6 md:w-auto md:h-auto md:mr-auto md:mb-4" />
                <div className="text-lg md:text-2xl font-bold">3 Tahun</div>
              </div>
              <div className="rounded-xl md:rounded-2xl bg-[#ad1618] p-3 md:p-4 flex flex-row md:flex-col items-center justify-between md:justify-end h-auto md:h-[90px] w-full md:flex-1">
                <img src={baseUrl + '/assets/1.6.png'} alt="Clock" className="w-6 h-6 md:w-auto md:h-auto md:mr-auto" />
                <div className="text-right md:text-center">
                  <div className="text-lg md:text-2xl font-bold">19 tim</div>
                  <p className="text-xs md:text-sm">perguruan tinggi</p>
                </div>
              </div>
              <div className="rounded-xl md:rounded-2xl bg-[#ad1618] p-3 md:p-4 flex flex-row md:flex-col items-center justify-between md:justify-end h-auto md:h-[90px] w-full md:flex-1">
                <img src={baseUrl + '/assets/1.5.png'} alt="Clock" className="w-6 h-6 md:w-auto md:h-auto md:mr-auto" />
                <div className="text-right md:text-center">
                  <div className="text-lg md:text-2xl font-bold">Rp 19 miliar</div>
                  <p className="text-xs md:text-sm">dari LPDP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative -mt-[15%] md:-mt-[25%]">
        <img src={baseUrl + '/assets/1.3.png'} alt="Background" className="rounded-b-xl md:rounded-b-2xl w-full h-auto" />
        <img src={baseUrl + '/assets/1.4.png'} alt="Roadmap" className="absolute top-[25%] md:top-[30%] left-0 right-0 w-full h-auto" />
        <div className="absolute left-4 md:left-8 top-[27%] md:top-[32%] text-lg md:text-2xl font-semibold text-white">
          Roadmap <br />
          KCMP:
        </div>
        <div className="absolute left-4 md:left-12 top-[50%] md:top-[57%] bg-white rounded-lg md:rounded-xl shadow-xl shadow-black/30 rounded-tr-none py-1 md:py-2 px-2 md:px-4 max-w-[40%] md:max-w-none">
          <div className="text-xs md:text-sm">Perancangan dan <br />desain awal</div>
        </div>
        <div className="absolute left-[45%] md:left-[50%] top-[40%] md:top-[45%] bg-white p-2 md:p-4 rounded-lg md:rounded-xl shadow-xl shadow-black/30 rounded-bl-none py-1 md:py-2 px-2 md:px-4 max-w-[40%] md:max-w-none">
          <div className="text-xs md:text-sm">Validasi teknis dan <br /> audit standar</div>
        </div>
        <div className="absolute left-4 md:left-12 top-[80%] md:top-[90%] bg-white p-2 md:p-4 rounded-lg md:rounded-xl shadow-xl shadow-black/30 rounded-tr-none py-1 md:py-2 px-2 md:px-4 max-w-[40%] md:max-w-none">
          <div className="text-xs md:text-sm text-right">Produksi komponen <br /> dan prototipe uji</div>
        </div>
        <div className="absolute right-[15%] md:right-[25%] top-[72%] md:top-[82%] bg-white p-2 md:p-4 rounded-lg md:rounded-xl shadow-xl shadow-black/30 rounded-tl-none py-1 md:py-2 px-2 md:px-4 max-w-[40%] md:max-w-none">
          <div className="text-xs md:text-sm">Uji fungsi <br />dan integrasi <br />sistem</div>
        </div>
      </div>
    </div>
    <div
      className="absolute bottom-0 pt-5 md:pt-10 z-50 left-0 right-0 mx-auto max-w-4xl px-4 md:px-0"
    >
      <img
        src={`${baseUrl}/assets/footer.png`}
        className="z-50 mx-auto hidden w-full sm:block [filter:brightness(0)_saturate(100%)_invert(15%)_sepia(89%)_saturate(6127%)_hue-rotate(357deg)_brightness(86%)_contrast(112%)]"
      />
    </div>
  </div>
  );
}
