import { cn } from "@/lib/utils";
import type { InputHTMLAttributes } from "react";

type InputType = {
	label: string;
	inputClassName?: string;
	helperText?: string
} & InputHTMLAttributes<HTMLInputElement>;
export default function Input({
	className,
	label,
	helperText,
	required = false,
	inputClassName,
	...rest
}: InputType) {
	return (
		<fieldset
			className={cn("flex flex-col items-start w-full space-y-2", className)}
		>
			<label
				htmlFor={rest.id}
				className="text-sm font-medium text-gray-500"
			>
				{label}
				{required && <span className="ml-1 font-bold text-red-500">*</span>}
			</label>
			<input
				{...rest}
				className={cn(
					"mr-2 focus:outline-gray-400 px-4 w-full py-2 outline outline-1 outline-gray-300 rounded-lg placeholder:text-sm",
					inputClassName,
				)}
			/>
			{helperText && <small className="text-gray-500">{helperText}</small>}
		</fieldset>
	);
}
