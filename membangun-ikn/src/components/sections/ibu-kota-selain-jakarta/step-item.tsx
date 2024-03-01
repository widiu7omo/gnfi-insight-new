import YelloArrow from "@/components/reusable/yellow-arrow";
import Ornament3 from "./ornament3";
import Ornament4 from "./ornament4";

type StepItemType = {
  imageSource: string;
  title: string;
  desc: string;
  withRightOrnament?: boolean;
  withLeftOrnament?: boolean;
};
export default function StepItem({
  imageSource,
  title,
  desc,
  withRightOrnament = false,
  withLeftOrnament = false,
}: StepItemType) {
  return (
    <div className="flex justify-between items-start max-w-4xl w-full">
      <div className="w-[400px] relative">
        <img
          src={imageSource}
          alt={title}
          className="object-cover w-[400px] z-10 relative"
        />
        {withLeftOrnament && <Ornament4 />}
      </div>
      <div className="flex-1">
        <div className="flex flex-col space-y-4 justify-start relative">
          <YelloArrow />
          <div className="space-y-2">
            <div className="text-3xl font-bold">{title}</div>
            <div className="text-xl">{desc}</div>
          </div>
          {withRightOrnament && <Ornament3 />}
        </div>
      </div>
    </div>
  );
}
