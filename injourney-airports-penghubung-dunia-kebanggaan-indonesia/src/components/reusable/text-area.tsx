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
				className="text-sm font-medium tracking-wide text-gray-500"
			>
				{label}
				{required && <span className="ml-1 font-bold text-red-500">*</span>}
			</label>
			<textarea
				{...rest}
				className="w-full px-2 py-2 mr-2 text-sm rounded-lg text-neutral-800 focus:outline-gray-400 outline outline-1 outline-gray-300 placeholder:text-sm"
				rows={4}
			/>
			{helperText && <small className="text-gray-500">{helperText}</small>}
		</fieldset>
	);
}
