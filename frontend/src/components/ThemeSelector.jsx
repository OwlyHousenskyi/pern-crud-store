import { PaletteIcon } from "lucide-react";
import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";

export default function ThemeSelector() {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="dropdown dropdown-end">
      <button className="btn btn-ghost btn-circle">
        <PaletteIcon className="size-5 text-base-content" />
      </button>

      <div
        className="
        dropdown-content mt-2 p-1 w-56
        bg-base-100 text-base-content
        border border-base-content/10
        rounded-2xl shadow-2xl backdrop-blur-lg
      "
      >
        {THEMES.map((t) => (
          <button
            key={t.name}
            onClick={() => setTheme(t.name)}
            className={`
              w-full px-4 py-3 rounded-xl flex items-center gap-3
              transition-colors
              ${theme === t.name
                ? "bg-primary/10 text-primary"
                : "hover:bg-base-200"}
            `}
          >
            {/* Icon */}
            <PaletteIcon className="size-4" />

            {/* Label */}
            <span className="text-sm font-medium">
              {t.label}
            </span>

            {/* Color preview dots */}
            <div className="ml-auto flex gap-1">
              {t.colors.map((color, i) => (
                <span
                  key={i}
                  className="size-2.5 rounded-full border border-base-content/20"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
