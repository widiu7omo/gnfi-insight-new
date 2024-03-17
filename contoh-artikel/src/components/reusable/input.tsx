import { cn } from "@/lib/utils";

export default function Input({
	label,
	id,
	className,
	required = false,
	placeholder,
}: {
	label: string;
	required?: boolean | false;
	id: string;
	placeholder?: string;
	className?: string;
}) {
	return (
		<fieldset
			className={cn("flex flex-col items-start w-full space-y-2", className)}
		>
			<label
				htmlFor={id}
				className="text-gray-500 font-medium text-sm tracking-wide"
			>
				{label}
				{required && <span className="text-red-500 font-bold">*</span>}
			</label>
			<input
				placeholder={placeholder}
				id={id}
				type="text"
				className="mr-2 focus:outline-gray-400 px-4 w-full py-2 outline outline-1 outline-gray-300 rounded-lg placeholder:text-sm"
			/>
		</fieldset>
	);
}
