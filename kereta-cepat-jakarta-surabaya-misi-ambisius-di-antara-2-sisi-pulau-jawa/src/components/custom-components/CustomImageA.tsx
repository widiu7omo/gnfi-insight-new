"use client";
import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

/**
 * CustomImageA component - Responsive hero section for Jakarta-Surabaya high-speed train article
 * Features responsive design with mobile-first approach and optimized layouts for different screen sizes
 */
export function CustomImageA() {
  return (<div className="relative overflow-clip font-sora bg-[#ffffff] py-6 sm:py-10 md:py-20">
    <div className="max-w-4xl mx-auto w-full relative px-4 sm:px-6 md:px-8 lg:px-0">
      <div className="max-w-full sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] w-full space-y-3 sm:space-y-4 md:space-y-5 py-6 sm:py-10 md:py-20 relative z-30">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight sm:leading-tight md:leading-snug text-[#ad1618]">Menanti Kereta Cepat Merah Putih</h1>
        <p className="text-sm sm:text-base md:text-lg !leading-relaxed md:!leading-loose">
          Kereta Cepat Merah Putih (KCMP) digadang-gadang sebagai teknologi karya anak bangsa yang bakal digunakan dalam proyek kereta cepat Jakarta-Surabaya
        </p>
      </div>
      <div className="absolute top-0 right-0 z-20 hidden lg:block">
        <img src={baseUrl + '/assets/1.2.png'} alt="Jakarta" className="-ml-[40%] w-auto max-w-none" />
        <img src={baseUrl + '/assets/1.1.png'} alt="Surabaya" className="-mt-[40%] w-auto max-w-none" />
      </div>
      <div className="relative">
        <img src={baseUrl + '/assets/1.0.png'} alt="Trains" className="w-full h-auto" />
        <div className="pt-40 xs:pt-32 sm:pt-28 md:pt-0"></div>
        <div className="max-w-2xl mx-auto absolute bottom-[2%] sm:bottom-[3%] md:bottom-[5%] w-full left-0 right-0 px-3 sm:px-4">
          <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-[2rem] shadow-2xl p-3 sm:p-4 md:p-6 lg:p-8 z-10 relative">
            <div className="text-[#ad1618] font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-center mb-4 sm:mb-16 md:mb-[6rem]">Riset KCMP membutuhkan:</div>
            <div className="flex flex-col sm:flex-row items-center justify-center text-white space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-4">
              <div className="rounded-lg sm:rounded-xl md:rounded-2xl bg-[#ad1618] p-2 sm:p-3 md:p-4 flex flex-row sm:flex-col items-center justify-between sm:justify-end h-auto sm:h-[70px] md:h-[90px] w-full sm:flex-1 relative">
                <img src={baseUrl + '/assets/1.7.png'} alt="Clock" className="w-12 h-12 sm:w-20 sm:h-20 md:w-auto md:h-auto sm:mr-auto sm:mb-2 md:mb-4" />
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">3 Tahun</div>
              </div>
              <div className="rounded-lg sm:rounded-xl md:rounded-2xl bg-[#ad1618] p-2 sm:p-3 md:p-4 flex flex-row sm:flex-col items-center justify-between sm:justify-end h-auto sm:h-[70px] md:h-[90px] w-full sm:flex-1">
                <img src={baseUrl + '/assets/1.6.png'} alt="Teams" className="w-12 h-12 sm:w-20 sm:h-20 md:w-auto md:h-auto sm:mr-auto" />
                <div className="text-right sm:text-center">
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">19 tim</div>
                  <p className="text-xs sm:text-xs md:text-sm">perguruan tinggi</p>
                </div>
              </div>
              <div className="rounded-lg sm:rounded-xl md:rounded-2xl bg-[#ad1618] p-2 sm:p-3 md:p-4 flex flex-row sm:flex-col items-center justify-between sm:justify-end h-auto sm:h-[70px] md:h-[90px] w-full sm:flex-1">
                <img src={baseUrl + '/assets/1.5.png'} alt="Budget" className="w-12 h-12 sm:w-20 sm:h-20 md:w-auto md:h-auto sm:mr-auto" />
                <div className="text-right sm:text-center">
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">Rp 19 miliar</div>
                  <p className="text-xs sm:text-xs md:text-sm">dari LPDP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative -mt-[10%] sm:-mt-[15%] md:-mt-[20%] lg:-mt-[25%]">
        <img src={baseUrl + '/assets/1.3.png'} alt="Background" className="rounded-b-lg sm:rounded-b-xl md:rounded-b-2xl w-full h-auto" />
        <img src={baseUrl + '/assets/1.4.png'} alt="Roadmap" className="absolute top-[20%] sm:top-[25%] md:top-[30%] left-0 right-0 w-full h-auto" />
        <div className="absolute left-3 sm:left-4 md:left-6 lg:left-8 top-[15%] sm:top-[19%] md:top-[25%] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-white">
          Roadmap <br /> KCMP:
        </div>
        <div className="absolute left-2 sm:left-3 md:left-6 lg:left-12 top-[45%] sm:top-[50%] md:top-[57%] bg-white rounded-md sm:rounded-lg md:rounded-xl shadow-xl shadow-black/30 rounded-tr-none py-1 sm:py-1 md:py-2 px-1 sm:px-2 md:px-3 lg:px-4 max-w-[45%] sm:max-w-[40%] md:max-w-none">
          <div className="text-[10px] sm:text-xs md:text-sm leading-tight">Perancangan dan <br />desain awal</div>
        </div>
        <div className="absolute left-[48%] sm:left-[45%] md:left-[50%] top-[35%] sm:top-[40%] md:top-[45%] bg-white p-1 sm:p-2 md:p-3 lg:p-4 rounded-md sm:rounded-lg md:rounded-xl shadow-xl shadow-black/30 rounded-bl-none py-1 sm:py-1 md:py-2 px-1 sm:px-2 md:px-3 lg:px-4 max-w-[45%] sm:max-w-[40%] md:max-w-none">
          <div className="text-[10px] sm:text-xs md:text-sm leading-tight">Validasi teknis dan <br /> audit standar</div>
        </div>
        <div className="absolute left-2 sm:left-3 md:left-6 lg:left-12 top-[75%] sm:top-[80%] md:top-[90%] bg-white p-1 sm:p-2 md:p-3 lg:p-4 rounded-md sm:rounded-lg md:rounded-xl shadow-xl shadow-black/30 rounded-tr-none py-1 sm:py-1 md:py-2 px-1 sm:px-2 md:px-3 lg:px-4 max-w-[45%] sm:max-w-[40%] md:max-w-none">
          <div className="text-[10px] sm:text-xs md:text-sm text-right leading-tight">Produksi komponen <br /> dan prototipe uji</div>
        </div>
        <div className="absolute right-[10%] sm:right-[15%] md:right-[20%] lg:right-[25%] top-[67%] sm:top-[72%] md:top-[82%] bg-white p-1 sm:p-2 md:p-3 lg:p-4 rounded-md sm:rounded-lg md:rounded-xl shadow-xl shadow-black/30 rounded-tl-none py-1 sm:py-1 md:py-2 px-1 sm:px-2 md:px-3 lg:px-4 max-w-[45%] sm:max-w-[40%] md:max-w-none">
          <div className="text-[10px] sm:text-xs md:text-sm leading-tight">Uji fungsi <br />dan integrasi <br />sistem</div>
        </div>
      </div>
    </div>
    <div
      className="absolute bottom-0 pt-3 sm:pt-5 md:pt-8 lg:pt-10 z-50 left-0 right-0 mx-auto max-w-4xl px-3 sm:px-4 md:px-6 lg:px-0"
    >
      <img
        src={`${baseUrl}/assets/footer.png`}
        className="z-50 mx-auto hidden w-full sm:block [filter:brightness(0)_saturate(100%)_invert(15%)_sepia(89%)_saturate(6127%)_hue-rotate(357deg)_brightness(86%)_contrast(112%)]"
        alt="Footer decoration"
      />
    </div>
  </div>
  );
}
