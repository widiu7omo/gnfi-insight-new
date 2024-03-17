export default function BlockNavbar() {
	return (
		<div className="p-4">
			<h6 className="text-xl font-semibold">Navbar Configuration</h6>
			<div className="grid grid-cols-4 gap-4 pt-3">
				<fieldset className="flex items-center">
					<input id="blurEffect" type="checkbox" className="mr-2" />
					<label
						htmlFor="blurEffect"
						className="text-gray-500 font-medium text-sm tracking-wide"
					>
						Blur Transparent Navbar
					</label>
				</fieldset>
			</div>
		</div>
	);
}
