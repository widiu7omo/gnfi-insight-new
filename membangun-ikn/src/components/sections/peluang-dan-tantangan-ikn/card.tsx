import Arrow from './arrow'

export default function Card() {
  return (
    <div className="flex items-center justify-center pt-8">
      <div className="flex max-w-[65ch] flex-col items-center xl:flex-row">
        <img
          src="/assets/jokowi.png"
          alt="Joko Widodo"
          className="w-[187px] flex-none"
        />
        <div className="flex flex-grow flex-col items-center justify-start space-y-4 px-0 py-4 xl:px-8 xl:py-0">
          <div className="flex space-x-2">
            <Arrow />
            <p className="font-medium text-neutral-800">
              Ibu Kota Nusantara (IKN) diharapkan jadi standar baru bagi
              pembangunan kota di Indonesia
            </p>
          </div>
          <div className="flex space-x-2">
            <Arrow />
            <p className="font-medium text-neutral-800">
              Pada Agustus 2019, Presiden Joko Widodo mengumumkan akan
              memindahkan ibu kota ke Kalimantan Timur
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
