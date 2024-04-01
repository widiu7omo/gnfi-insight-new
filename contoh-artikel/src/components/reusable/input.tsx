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
				className="text-gray-500 text-sm font-medium"
			>
				{label}
				{required && <span className="ml-1 text-red-500 font-bold">*</span>}
			</label>
			<input
				{...rest}
				className={cn(
					"mr-2 focus:outline-gray-400 px-4 w-full py-2 outline outline-1 outline-gray-300 rounded-lg placeholder:text-sm",
					inputClassName,
				)}
			/>
			{helperText && <small>{helperText}</small>}
		</fieldset>
	);
}
