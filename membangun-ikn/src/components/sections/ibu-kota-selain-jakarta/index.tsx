export default function SectionThree() {
  return (
    <section id="section-3" className="w-full relative">
      <img
        src="/assets/section3/da84d88dc706e90c8b1d715b4ee601bf.png"
        alt="At War"
        className="object-cover object-[50%_70%] w-full h-[800px] aspect-auto"
      />
      <div className="absolute top-[10%] left-[25%] mx-auto">
        <svg
          aria-label="Block Sink"
          role="img"
          className="top-0"
          width="766"
          height="293"
          viewBox="0 0 766 293"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 27.5L765.5 0V253.5L3 292.5L0 27.5Z" fill="#FF9801" />
        </svg>

        <div className="absolute top-0 p-8">
          <div className="text-neutral-800 text-5xl font-bold leading-tight">
            Kota yang Pernah <br />
            Jadi Ibu Kota Indonesia
            <br />
            <span className="text-white"> Selain Jakarta</span>
          </div>
        </div>
      </div>
    </section>
  );
}
