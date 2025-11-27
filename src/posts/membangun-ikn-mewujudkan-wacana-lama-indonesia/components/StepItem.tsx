import YelloArrow from './YellowArrow'
import Ornament3 from './OrnamentJkt2'
import Ornament4 from './OrnamentJkt3'

type StepItemType = {
  imageSource: string
  title: string
  desc: string
  withRightOrnament?: boolean
  withLeftOrnament?: boolean
}
export default function StepItem({
  imageSource,
  title,
  desc,
  withRightOrnament = false,
  withLeftOrnament = false,
}: StepItemType) {
  return (
    <div className="flex w-full max-w-4xl flex-col items-center justify-between sm:flex-row sm:items-start">
      <div className="relative w-[50%] md:w-[400px]">
        <img
          src={imageSource}
          alt={title}
          className="relative z-10 w-[400px] object-cover"
        />
        {withLeftOrnament && <Ornament4 />}
      </div>
      <div className="flex-1">
        <div className="relative flex flex-col items-center justify-center space-y-4 sm:items-start">
          <YelloArrow />
          <div className="space-y-2 text-black px-4 text-center sm:px-0 sm:text-left">
            <div className="text-3xl font-bold">{title}</div>
            <div className="text-xl">{desc}</div>
          </div>
          {withRightOrnament && <Ornament3 />}
        </div>
      </div>
    </div>
  )
}
