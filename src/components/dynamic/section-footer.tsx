export default function SectionFooter() {
  return (
    <div className="text-white bg-red-600 w-full text-center py-32 font-base text-2xl relative overflow-clip">
      Dibuat oleh <span className="font-bold">Good News From Indonesia</span>
      <div className="">
        <img
          src="assets/gnfi.svg"
          alt="Logo GNFI"
          className="opacity-50 -left-20 h-[500px] absolute -bottom-[56%] rotate-45"
        />
        <img
          src="assets/gnfi.svg"
          alt="Logo GNFI"
          className="opacity-50 h-[800px] right-0 absolute -top-40"
        />
      </div>
    </div>
  );
}
