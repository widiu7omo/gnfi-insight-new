import Ornament2 from './Ornament5b'

export default function Quote() {
  return (
    <div className="mx-auto flex max-w-[65ch] flex-col px-4 xl:flex-row xl:px-0">
      <div className="grow">
        <p className="text-2xl font-bold">
          “Meski ibu kota pindah, Jakarta tetap akan berfungsi sebagai pusat
          ekonomi dan perdagangan,” kata SBY kala itu.
        </p>
      </div>
      <div className="relative w-[247px] flex-none">
        <img
          src={`/assets/membangun-ikn-mewujudkan-wacana-lama-indonesia/sby.png`}
          alt="Susilo B. Yudhoyono"
          className="relative z-10"
        />
        <Ornament2 />
      </div>
    </div>
  )
}
