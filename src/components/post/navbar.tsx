import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";
import { ChevronRight, List } from "lucide-react";
import { useNavigation } from "@/store/useNavigation";

export type NavbarType = {
	className?: string;
};

export function Navbar(props: NavbarType) {
	const [_, setNavigation] = useNavigation();
	const toggleNavHandler = () => {
		setNavigation((prev) => ({ ...prev, show: !prev.show }));
	};

	// // Smooth animation variants
	// const containerVariants = {
	// 	hidden: { opacity: 0 },
	// 	visible: {
	// 		opacity: 1,
	// 		transition: {
	// 			staggerChildren: 0.1,
	// 			delayChildren: 0.05,
	// 		}
	// 	}
	// };

	const itemVariants: Variants = {
		hidden: {
			opacity: 0,
			y: -30,
			filter: "blur(4px)"
		},
		visible: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)",
			transition: {
				ease: "easeInOut"
			}
		}
	};

	return (
		<div
			className={cn(
				"h-[150px] bg-transparent z-50 px-6 lg:px-8 flex flex-col items-center justify-center relative",
				props.className
			)}
		>
			<div className="max-w-7xl mx-auto justify-between items-center flex w-full">
				<motion.a
					href="/"
					initial="hidden"
					whileInView="visible"
					variants={itemVariants}
					whileHover={{
						scale: 1.05,
						rotate: [0, -2, 2, 0],
						transition: {
							rotate: { duration: 0.5, ease: "easeInOut" },
							scale: { duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }
						}
					}}
					whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
					className="relative"
				>
					<motion.img
						layout
						src='/assets/gnfi-insight.png'
						alt="Logo GNFI"
						className="w-[90px] lg:w-[120px]"
						whileHover={{
							filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))"
						}}
					/>
				</motion.a>
				<motion.button
					initial={{
						opacity: 0,
						y: -30,
						filter: "blur(4px)"
					}}
					whileInView={{
						opacity: 1,
						y: 0,
						filter: "blur(0px)",
						transition: {
							ease: "easeInOut",
							delay: .1, duration: .4
						}
					}}
					whileHover={{
						scale: 1.08,
						rotate: 0,
						backgroundColor: "rgba(255, 255, 255, 1)",
						transition: {
							duration: 0.32,
							ease: "easeInOut"
						}
					}}
					whileTap={{
						scale: 0.92,
						rotate: 13,
						transition: { duration: 0.1 }
					}}
					type="button"
					onClick={toggleNavHandler}
					className="text-xl font-bold border group bg-white/10 backdrop-blur-md border-white/30 rounded-full p-2 lg:p-4 shadow-lg hover:shadow-xl"
				>
					<motion.div
						animate={{ rotate: 0 }}
						whileHover={{ rotate: 0 }}
					>
						<List className="text-white group-hover:text-black transition-colors duration-300 size-5" />
					</motion.div>
				</motion.button>
			</div>
		</div>
	);
}
