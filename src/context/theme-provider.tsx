import { useRouter } from "@tanstack/react-router";
import {
  createContext,
  type PropsWithChildren,
  use,
  useCallback,
  useEffect,
  useState,
} from "react";

import { setThemeServerFn, type T as Theme } from "@/server/theme";

type ThemeContextVal = { theme: Theme; setTheme: (val: Theme) => void };
type Props = PropsWithChildren<{ defaultTheme: Theme }>;

const ThemeContext = createContext<ThemeContextVal | null>(null);
const MEDIA = "(prefers-color-scheme: dark)";

export function ThemeProvider({ children, defaultTheme }: Props) {
  const router = useRouter();
  const [theme, setThemeState] = useState<Theme>(defaultTheme);

  const applyTheme = useCallback((currentTheme: Theme) => {
    const root = window.document.documentElement;
    let targetTheme: "dark" | "light";

    if (currentTheme === "system") {
      targetTheme = window.matchMedia(MEDIA).matches ? "dark" : "light";
    } else {
      targetTheme = currentTheme;
    }

    // Only update if the target theme is not already applied
    if (!root.classList.contains(targetTheme)) {
      root.classList.remove("light", "dark");
      root.classList.add(targetTheme);
    }
  }, []);

  const handleMediaQuery = useCallback(
    (_?: MediaQueryListEvent | MediaQueryList) => {
      if (theme !== "system") return;
      applyTheme("system");
    },
    [theme, applyTheme],
  );

  // Listen for system preference changes
  useEffect(() => {
    const media = window.matchMedia(MEDIA);

    media.addEventListener("change", handleMediaQuery);
    handleMediaQuery(media);

    return () => media.removeEventListener("change", handleMediaQuery);
  }, [handleMediaQuery]);

  // Apply theme when it changes
  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  function setTheme(val: Theme) {
    setThemeState(val);
    setThemeServerFn({ data: val }).then(() => router.invalidate());
  }

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
}

export function useTheme() {
  const val = use(ThemeContext);
  if (!val) throw new Error("useTheme called outside of ThemeProvider!");
  return val;
}
