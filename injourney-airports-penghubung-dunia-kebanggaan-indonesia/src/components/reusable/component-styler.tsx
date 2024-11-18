import { PaletteIcon } from "lucide-react";
import { useState } from "react";

type ComponentStylerType = {
    onValueChange?: (value: string) => void
    defaultValue?: string;
}
export default function ComponentStyler({ onValueChange, defaultValue }: ComponentStylerType) {
    const [state, setState] = useState(defaultValue ?? '')
    return <fieldset className="w-full space-y-1">
        <label htmlFor="sectionClassName" className="flex space-x-2">
            <PaletteIcon className="text-gray-600" size={16} />
            <span className="text-sm text-gray-500">Customize Style</span>
        </label>
        <textarea
            placeholder="Customize section with tailwind classes if you want. i.e bg-gradient-to-b from-black ...etc"
            value={state}

            onChange={(e) =>
                setState(e.target.value)
            }
            onBlur={() => onValueChange?.(state)}
            className="w-full p-2 text-sm text-gray-800 rounded-lg outline-none bg-gray-50 placeholder:text-gray-500"
        />
    </fieldset>
}