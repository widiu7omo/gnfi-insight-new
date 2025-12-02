import { motion } from "motion/react";

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
    <div className="relative flex flex-col items-center overflow-hidden bg-white min-h-screen">
      <div className="relative w-full max-w-4xl mx-auto px-4 py-12 md:py-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="font-sora text-[#000E4F] font-bold text-2xl md:text-[44px] md:leading-tight leading-snug">
            Deretan Kepala Daerah
          </h2>
          <h2 className="font-sora text-[#000E4F] font-bold text-2xl md:text-[44px] md:leading-tight leading-snug">
            Termuda Periode 2025-2023
          </h2>
        </motion.div>

        {/* Table Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-[1.1fr_1.2fr_0.7fr_1fr] gap-2 md:gap-4 text-[#1E88E5] font-sora font-semibold text-xs md:text-sm mb-2 px-2"
        >
          <div className="pl-16 md:pl-17">Nama Lengkap</div>
          <div className="text-center">Tanggal Lahir</div>
          <div className="text-center">Usia Saat Dilantik</div>
          <div className="text-right pr-2">Jabatan</div>
        </motion.div>

        {/* Table Rows */}
        <div className="flex flex-col gap-1.5 md:gap-2">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="grid grid-cols-[1.1fr_1.2fr_0.7fr_1fr] gap-2 md:gap-4 items-center bg-[#FF6B35] rounded-lg py-2 md:py-3 px-2"
            >
              {/* Name with Avatar */}
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden bg-white shrink-0 border-2 border-white">
                  <img
                    src={`${ASSETS_PATH}/5/${leader.image}`}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-sora text-white font-semibold text-[10px] md:text-sm leading-tight">
                  {leader.name}
                </span>
              </div>

              {/* Birth Date */}
              <div className="bg-[#1E88E5] rounded-md py-1.5 md:py-2 px-2 md:px-4 text-center">
                <span className="font-sora text-white text-[10px] md:text-sm">
                  {leader.birthDate}
                </span>
              </div>

              {/* Age */}
              <div className="bg-[#000E4F] rounded-md py-1.5 md:py-2 px-2 md:px-4 text-center">
                <span className="font-sora text-white font-semibold text-[10px] md:text-sm">
                  {leader.age}
                </span>
              </div>

              {/* Position */}
              <div className="text-right pr-1 md:pr-2">
                <span className="font-sora text-white font-semibold text-[10px] md:text-sm leading-tight">
                  {leader.position}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Source */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 text-left"
        >
          <p className="font-sora text-gray-600 text-xs md:text-sm">
            <span className="font-semibold">Sumber:</span> Info Pilkada via
            Goodstats
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 flex items-center justify-center w-full">
        <img
          src={`${ASSETS_PATH}/footer.png`}
          alt="GNFI Insight"
          className="z-50 hidden sm:block bottom-0 object-cover h-40 overflow-clip w-full max-w-4xl mx-auto"
        />
      </div>
    </div>
  );
}
