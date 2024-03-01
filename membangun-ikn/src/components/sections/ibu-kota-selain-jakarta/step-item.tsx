import YelloArrow from "@/components/reusable/yellow-arrow";

type StepItemType = {
  imageSource: string;
  title: string;
  desc: string;
};
export default function StepItem({ imageSource, title, desc }: StepItemType) {
  return (
    <div className="flex justify-between items-start max-w-4xl w-full">
      <div className="w-[400px]">
        <img src={imageSource} alt={title} className="object-cover w-[400px]" />
      </div>
      <div className="flex-1">
        <div className="flex flex-col space-y-4 justify-start">
          <YelloArrow />
          <div className="space-y-2">
            <div className="text-3xl font-bold">{title}</div>
            <div className="text-xl">{desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
