export default function BlockNavbar() {
	return (
		<div className="px-4 py-2">
			<h6 className="text-xl font-semibold">Navbar Configuration</h6>
			<div className="grid grid-cols-4 gap-4">
				<fieldset className="flex items-center">
					<input id="blurEffect" type="checkbox" className="mr-2" />
					<label htmlFor="blurEffect" className="text-gray-700 text-sm">
						Blur Transparent Navbar
					</label>
				</fieldset>
			</div>
		</div>
	);
}
