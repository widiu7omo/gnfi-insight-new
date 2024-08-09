import { baseUrl } from '@/constants/meta'
import { vollkornFont } from '.'
import Ornament4 from './ornament4'

export default function Quote() {
  return (
    <div className="relative mx-auto w-full max-w-[75ch] rounded-br-none bg-stone-800 pt-4 sm:rounded-full sm:pt-0">
      <Ornament4 />
      <div className="inline-flex h-48 flex-col items-end justify-end space-x-4 sm:flex-row sm:items-center">
        <div
          className={`pl-4 text-[18px] font-bold leading-7 text-white sm:pl-[90px] ${vollkornFont.className} relative`}
        >
          “Kita akan memindahkan ibu kota besok malam. Tidak ada seorang pun
          dari saudara boleh membawa harta benda. Aku juga tidak”, ujar Presiden
          Pertama Indonesia yang akrab disapa Bung Karno itu.
        </div>
        <img
          className="h-48"
          alt="Soekarno Sticker"
          src={`${baseUrl}/assets/990bcf9dceabed1a2ff85967cae2d172.png`}
        />
      </div>
    </div>
  )
}
