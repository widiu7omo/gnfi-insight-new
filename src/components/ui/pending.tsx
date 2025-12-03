import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const QUOTES = [
  "Menunggu adalah seni kehidupan. Di dalamnya ada harapan dan doa.",
  "Ilmu itu didapat dengan lidah yang gemar bertanya dan akal yang suka berpikir.",
  "Barangsiapa yang tidak mau merasakan pahitnya belajar, ia akan merasakan hinanya kebodohan sepanjang hidupnya.",
  "Sabar itu ilmu tingkat tinggi. Belajarnya setiap hari, latihannya setiap saat, ujiannya dadakan.",
  "Ilmu tanpa amal bagaikan pohon tanpa buah.",
  "Pendidikan adalah senjata paling mematikan di dunia, karena dengan pendidikan, Anda dapat mengubah dunia.",
  "Tuntutlah ilmu, tapi tidak melupakan ibadah, dan kerjakanlah ibadah, tapi tidak boleh lupa pada ilmu.",
  "Orang berilmu itu besar walaupun ia masih muda. Sedangkan orang bodoh itu kecil walau ia sudah tua.",
  "Semua akan indah pada waktunya bagi mereka yang sabar menunggu.",
  "Akar pendidikan itu pahit, tapi buahnya manis."
];

export function Pending() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % QUOTES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col space-y-4 items-center min-h-dvh justify-center p-4 bg-background text-foreground">
      <img src="/assets/gnfi-insight.png" alt="GNFI Insight" className="animate-bounce h-16" />
      <div className="min-h-12 flex items-center justify-center max-w-md">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-center text-muted-foreground italic"
          >
            "{QUOTES[index]}"
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
