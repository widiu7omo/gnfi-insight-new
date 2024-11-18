"use client";
import { useNavigation } from "@/store/useNavigation";
import { motion } from "framer-motion";
import { ListMinusIcon, MoveLeftIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
export function Toc() {
	const [navigation, setNavigation] = useNavigation();
	const toggleNavHandler = () => {
		setNavigation((prev) => ({ ...prev, show: !prev.show }));
	};
	const [currentHash, setCurrentHash] = useState("");
	const isShow = navigation.show;
	useEffect(() => {
		const onHashChanged = () => {
			if (window.innerWidth <= 768) {
				toggleNavHandler();
			}
			setCurrentHash(window.location.hash);
		};
		window.addEventListener("hashchange", onHashChanged);

		return () => {
			window.removeEventListener("hashchange", onHashChanged);
		};
	}, [toggleNavHandler]);
	const isSelected = useCallback(
		(selectedHash: string) => {
			return currentHash === selectedHash;
		},
		[currentHash],
	);
	return (
		<>
			<motion.div
				data-show={isShow}
				layout
				className="bg-white w-full -left-[100vw] lg:w-[400px] lg:-left-[400px] data-[show=true]:left-0 top-0 h-screen fixed z-[60] px-7 py-10 space-y-8"
			>
				<motion.h6 className="flex flex-row-reverse items-center justify-between text-3xl font-semibold text-gray-800">
					<span>Table of Content</span>
					<button type="button" onClick={toggleNavHandler}>
						{isShow ? <MoveLeftIcon /> : <ListMinusIcon />}
					</button>
				</motion.h6>
				<ul className="text-lg text-gray-600 leading-8 space-y-4">
					<li
						data-active={isSelected("#section-1")}
						className="data-[active=true]:font-bold hover:font-medium hover:cursor-pointer hover:translate-x-2 transition-transform hover:underline underline-offset-4"
					>
						<a href="#section-1">Kucing, Sahabat Manusia</a>
					</li>
					<li
						data-active={isSelected("#section-2")}
						className="data-[active=true]:font-bold hover:font-medium hover:cursor-pointer hover:translate-x-2 transition-transform hover:underline underline-offset-4"
					>
						<a href="#section-2">
							Data Membuktikan, Orang Indonesia Suka Kucing
						</a>
					</li>
					<li
						data-active={isSelected("#section-3")}
						className="data-[active=true]:font-bold hover:font-medium hover:cursor-pointer hover:translate-x-2 transition-transform hover:underline underline-offset-4"
					>
						<a href="#section-3">Dipelihara sejak Ribuan Tahun Lalu</a>
					</li>
					<li
						data-active={isSelected("#section-4")}
						className="data-[active=true]:font-bold hover:font-medium hover:cursor-pointer hover:translate-x-2 transition-transform hover:underline underline-offset-4"
					>
						<a href="#section-4">Hewan Penuh Mitos</a>
					</li>
					<li
						data-active={isSelected("#section-5")}
						className="data-[active=true]:font-bold hover:font-medium hover:cursor-pointer hover:translate-x-2 transition-transform hover:underline underline-offset-4"
					>
						<a href="#section-5">Kucing dan Agama Islam</a>
					</li>
					<li
						data-active={isSelected("#section-6")}
						className="data-[active=true]:font-bold hover:font-medium hover:cursor-pointer hover:translate-x-2 transition-transform hover:underline underline-offset-4"
					>
						<a href="#section-6">Ragam Jenis Kucing Asli Indonesia</a>
					</li>
					<li
						data-active={isSelected("#section-7")}
						className="data-[active=true]:font-bold hover:font-medium hover:cursor-pointer hover:translate-x-2 transition-transform hover:underline underline-offset-4"
					>
						<a href="#section-7">Tertarik Memelihara Kucing</a>
					</li>
				</ul>
			</motion.div>
			<motion.div
				layout
				onClick={toggleNavHandler}
				data-show={isShow}
				className="top-0 bottom-0 left-0 right-0 bg-black/60 transition-all z-[55] absolute data-[show=true]:visible invisible"
			/>
		</>
	);
}
