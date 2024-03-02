import Nusantara from "./nusantara";
import { Five, Four, One, Six, Three, Two } from "./step-numbers";

export default function FaktaIkn() {
  return (
    <div className="bg-[#DAAE6D] relative">
      <div
        style={{ backgroundImage: "url(/assets/section7/noise.png)" }}
        className="absolute top-0 bottom-0 right-0 left-0 opacity-30"
      />
      <div className="relative py-12 flex items-center justify-center flex-col">
        <h3 className="text-white text-4xl font-bold text-center leading-snug">
          Fakta-fakta IKN,
          <br />
          <span> Ibu Kota Baru Indonesia</span>
        </h3>
        <Nusantara />
        <div className="flex flex-col space-y-6">
          <One />
          <Two />
          <Three />
          <Four />
          <Five />
          <Six />
        </div>
      </div>
    </div>
  );
}
