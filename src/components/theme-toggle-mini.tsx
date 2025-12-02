import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "@/context/theme-provider";

export function ThemeToggleMini() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-1 px-2 py-1.5">
      <Toggle
        pressed={theme === "light"}
        onPressedChange={(pressed) => pressed && setTheme("light")}
        variant="outline"
        size="sm"
        className="flex-1"
        aria-label="Toggle light theme"
      >
        <SunIcon className="h-4 w-4" />
      </Toggle>
      <Toggle
        pressed={theme === "dark"}
        onPressedChange={(pressed) => pressed && setTheme("dark")}
        variant="outline"
        size="sm"
        className="flex-1"
        aria-label="Toggle dark theme"
      >
        <MoonIcon className="h-4 w-4" />
      </Toggle>
      <Toggle
        pressed={theme === "system"}
        onPressedChange={(pressed) => pressed && setTheme("system")}
        variant="outline"
        size="sm"
        className="flex-1"
        aria-label="Toggle system theme"
      >
        <MonitorIcon className="h-4 w-4" />
      </Toggle>
    </div>
  );
}
