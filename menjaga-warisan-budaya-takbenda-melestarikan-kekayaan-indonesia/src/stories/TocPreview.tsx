import { useNavigation } from "@/store/useNavigation";
import { Toc } from "./Toc";

export function TocPreview() {
	const [_, setNavigation] = useNavigation();
	const toggleNavHandler = () => {
		setNavigation((prev) => ({ ...prev, show: !prev.show }));
	};
	return (
		<div className="h-screen">
			<button
				onClick={toggleNavHandler}
				className="bg-black text-white rounded-full px-4 py-2"
				type="button"
			>
				Open TOC
			</button>
			<Toc />
		</div>
	);
}
