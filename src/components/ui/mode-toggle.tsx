import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

export function ModeToggle({ className }: { className?: string }) {
    const { theme, setTheme } = useTheme();

    const isDark = theme === "dark";

    return (
        <Button
            type="button"
            variant="link"
            size="icon"
            className={cn(className)}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
        >
            {isDark ? (
                <Sun className="h-5 w-5" />
            ) : (
                <Moon className="h-5 w-5" />
            )}
        </Button>
    );
}
