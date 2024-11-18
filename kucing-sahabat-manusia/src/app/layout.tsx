import Providers from "@/store/providers";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { baseUrl } from "@/constants/meta";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<head>
				<link
					rel="canonical"
					href={`${baseUrl}/`}
					key="canonical"
				/>
				<link rel="icon" href={`${baseUrl}/favicon.ico`} type="image/x-icon" />
			</head>
			<Script
				src="https://platform-api.sharethis.com/js/sharethis.js#property=65d7025dafa82e0019c9e3e8&product=sop"
				async
			/>
			<body style={{ ...inter.style }} className="w-full">
				<Providers>{children}</Providers>
				<GoogleAnalytics gaId="G-1CY08P02JH" />
			</body>
		</html>
	);
}
