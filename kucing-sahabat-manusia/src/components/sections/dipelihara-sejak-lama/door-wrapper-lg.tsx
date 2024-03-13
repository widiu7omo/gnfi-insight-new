import Paragraph from "@/components/reusable/paragraph";
import Door from "./door";

export default function DoorWrapperLg() {
	return (
		<>
			<div className="relative max-w-[65ch] mx-auto space-y-8 z-30">
				<h3 className="w-full sm:w-[50%] px-4 xl:px-0 xl:w-[30rem] text-left text-xl lg:text-2xl xl:text-4xl font-bold leading-snug text-white">
					Ribuan Tahun Lalu, kedekatan manusia dengan kucing mulai terjalin
				</h3>
				<Paragraph className="text-white">
					<p className="w-[70%] md:w-[250px]">
						Kucing merupakan hasil domestikasi dari miacis yang juga nenek
						moyang dari anjing dan beruang
					</p>
					<p className="w-[50%] md:w-[325px]">
						Macis kemudian mengalami evolusi menjadi kucing besar seperti singa
						dan harimau yang kemudian berevolusi menjadi nenek moyang kucing
						domestik
					</p>
				</Paragraph>
			</div>
			<Door />
		</>
	);
}
