import { useNavigation } from "@/store/useNavigation";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronRight, List, X } from "lucide-react";
import { cn } from "@/lib/utils";
type TocItem = {
	id: string;
	label: string;
}
export function Toc({ tocItems }: { tocItems: TocItem[] }) {
	const [navigation, setNavigation] = useNavigation();
	const [currentHash, setCurrentHash] = useState("");
	const [showButton, setShowButton] = useState(false);
	const isShow = navigation.show;

	const toggleNavHandler = () => {
		setNavigation((prev) => ({ ...prev, show: !prev.show }));
	};

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 150) {
				setShowButton(true);
			} else {
				setShowButton(false);
				// Also close the TOC if we go back to top, optional but good for UX
				if (navigation.show) {
					setNavigation((prev) => ({ ...prev, show: false }));
				}
			}
		};

		const onHashChanged = () => {
			if (window.innerWidth <= 768) {
				setNavigation((prev) => ({ ...prev, show: false }));
			}
			setCurrentHash(window.location.hash);
		};

		// Set initial hash
		setCurrentHash(window.location.hash);

		window.addEventListener("hashchange", onHashChanged);
		window.addEventListener("scroll", onScroll);

		return () => {
			window.removeEventListener("hashchange", onHashChanged);
			window.removeEventListener("scroll", onScroll);
		};
	}, [navigation.show, setNavigation]);

	const isSelected = useCallback(
		(selectedHash: string) => {
			return currentHash === selectedHash;
		},
		[currentHash],
	);

	return (
		<>
			<AnimatePresence>
				{isShow && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={toggleNavHandler}
							className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
						/>
						<motion.div
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ type: "spring", damping: 25, stiffness: 200 }}
							className="fixed top-0 right-0 h-full w-[85vw] sm:w-[400px] bg-white/80 backdrop-blur-2xl border-l border-white/20 shadow-2xl z-60 flex flex-col"
						>
							<div className="p-4 border-b border-gray-100/50 flex items-center justify-between">
								<h2 className="text-xl font-bold text-gray-900 flex items-center gap-2.5">
									<div className="p-2 bg-red-50/60 text-gray-600 rounded-lg">
										<List className="w-5 h-5" />
									</div>
									Daftar isi
								</h2>
								<button
									type="button"
									onClick={toggleNavHandler}
									className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-900"
								>
									<X className="w-5 h-5" />
								</button>
							</div>

							<div className="flex-1 overflow-y-auto p-4">
								<nav className="space-y-1">
									{tocItems.map((item) => {
										const active = isSelected(item.id);
										return (
											<a
												key={item.id}
												href={item.id}
												onClick={() => {
													if (window.innerWidth <= 768) {
														toggleNavHandler();
													}
												}}
												className={cn(
													"group flex items-start gap-3 p-3 rounded-xl transition-all duration-200",
													active
														? "bg-[#ff312a] text-white font-semibold shadow-sm shadow-red-100"
														: "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
												)}
											>
												<span className={cn(
													"mt-2 ml-1.5 mr-1 w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300",
													active ? "bg-white scale-125" : "bg-[#ff312a] group-hover:bg-gray-400"
												)} />
												<span className="text-sm leading-relaxed">{item.label}</span>
												{active && (
													<ChevronRight className="min-w-4 min-h-4 w-4 h-4 ml-auto mt-0.5 text-white" />
												)}
											</a>
										);
									})}
								</nav>
							</div>

							<div className="px-4 py-4 flex flex-row items-center justify-between border-t border-gray-100/50 bg-gray-50/50 text-xs text-center text-gray-400">
								<img src="/assets/gnfi-insight.png" alt="GNFI Insight Logo" className="w-[20%] mr-4" />
								<div className="text-left flex-1">
									<p className="text-lg font-bold text-neutral-800">GNFI Insight</p>
									<p className="text-xs text-neutral-600">Membangun wawasan lewat data dan cerita. </p>
								</div>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>

			{/* Floating Toggle Button (Visible when TOC is hidden AND scrolled down) */}
			<AnimatePresence>
				{!isShow && showButton && (
					<motion.button
						initial={{ scale: 0, opacity: 0, y: 20 }}
						animate={{ scale: 1, opacity: 1, y: 0 }}
						exit={{ scale: 0, opacity: 0, y: 20 }}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={toggleNavHandler}
						className="fixed bottom-8 right-8 z-50 bg-white/90 backdrop-blur-md text-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 h-12 pl-3.5 pr-3.5 rounded-full flex items-center gap-0 hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300 group overflow-hidden"
					>
						<List className="w-5 h-5 shrink-0" />
						<span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 ease-out whitespace-nowrap text-sm font-semibold">
							Daftar isi
						</span>
					</motion.button>
				)}
			</AnimatePresence>
		</>
	);
}
