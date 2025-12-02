export default function Header() {
	return (
		<div
			className="h-screen relative bg-cover bg-[50%_30%]"
			style={{ backgroundImage: `url('/assets/kucing-sahabat-manusia/cats.png')` }}
		>
			<div className="absolute bg-gradient-to-b from-white/0 to-[#060609] top-0 bottom-0 left-0 right-0 flex items-center justify-center">
				<h2 className="text-3xl lg:text-5xl xl:text-6xl px-4 md:px-0 font-bold text-white max-w-2xl text-center leading-snug">
					Ragam Jenis Kucing Asli Indonesia
				</h2>
			</div>
		</div>
	);
}
