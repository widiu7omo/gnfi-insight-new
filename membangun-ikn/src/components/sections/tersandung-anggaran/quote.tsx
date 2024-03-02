import Ornament2 from "./ornament2";

export default function Quote() {
  return (
    <div className="flex max-w-[65ch] mx-auto xl:flex-row flex-col">
      <div className="flex-grow">
        <p className="text-2xl font-bold">
          “Meski ibu kota pindah, Jakarta tetap akan berfungsi sebagai pusat
          ekonomi dan perdagangan,” kata SBY kala itu.
        </p>
      </div>
      <div className="flex-none w-[247px] relative">
        <img
          src="/assets/section6/sby.png"
          alt="Susilo B. Yudhoyono"
          className="relative z-10"
        />
        <Ornament2 />
      </div>
    </div>
  );
}
