import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const QUOTES = [
  "Menunggu adalah seni kehidupan. Di dalamnya ada harapan dan doa.",
  "Kesabaran bukan sekadar kemampuan menunggu, tapi bagaimana kita bersikap saat menunggu.",
  "Semua akan indah pada waktunya bagi mereka yang sabar menunggu.",
  "Waktu yang dihabiskan untuk menunggu adalah waktu yang diberikan untuk mempersiapkan diri.",
  "Menunggu mengajarkan kita menghargai waktu dan hasil yang akan datang.",
  "Dalam setiap detik menunggu, tersimpan doa yang sedang dikabulkan satu per satu.",
  "Hal-hal baik datang kepada mereka yang percaya, hal-hal lebih baik datang kepada mereka yang sabar.",
  "Menunggu bukan berarti diam, tapi bergerak dalam doa dan usaha.",
  "Proses menunggu adalah cara semesta mematangkan kesiapan kita.",
  "Akar dari kesabaran itu pahit, tapi buahnya sangat manis."
];

export function Pending() {
  const [index, setIndex] = useState(0);
  const DURATION = 4000;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % QUOTES.length);
    }, DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center min-h-dvh justify-center p-6 bg-gradient-to-b from-background via-background to-muted/20 overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[50vw] h-[50vw] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="z-10 flex flex-col items-center max-w-2xl w-full space-y-12">
        {/* Logo with floating effect */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="/assets/gnfi-insight.png"
            alt="GNFI Insight"
            className="h-20 md:h-24 object-contain drop-shadow-sm opacity-90"
          />
        </motion.div>

        <div className="flex flex-col items-center w-full space-y-8">
          {/* Quote Container */}
          <div className="min-h-[120px] flex items-center justify-center w-full px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center max-w-xl"
              >
                <p className="text-xl md:text-2xl font-serif italic text-foreground/80 leading-relaxed tracking-wide">
                  "{QUOTES[index]}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Indicator */}
          <div className="h-1 w-32 bg-muted/30 rounded-full overflow-hidden">
            <motion.div
              key={index}
              className="h-full bg-primary/40"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: DURATION / 1000, ease: "linear" }}
            />
          </div>
        </div>
      </div>

      {/* Footer text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 text-xs text-muted-foreground/50 uppercase tracking-widest"
      >
        Memuat Pengetahuan
      </motion.p>
    </div>
  );
}
