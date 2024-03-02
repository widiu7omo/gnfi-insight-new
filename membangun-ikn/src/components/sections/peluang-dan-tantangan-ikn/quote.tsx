import QuoteIcon from "./quote-icon";
import QuoteIconSmall from "./quote-icon-small";

export default function Quote() {
  return (
    <div className="flex items-center justify-center bg-[#231F20] ">
      <div className="py-8 max-w-[65ch] space-y-12">
        <div className="flex space-x-4">
          <QuoteIcon />
          <div className="text-white font-bold text-2xl relative">
            <p>
              Dengan IKN, kita berharap, ketika kita membangun kota dari nol,
              kita akan munya kota yang menjadi standar bagi pembangunan <br />
              <span>kota lain di Indonesia</span>
            </p>
            <QuoteIconSmall />
          </div>
        </div>
        <div className="flex items-center space-x-12">
          <img
            src="/assets/section9/bambang.png"
            alt="Bambang"
            className="flex-none size-[200px]"
          />
          <div className="flex flex-col items-start">
            <p className="text-xl font-bold text-[#F39200]">
              Bambang Brodjonegoro
            </p>
            <p className="text-white">
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
