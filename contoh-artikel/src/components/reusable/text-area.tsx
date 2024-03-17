import { cn } from "@/lib/utils";

export default function Textarea({
	label,
	id,
	className,
	placeholder,
}: { label: string; id: string; placeholder?: string; className?: string }) {
	return (
		<fieldset
			className={cn("flex flex-col items-start w-full space-y-2", className)}
		>
			<label
				htmlFor={id}
				className="text-gray-500 font-medium text-sm tracking-wide"
			>
				{label}
			</label>
			<textarea
				id={id}
				placeholder={placeholder}
				className="mr-2 px-4 w-full py-2 focus:outline-gray-400 outline outline-1 outline-gray-300 rounded-lg placeholder:text-sm"
				rows={4}
			/>
		</fieldset>
	);
}
