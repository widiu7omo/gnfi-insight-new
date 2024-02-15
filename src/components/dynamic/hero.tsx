import { BlockType } from "@/data/types";
import { ChevronsDownIcon } from "lucide-react";

export default function Hero({ block }: { block: BlockType }) {
  return (
    <div
      className="w-full h-screen relative !bg-cover"
      style={{
        background: `url(pemilu-dan-dinamikanya-dari-masa-ke-masa/assets/tangerangkota.go.id.jpeg)`,
      }}
    >
      <div className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/90">
        <div className="h-full flex justify-between max-w-7xl mx-auto py-8 flex-col">
          <div className="flex justify-between">
            <div className="text-xl font-bold">{""}</div>
            <img
              src="assets/logo_gnfi_white.png"
              alt="Logo GNFI"
              className="w-[80px]"
            />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <h5 className="text-5xl font-bold text-white max-w-[60%] text-center leading-snug">
              Pemilu dan Dinamikanya dari Masa ke Masa
            </h5>
          </div>
          <div className="flex items-center justify-center">
            <ChevronsDownIcon size={40} className="text-white animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}
