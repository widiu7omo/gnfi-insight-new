import React from "react";

import { Hero } from "./Hero";
import "./page.css";
import { ChevronsDownIcon } from "lucide-react";
import { Paragraph } from "./Paragraph";
import Ornament from "./Ornament";
import { Navbar } from "./Navbar";

type User = {
	name: string;
};

export const Page: React.FC = () => {
	const [user, setUser] = React.useState<User>();

	return (
		<article>
			<Navbar />
			<Hero
				title="Membangun IKN, Mewujudkan Wacana Lama Indonesia"
				coverUrl="/assets/hero-example.jpg"
				swipeUpIcon={
					<ChevronsDownIcon size={40} className="animate-bounce text-white" />
				}
			/>
			<section className="bg-[#374B1E] ">
				<Paragraph className="py-8 text-white">
					<Ornament className="-right-[2rem] -top-[1rem]">
						<svg
							aria-label="Circle dashed"
							role="img"
							width="111"
							height="133"
							viewBox="0 0 111 133"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M80.3562 101.086C82.8157 105.304 84.9538 109.263 85.6884 114.117C86.1012 117.281 90.5152 116.784 90.4166 113.655C90.3315 108.11 88.9751 101.978 85.3911 97.5715C82.876 94.4292 78.4137 97.657 80.3562 101.086Z"
								fill="white"
							/>
							<path
								d="M59.0544 73.9712C62.6381 76.9456 66.3545 79.8712 69.4633 83.3975C71.3706 85.7088 74.8762 83.3613 73.3599 80.6797C70.6699 76.2453 67.5399 72.0485 63.1531 69.144C59.8629 66.9657 55.9248 71.2061 59.0544 73.9712Z"
								fill="white"
							/>
							<path
								d="M33.8688 42.8626C30.4742 41.6272 26.8573 46.126 30.2034 48.6605C35.3797 52.4797 41.4567 55.0624 46.8494 58.651C48.5818 59.6703 51.2982 57.8397 49.7612 55.9194C45.6602 50.7241 40.3368 45.0751 33.8688 42.8626Z"
								fill="white"
							/>
							<path
								d="M9.44839 31.8186C6.10968 30.9394 3.68042 36.2062 6.51652 38.175C8.52833 39.5435 10.8262 40.0528 13.1312 40.7856C15.2546 41.4346 17.3851 42.3072 19.6341 42.6838C21.7015 42.9766 23.0489 40.2943 21.3932 38.8699C19.6468 37.4036 17.642 36.2587 15.7281 35.1556C13.6744 33.878 11.7953 32.4606 9.44839 31.8186Z"
								fill="white"
							/>
							<path
								d="M76.352 60.5865C79.6083 67.3745 84.4499 73.3518 88.7188 79.6157C90.5004 82.1995 94.1735 79.4887 92.6573 76.8071C89.1915 70.4731 86.1098 63.5454 81.7223 57.7775C79.7172 55.2007 74.7727 57.3252 76.352 60.5865Z"
								fill="white"
							/>
							<path
								d="M49.5887 36.2377C55.0233 39.7356 60.5906 43.1845 64.7754 48.1982C66.4033 50.1604 69.6924 48.0434 68.0994 45.7669C63.8445 39.95 59.2476 34.636 52.6606 31.4877C49.8456 30.1893 46.8923 34.4434 49.5887 36.2377Z"
								fill="white"
							/>
							<path
								d="M27.653 15.9883C23.8465 15.8844 23.4847 21.4439 26.4394 22.9169C29.1636 24.1734 32.0761 24.3054 34.7165 25.7436C37.6712 27.2165 40.5492 29.0946 42.5962 31.5805C44.1333 33.5009 46.8007 31.5376 45.6199 29.5614C41.8399 23.1926 35.6221 16.14 27.653 15.9883Z"
								fill="white"
							/>
						</svg>
					</Ornament>
					<Ornament className="-left-[3rem] -bottom-[3rem] rotate-180">
						<svg
							aria-label="Circle dashed"
							role="img"
							width="111"
							height="133"
							viewBox="0 0 111 133"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M80.3562 101.086C82.8157 105.304 84.9538 109.263 85.6884 114.117C86.1012 117.281 90.5152 116.784 90.4166 113.655C90.3315 108.11 88.9751 101.978 85.3911 97.5715C82.876 94.4292 78.4137 97.657 80.3562 101.086Z"
								fill="white"
							/>
							<path
								d="M59.0544 73.9712C62.6381 76.9456 66.3545 79.8712 69.4633 83.3975C71.3706 85.7088 74.8762 83.3613 73.3599 80.6797C70.6699 76.2453 67.5399 72.0485 63.1531 69.144C59.8629 66.9657 55.9248 71.2061 59.0544 73.9712Z"
								fill="white"
							/>
							<path
								d="M33.8688 42.8626C30.4742 41.6272 26.8573 46.126 30.2034 48.6605C35.3797 52.4797 41.4567 55.0624 46.8494 58.651C48.5818 59.6703 51.2982 57.8397 49.7612 55.9194C45.6602 50.7241 40.3368 45.0751 33.8688 42.8626Z"
								fill="white"
							/>
							<path
								d="M9.44839 31.8186C6.10968 30.9394 3.68042 36.2062 6.51652 38.175C8.52833 39.5435 10.8262 40.0528 13.1312 40.7856C15.2546 41.4346 17.3851 42.3072 19.6341 42.6838C21.7015 42.9766 23.0489 40.2943 21.3932 38.8699C19.6468 37.4036 17.642 36.2587 15.7281 35.1556C13.6744 33.878 11.7953 32.4606 9.44839 31.8186Z"
								fill="white"
							/>
							<path
								d="M76.352 60.5865C79.6083 67.3745 84.4499 73.3518 88.7188 79.6157C90.5004 82.1995 94.1735 79.4887 92.6573 76.8071C89.1915 70.4731 86.1098 63.5454 81.7223 57.7775C79.7172 55.2007 74.7727 57.3252 76.352 60.5865Z"
								fill="white"
							/>
							<path
								d="M49.5887 36.2377C55.0233 39.7356 60.5906 43.1845 64.7754 48.1982C66.4033 50.1604 69.6924 48.0434 68.0994 45.7669C63.8445 39.95 59.2476 34.636 52.6606 31.4877C49.8456 30.1893 46.8923 34.4434 49.5887 36.2377Z"
								fill="white"
							/>
							<path
								d="M27.653 15.9883C23.8465 15.8844 23.4847 21.4439 26.4394 22.9169C29.1636 24.1734 32.0761 24.3054 34.7165 25.7436C37.6712 27.2165 40.5492 29.0946 42.5962 31.5805C44.1333 33.5009 46.8007 31.5376 45.6199 29.5614C41.8399 23.1926 35.6221 16.14 27.653 15.9883Z"
								fill="white"
							/>
						</svg>
					</Ornament>
					<p>
						Ada sejarahnya bagaimana kucing (Felis catus) bisa banyak dipelihara
						manusia. Jauh sebelum pecinta kucing seperti Rissa dan Brasti serta
						banyak orang Indonesia Lainnya, manusia sudah memelihara kucing
						sejak ribuan tahun silam.
					</p>

					<p>
						Sama halnya dengan hewan peliharaan lainnya, kucing ternyata juga
						merupakan hasil domestikasi dari miacis yang juga merupakan nenek
						moyang dari anjing dan beruang. Miacis ini kemudian mengalami
						evolusi menjadi kucing besar seperti singa dan harimau yang kemudian
						berevolusi menjadi nenek moyang kucing domestik. Nenek moyang kucing
						domestik ini pertama kali ditemukan berdasarkan hasil fosil mumi di
						Mesir.
					</p>

					<p>
						Penelusuran sejarah mencatat bahwa domestikasi kucing terjadi pada
						10.000 tahun lalu di sebuah wilayah Timur Tengah yang mengelilingi
						Sungai Tigris dan Efrat. Masyarakat mengembangkan ikatan dengan
						kucing sebagai pengendali hama.
					</p>

					<p>
						Wilayah yang diyakini tempat domestikasi kucing pertama dikenal
						sebagai kawasan berbentuk bulan sabit. Setelah 10.000 tahun berlalu,
						wilayah tersebut kini menjadi sejumlah negara, seperti Irak, Turki,
						Suriah, Lebanon, Israel, Palestina, dan Mesir.
					</p>

					<p>
						Di Mesir, kucing dianggap sebagai dewa oleh rakyat. Pada tahun 2004,
						Jean dari National Museum of Natural History in Paris melaporkan
						bahwa ditemukan bukti adanya kuburan manusia dan disampingnya
						terdapat kuburan kucing.
					</p>
					<p>
						“Fosil tersebut diperkirakan berumur 9.500 tahun. Hal ini
						mengungkapkan bahwa telah ada kedekatan antara manusia dan kucing
						sejak 10.000 tahun yang lalu,” tulis Dian Dwi Putri Ulan Sari
						Patongai dalam dalam Evolusi Kucing: Genetika dan Evolusi. Dalam
						tulisan tersebut, diuraikan pula bahwa ahli paleogenetik Claudio
						Ottoni membagi domestikasi kucing terjadi dalam dua jenis. Dia juga
						mengatakan kucing domestik memiliki nenek moyang yang sama yaitu
						berasal dari kucing liar Afrika. Penelitian yang dilakukan olehnya
						juga menjelaskan mengapa kucing menyebar ke seluruh dunia. Dirinya
						menganalisis, DNA purba dari sisa-sisa kucing yang ditemukan di kota
						pelabuhan, para ilmuwan menyimpulkan kucing ini dibawa menggunakan
						kapal.
					</p>
				</Paragraph>
			</section>
			<section className="storybook-page">
				<h2>Pages in Storybook</h2>
				<p>
					We recommend building UIs with a{" "}
					<a
						href="https://componentdriven.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						<strong>component-driven</strong>
					</a>{" "}
					process starting with atomic components and ending with pages.
				</p>
				<p>
					Render pages with mock data. This makes it easy to build and review
					page states without needing to navigate to them in your app. Here are
					some handy patterns for managing page data in Storybook:
				</p>
				<ul>
					<li>
						Use a higher-level connected component. Storybook helps you compose
						such data from the "args" of child component stories
					</li>
					<li>
						Assemble data in the page component from your services. You can mock
						these services out using Storybook.
					</li>
				</ul>
				<p>
					Get a guided tutorial on component-driven development at{" "}
					<a
						href="https://storybook.js.org/tutorials/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Storybook tutorials
					</a>
					. Read more in the{" "}
					<a
						href="https://storybook.js.org/docs"
						target="_blank"
						rel="noopener noreferrer"
					>
						docs
					</a>
					.
				</p>
				<div className="tip-wrapper">
					<span className="tip">Tip</span> Adjust the width of the canvas with
					the{" "}
					<svg
						width="10"
						role="img"
						aria-label="Tip"
						height="10"
						viewBox="0 0 12 12"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g fill="none" fillRule="evenodd">
							<path
								d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
								id="a"
								fill="#999"
							/>
						</g>
					</svg>
					Viewports addon in the toolbar
				</div>
			</section>
		</article>
	);
};
