import { motion } from "motion/react";
import { Calendar, User, Briefcase } from "lucide-react";

const ASSETS_PATH =
  "/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan";

const leaders = [
  {
    name: "Serena Cosgrova Franscies, S.Sos",
    birthDate: "20 September 1999",
    age: "25 Tahun",
    position: "Wakil Wali Kota Kupang",
    image: "kota-kupang.png",
  },
  {
    name: "Bellinda Putri Sabrina Birton, S.Ked",
    birthDate: "6 September 1999",
    age: "25 Tahun",
    position: "Wakil Wali Kota Kudus",
    image: "kudus.png",
  },
  {
    name: "Annida Allivia",
    birthDate: "9 April 1999",
    age: "25 Tahun",
    position: "Wali Kota Bogor",
    image: "bogor.png",
  },
  {
    name: "Adi Mula Nakalelu",
    birthDate: "26 Februari 1999",
    age: "25 Tahun",
    position: "Wakil Bupati Barito Timur",
    image: "barito.png",
  },
  {
    name: "Ilham Ari Fauzi A Uskara",
    birthDate: "23 Oktober 1998",
    age: "26 Tahun",
    position: "Wali Kota Makassar",
    image: "makassar.png",
  },
  {
    name: "Vinanda Prameswati, S.H., M.Kn.",
    birthDate: "12 Juni 1998",
    age: "26 Tahun",
    position: "Wali Kota Kediri",
    image: "kediri.png",
  },
  {
    name: "Aurum Obe Titu Eki, S.Ars., M.Ars.",
    birthDate: "9 April 1998",
    age: "26 Tahun",
    position: "Wakil Bupati Kupang",
    image: "kupang.png",
  },
  {
    name: "Reynaldy Putra Andita Bumi Raemi, S.I.P.",
    birthDate: "30 Oktober 1996",
    age: "28 Tahun",
    position: "Bupati Subang",
    image: "subang.png",
  },
  {
    name: "Fahmi Muhammad Hanif",
    birthDate: "2 September 1996",
    age: "28 Tahun",
    position: "Bupati Purbalingga",
    image: "purbalingga.png",
  },
  {
    name: "Alvin Akawijaya Putra",
    birthDate: "18 Mei 1996",
    age: "28 Tahun",
    position: "Bupati Buton",
    image: "buton.png",
  },
];

export default function Infographic5() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden bg-slate-50 min-h-screen font-sora">
      {/* Background Decoration */}
      <div className="absolute top-0 inset-x-0 h-96 bg-linear-to-b from-blue-100/40 to-transparent pointer-events-none" />

      <div className="relative w-full max-w-6xl mx-auto px-4 py-16 md:py-24 lg:mb-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold mb-6 border border-[#FF6B35]/20">
            <User className="w-4 h-4" />
            <span>INFOGRAFIS PILKADA</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#000E4F] leading-tight mb-4">
            Deretan Kepala Daerah <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF6B35] to-[#FF9F43]">
              Termuda
            </span>{" "}
            Periode 2025-2030
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Mengenal wajah-wajah pemimpin muda yang siap membawa energi baru dan inovasi untuk daerahnya.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Briefcase className="w-24 h-24 text-[#000E4F] -rotate-12 transform translate-x-8 -translate-y-8" />
              </div>

              <div className="flex items-start gap-5 relative z-10">
                {/* Avatar Section */}
                <div className="relative shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-md border-2 border-white group-hover:scale-105 transition-transform duration-500 bg-slate-100">
                    <img
                      src={`${ASSETS_PATH}/5/${leader.image}`}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#000E4F] text-white text-[10px] md:text-xs font-bold py-1 px-3 rounded-full shadow-lg whitespace-nowrap border-2 border-white">
                    {leader.age}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 pt-1">
                  <h3 className="text-lg md:text-xl font-bold text-[#000E4F] mb-1 leading-snug group-hover:text-[#1E88E5] transition-colors">
                    {leader.name}
                  </h3>

                  <div className="flex items-center gap-2 text-[#FF6B35] font-semibold text-sm mb-3">
                    <Briefcase className="w-4 h-4" />
                    <span>{leader.position}</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-500 text-xs md:text-sm bg-slate-50 w-fit px-3 py-1.5 rounded-lg">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Lahir: {leader.birthDate}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Source */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center border-t border-slate-200 pt-8"
        >
          <p className="font-sora text-slate-500 text-sm">
            <span className="font-bold text-[#000E4F]">Sumber:</span> Info Pilkada via Goodstats
          </p>
        </motion.div>
      </div>

      {/* Footer Image */}
      <div className="w-full mt-auto hidden lg:block absolute bottom-12 z-20">
        <img
          src={`${ASSETS_PATH}/footer.png`}
          alt="GNFI Insight"
          className="w-full max-w-4xl mx-auto object-contain h-auto invert"
        />
      </div>
    </div>
  );
}
