import QuoteIcon from "./quote-icon";
import QuoteIconSmall from "./quote-icon-small";

export default function Quote() {
  return (
    <div className="flex items-center justify-center bg-[#231F20] px-4 xl:px-0">
      <div className="max-w-[65ch] space-y-12 py-8">
        <div className="flex flex-col space-x-0 space-y-4 xl:flex-row xl:space-x-4 xl:space-y-0">
          <QuoteIcon />
          <div className="relative text-2xl font-bold text-white">
            <p>
              Dengan IKN, kita berharap, ketika kita membangun kota dari nol,
              kita akan munya kota yang menjadi standar bagi pembangunan <br />
              <span>kota lain di Indonesia</span>
            </p>
            <QuoteIconSmall />
          </div>
        </div>
        <div className="flex flex-col items-center space-x-0 space-y-4 xl:flex-row xl:space-x-12 xl:space-y-0">
          <img
            src="/assets/section9/bambang.png"
            alt="Bambang"
            className="size-[200px] flex-none"
          />
          <div className="flex flex-col items-center space-y-2 xl:items-start xl:space-y-0">
            <p className="text-center text-xl font-bold text-[#F39200] xl:text-left">
              Bambang Brodjonegoro
            </p>
            <p className="text-center text-white xl:text-left">
              Guru Besar Fakultas Ekonomi dan Bisnis Universitas Indonesia dan
              eks Menteri Perencanaan Pembangunan Nasional Indonesia/Kepala
              Bappenas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
