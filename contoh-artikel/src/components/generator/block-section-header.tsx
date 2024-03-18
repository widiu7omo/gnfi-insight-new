type BlockSectionHeaderType = {
	sectionId: string;
	index: number;
};
export default function BlockSectionHeader({
	sectionId,
	index,
}: BlockSectionHeaderType) {
	return <div>Block Section Heading</div>;
}
