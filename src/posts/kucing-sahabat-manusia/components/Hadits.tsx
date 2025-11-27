
import HaditsCaption from "./HaditsCaption";

export default function Hadits() {
	return (
		<div className="absolute z-10 -top-[2rem] xl:top-[5rem] right-0">
			<div className="relative w-full xl:w-[500px] flex-none">
				<img src={`/assets/kucing-sahabat-manusia/hadits.png`} alt="Hadist" className="relative" />
				<HaditsCaption />
			</div>
		</div>
	);
}
