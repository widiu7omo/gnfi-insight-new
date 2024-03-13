import HaditsCaption from "./hadits-caption";

export default function BrownCat() {
	return (
		<div className="absolute z-10 top-[5rem] right-0 xl:block hidden">
			<div className="relative w-[500px] flex-none">
				<img src="/assets/hadits.png" alt="Hadist" className="relative" />
				<HaditsCaption />
			</div>
		</div>
	);
}
