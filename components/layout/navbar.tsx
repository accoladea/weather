import { useMediaQuery, useTheme } from "@mui/material"
import React from "react"
import { INavImageProps } from "../../types"
import DesktopNavbar from "../ui/desktop-navbar"
import MobileNavbar from "../ui/mobile-navbar"

export default function Navbar({
    onNextImage,
    isMobile,
}: INavImageProps & { isMobile: boolean }) {
    return isMobile ? (
        <DesktopNavbar onNextImage={onNextImage} />
    ) : (
        <MobileNavbar onNextImage={onNextImage} isMobile />
    )
}
