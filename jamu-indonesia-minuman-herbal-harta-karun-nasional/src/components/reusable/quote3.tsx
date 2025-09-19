type QuoteFunType = {
	figureUrl: string;
	figureName: string;
	figureDesc?: string;
	quote: string;
};
export default function Quote3(props: QuoteFunType) {
	return (
		<div className="flex items-center justify-center bg-[#231F20] px-4 xl:px-0">
			<div className="max-w-[65ch] space-y-12 py-8">
				<div className="flex flex-col space-x-0 space-y-4 xl:flex-row xl:space-x-4 xl:space-y-0">
					<svg
						className="w-[150px] xl:h-[196px] xl:w-[250px]"
						viewBox="0 0 250 196"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						role="img"
						aria-label="Quote Icon"
					>
						<path
							d="M136.769 195.377L136.769 99.3176C136.769 26.8632 197.825 0 197.825 0L202.709 8.14109C202.709 8.14109 166.075 45.5883 172.588 82.2212L249.924 82.2212L249.924 195.377H136.769Z"
							fill="#F39200"
						/>
						<path
							d="M-3.05176e-05 195.38L-3.05176e-05 99.3196C-3.05176e-05 26.8647 61.0569 0.00195312 61.0569 0.00195312L65.9423 8.14289C65.9423 8.14289 29.3055 45.59 35.8193 82.2228L113.154 82.2228L113.154 195.38H-3.05176e-05Z"
							fill="#F39200"
						/>
					</svg>
					<div className="relative text-2xl font-bold text-white">
						<p>{props.quote}</p>
						<div className="absolute -bottom-[20px] right-0 size-[54px]">
							<svg
								width="100%"
								height="100%"
								viewBox="0 0 250 196"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								aria-label="Quote Icon"
								className="rotate-180"
							>
								<path
									d="M136.769 195.377L136.769 99.3176C136.769 26.8632 197.825 0 197.825 0L202.709 8.14109C202.709 8.14109 166.075 45.5883 172.588 82.2212L249.924 82.2212L249.924 195.377H136.769Z"
									fill="#F39200"
								/>
								<path
									d="M-3.05176e-05 195.38L-3.05176e-05 99.3196C-3.05176e-05 26.8647 61.0569 0.00195312 61.0569 0.00195312L65.9423 8.14289C65.9423 8.14289 29.3055 45.59 35.8193 82.2228L113.154 82.2228L113.154 195.38H-3.05176e-05Z"
									fill="#F39200"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center space-x-0 space-y-4 xl:flex-row xl:space-x-12 xl:space-y-0">
					<img
						src={props.figureUrl}
						alt="Bambang"
						className="size-[200px]  flex-none"
					/>
					<div className="flex flex-col items-center space-y-2 xl:items-start xl:space-y-0">
						<p className="text-center text-xl font-bold text-[#F39200] xl:text-left">
							{props.figureName}
						</p>
						<p className="text-center text-white xl:text-left">
							{props.figureDesc}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
