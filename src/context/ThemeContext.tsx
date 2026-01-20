import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react"

type Theme = "light" | "dark" | "system"

interface ThemeContextValue {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "theme",
}: {
    children: ReactNode
    defaultTheme?: Theme
    storageKey?: string
}) {
    const [theme, setThemeState] = useState<Theme>(() => {
        if (typeof window === "undefined") return defaultTheme
        return (localStorage.getItem(storageKey) as Theme) || defaultTheme
    })

    useEffect(() => {
        const root = document.documentElement

        root.classList.remove("light", "dark")

        if (theme === "system") {
            const systemTheme = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches
                ? "dark"
                : "light"

            root.classList.add(systemTheme)
            return
        }

        root.classList.add(theme)
    }, [theme])

    const setTheme = (theme: Theme) => {
        localStorage.setItem(storageKey, theme)
        setThemeState(theme)
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}
