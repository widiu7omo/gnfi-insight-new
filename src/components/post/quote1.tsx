type QuoteFunType = {
	figureUrl: string;
	figureName: string;
	quote: string;
};
export default function Quote1(props: QuoteFunType) {
	return (
		<div>
			<svg
				aria-label="Hand draw sketch"
				role="img"
				className="fill-white"
				width="117"
				height="80"
				viewBox="0 0 117 80"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M53 0H0V53.9813H36.2233L42.7356 76.1818C43.0634 77.3131 43.7426 78.2672 44.6275 78.9402C45.5074 79.6115 46.6015 80 47.7607 80C50.6547 80 53 77.6113 53 74.6637V0Z"
					fill="inherit"
				/>
				<path
					d="M116.65 0.24585H63V53.8952H99.6672L106.26 75.9591C106.592 77.0834 107.278 78.0318 108.173 78.7007C109.066 79.3677 110.173 79.7539 111.345 79.7539C114.275 79.7539 116.65 77.3797 116.65 74.4503V0.24585Z"
					fill="inherit"
				/>
			</svg>
			<div className="relative flex flex-col items-center space-x-2 xl:flex-row xl:items-end">
				<p className="grow text-lg font-bold text-inherit">
					{props.quote}
				</p>

				<div className="relative w-[165px] flex-none">
					<img
						src={props.figureUrl}
						alt={props.figureName}
						className="object-contain"
					/>
				</div>
			</div>
		</div>
	);
}
