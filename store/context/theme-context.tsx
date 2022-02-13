import { createContext, ReactNode, useEffect, useState } from "react"

const initialValue = {
    darkMode: false,
    opacity: 70,
    toggleMode: () => {},
    changeOpacity: (value: number) => {},
}

export const ThemeContext = createContext(initialValue)

export default function ThemeContextProvider({ children }: { children: ReactNode }) {
    const [darkMode, setMode] = useState(false)
    const [opacity, setOpacity] = useState(70)
    useEffect(() => {
        setMode(window.matchMedia("(prefers-color-scheme: dark)").matches)
    }, [])

    function toggleModeHandler() {
        setMode((prevMode) => !prevMode)
    }
    function changeOpacityHandler(value: number) {
        setOpacity(value)
    }

    return (
        <ThemeContext.Provider
            value={{
                darkMode: darkMode,
                opacity,
                toggleMode: toggleModeHandler,
                changeOpacity: changeOpacityHandler,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
