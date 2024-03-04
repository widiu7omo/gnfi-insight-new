import Nusantara from "./nusantara";
import { Five, Four, One, Six, Three, Two } from "./step-numbers";

export default function FaktaIkn() {
  return (
    <div className="relative bg-[#DAAE6D]">
      <div
        style={{ backgroundImage: "url(/assets/section7/noise.png)" }}
        className="absolute bottom-0 left-0 right-0 top-0 opacity-30"
      />
      <div className="relative flex flex-col items-center justify-center py-12">
        <h3 className="text-center text-4xl font-bold leading-snug text-white">
          Fakta-fakta IKN,
          <br />
          <span> Ibu Kota Baru Indonesia</span>
        </h3>
        <Nusantara />
        {/* TODO: responsive */}
        {/* <div className="flex flex-col space-y-6">
          <One />
          <Two />
          <Three />
          <Four />
          <Five />
          <Six />
        </div> */}
      </div>
    </div>
  );
}
