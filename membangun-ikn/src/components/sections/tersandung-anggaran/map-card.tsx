import { cn } from '@/lib/utils'

type MapCardType = {
  title: string
  desc: string
  image: string
  className?: string
}
export default function MapCard({
  title,
  className,
  desc,
  image,
}: MapCardType) {
  return (
    <div className={cn('absolute z-10 max-w-[400px]', className)}>
      <img src={image} alt={title} className="w-[130px]" />
      <p className="text-2xl font-bold text-white">{title}</p>
      <p className="text-neutral-900 text-sm">{desc}</p>
    </div>
  )
}
