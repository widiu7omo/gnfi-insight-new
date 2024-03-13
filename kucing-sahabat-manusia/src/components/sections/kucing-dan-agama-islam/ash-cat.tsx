import BrownCat from "./brown-cat";

export default function AshCat() {
	return (
		<div className="absolute z-20 bottom-0 ml-[50px] xl:block hidden ">
			<div className="relative flex-none z-10">
				<img
					src="/assets/ash-cat.png"
					alt="Kucing Abu"
					className="relative z-10"
				/>
				<BrownCat />
			</div>
		</div>
	);
}
