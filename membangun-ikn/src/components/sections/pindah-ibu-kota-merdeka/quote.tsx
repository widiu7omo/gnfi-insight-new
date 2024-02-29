import { vollkornFont } from ".";
import Ornament4 from "./ornament4";

export default function Quote() {
  return (
    <div className="relative max-w-[75ch] mx-auto bg-stone-800 rounded-full rounded-br-none w-full">
      <Ornament4 />
      <div className="h-48 justify-end items-center inline-flex ">
        <div
          className={`text-white text-[18px] font-bold pl-[90px] leading-7 ${vollkornFont.className} relative`}
        >
          “Kita akan memindahkan ibu kota besok malam. Tidak ada seorang pun
          dari saudara boleh membawa harta benda. Aku juga tidak”, ujar Presiden
          Pertama Indonesia yang akrab disapa Bung Karno itu.
        </div>
        <img
          className="h-48"
          alt="Soekarno Sticker"
          src="/assets/section2/990bcf9dceabed1a2ff85967cae2d172.png"
        />
      </div>
    </div>
  );
}
