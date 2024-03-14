"use client";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/store/useNavigation";
import { useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { motion } from "framer-motion";
import { BarChart2Icon } from "lucide-react";
import { useState } from "react";
import { Navbar } from "./Navbar";
type NavbarType = {
	blurEffect?: boolean;
};
export function NavbarPreview({ blurEffect }: NavbarType) {
	return (
		<div
			className={cn(
				"h-[calc(100vh+800px)]",
				blurEffect ? "bg-orange-800" : "bg-black",
			)}
		>
			<Navbar blurEffect={blurEffect} />
		</div>
	);
}
