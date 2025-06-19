"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageC() {
  return (
    <div className="relative flex font-sora flex-col items-center overflow-hidden bg-cover bg-no-repeat" style={{ backgroundImage: `url(${baseUrl}/assets/3.1.png)` }}>
      <div className="max-w-4xl mx-auto pt-[20rem] pb-[5rem] z-10">
        <div className="flex flex-col lg:max-w-[80%] py-20">
          <div className="text-6xl font-bold leading-snug">
            Pandemi mendera dunia, boom bike tercipta!
          </div>
          <p className="text-2xl pt-10 lg:max-w-[80%]">
            Sepeda buatan Indonesia memikat hati penghobi gowes dalam maupun luar negeri.
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto pb-[10rem] z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
            <img src={baseUrl + '/assets/3.2.jpg'} alt="Bike Garage" className="rounded-lg" />
            <h6 className="text-2xl font-bold">
              Pandemi covid-19 yang terjadi pada 2020-2021 lalu rupanya justru menyadarkan gaya hidup sehat.
            </h6>
            <p className="font-neutral-800 text-lg">Kegiatan bersepeda pun booming, tak terkecuali di Indonesia. Toko sepeda daring maupun laring ketiban untung imbas ke-fomo-an publik yang ingin menjajal aktivitas gowes di jalan-jalan lengang karena pembatasan sosial.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
            <p className="font-neutral-800 text-lg">
              Contohnya pada periode Maret hingga Juni 2020. Kompas Data menyebut Bukalapak mencatatkan peningkatan transaksi
            </p>
            <img src={baseUrl + '/assets/3.3.png'} alt="Stats" />
            <div>
              <div className="text-center text-8xl font-extrabold text-[#0058be]">156%</div>
              <div className="text-center font-neutral-800 font-bold text-2xl">penjualan sepeda</div>
            </div>
            <p className="font-neutral-800 text-lg">Kawan GNFI ikut beli juga enggak tuh?</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-full w-full bg-gradient-to-t from-black z-0 to-[60%]" />
      <div className="absolute bottom-0 z-50 mx-auto max-w-4xl">
        <img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
        />
      </div>
    </div>
  );
}
