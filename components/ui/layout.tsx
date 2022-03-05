import { Box, CssBaseline, NoSsr, PaletteMode } from "@mui/material"
import { ReactNode, useContext, useRef, useState } from "react"
import { createTheme, ThemeProvider } from "@mui/material"
import { ThemeContext } from "../../store/context/theme-context"
import { useImages } from "../../store/react-query/wallpaper"
import { useAppSelector } from "../../store/redux/hooks"
import Footer from "./footer"
import Header from "./header"

const lightStyles = (showImage: boolean, opacity: number) => {
    return {
        background: { paper: "#eeeeee", default: "#e0e0e0" },
        info: { light: "#616161", main: "#424242", dark: "#212121" },
        secondary: { light: "#bdbdbd", main: "#9e9e9e", dark: "#757575" },

        custom: {
            tab: showImage ? "rgba(255,255,255,1)" : "rgba(0,0,0,0.1)",
            card: showImage ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.3)",
            panel: showImage ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.3)",
            background: showImage
                ? `rgba(255,255,255,${opacity / 100})`
                : "rgba(255,255,255,0.5)",
            selectedTab: "lightgray",
        },
    }
}
const darkStyles = (showImage: boolean, opacity: number) => {
    return {
        info: { light: "#bdbdbd", main: "#9e9e9e", dark: "#757575" },
        secondary: { light: "#bdbdbd", main: "#9e9e9e", dark: "#757575" },
        custom: {
            tab: showImage ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.6)",
            card: showImage ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.3)",
            panel: showImage ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.3)",
            background: showImage
                ? `rgba(0,0,0,${opacity / 100})`
                : "rgba(255,255,255,0.05)",
            selectedTab: "gray",
        },
    }
}

const themeSwitchHandler = (darkMode: boolean, showImage: boolean, opacity: number) => {
    let mode: PaletteMode = darkMode ? "dark" : "light"
    return {
        palette: {
            mode,
            ...(darkMode
                ? darkStyles(showImage, opacity)
                : lightStyles(showImage, opacity)),
        },
    }
}

export default function Layout({ children }: { children: ReactNode }) {
    const { opacity } = useContext(ThemeContext)
    const showImage = useAppSelector((state) => state.image.showImage)
    const { darkMode } = useContext(ThemeContext)
    const customTheme = createTheme(themeSwitchHandler(darkMode, showImage, opacity))
    const { images } = useImages()
    const [imageId, setImageId] = useState(0)

    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <Box
                sx={{
                    backgroundImage:
                        showImage && images && images.length > 0
                            ? `url(${images[imageId % images.length]})`
                            : "",
                    backgroundSize: "100%",
                    width: "100%",
                    height: "auto",
                    minHeight: "100vh",
                }}
            >
                <Header onNextImage={(i) => setImageId((prev) => prev + i)} />
                <Box component="main" sx={{ minHeight: "calc(85vh)" }}>
                    {children}
                </Box>
                <Footer />
            </Box>
        </ThemeProvider>
    )
}
