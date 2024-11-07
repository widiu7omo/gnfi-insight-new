import { cn } from "@/lib/utils";
import type { TextareaHTMLAttributes } from "react";

type TextareaType = {
	label: string;
	helperText?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;
export default function Textarea({
	label,
	id,
	className,
	required,
	helperText,
	...rest
}: TextareaType) {
	return (
		<fieldset
			className={cn("flex flex-col items-start w-full space-y-2", className)}
		>
			<label
				htmlFor={id}
				className="text-gray-500 font-medium text-sm tracking-wide"
			>
				{label}
				{required && <span className="ml-1 text-red-500 font-bold">*</span>}
			</label>
			<textarea
				{...rest}
				className="mr-2 px-2 w-full text-sm text-neutral-800 py-2 focus:outline-gray-400 outline outline-1 outline-gray-300 rounded-lg placeholder:text-sm"
				rows={4}
			/>
			{helperText && <small className="text-gray-500">{helperText}</small>}
		</fieldset>
	);
}
