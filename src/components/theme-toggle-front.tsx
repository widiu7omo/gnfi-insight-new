import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "@/context/theme-provider";
import { Toggle } from "./ui/toggle";

export function ThemeToggleFront() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex ">
      <Toggle
        onPressedChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        variant="default"
        size="lg"
        className="flex-1 border-0 bg-transparent!"
        aria-label="Toggle light theme"
      >{theme === 'light' ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
      </Toggle>
    </div>
  );
}
