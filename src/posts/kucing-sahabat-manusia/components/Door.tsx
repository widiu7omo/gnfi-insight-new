export default function Door() {
	return (
		<div className="absolute xl:right-[10rem] right-0 bottom-0 ">
			<div className="relative flex items-center justify-center pl-32">
				<svg
					aria-label="Door"
					role="img"
					className="w-full h-[300px] sm:h-[500px] md:w-[318px] md:h-[722px]"
					viewBox="0 0 318 722"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g filter="url(#filter0_i_53_3315)">
						<rect width="318" height="722" fill="#808080" />
					</g>
					<path d="M216 661H318V722H0L216 661Z" fill="#CFCFCF" />
					<defs>
						<filter
							id="filter0_i_53_3315"
							x="0"
							y="0"
							width="318"
							height="726"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="BackgroundImageFix"
								result="shape"
							/>
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dy="4" />
							<feGaussianBlur stdDeviation="2" />
							<feComposite
								in2="hardAlpha"
								operator="arithmetic"
								k2="-1"
								k3="1"
							/>
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
							/>
							<feBlend
								mode="normal"
								in2="shape"
								result="effect1_innerShadow_53_3315"
							/>
						</filter>
					</defs>
				</svg>
				<img
					className="absolute right-0 h-[200px] sm:h-[300px] md:h-auto bottom-0 md:top-4 z-10 "
					src={`/assets/kucing-sahabat-manusia/grand-cat.png`}
					alt="Grand Cat"
				/>
				<img
					className="absolute z-10 h-[200px] sm:h-[260px] md:h-[500px] bottom-0 md:mt-[10rem] right-0 md:mr-[4rem]"
					src={`/assets/kucing-sahabat-manusia/lion.png`}
					alt="Lion"
				/>
				<img
					className="absolute z-10 -bottom-[2rem] left-0 w-[100px] md:w-[200px]"
					src={`/assets/kucing-sahabat-manusia/cat.png`}
					alt="Cat"
				/>
			</div>
		</div>
	);
}
