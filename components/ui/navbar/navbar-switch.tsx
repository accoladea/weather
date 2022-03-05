import { useMediaQuery, useTheme } from "@mui/material"
import React from "react"
import { INavImageProps } from "../../../types"
import DesktopNavbar from "./desktop-navbar"
import MobileNavbar from "./mobile-navbar"

export default function NavbarSwitch({ onNextImage }: INavImageProps) {
    const theme = useTheme()
    const md = useMediaQuery(theme.breakpoints.up("md"))
    return md ? (
        <DesktopNavbar onNextImage={onNextImage} />
    ) : (
        <MobileNavbar onNextImage={onNextImage} />
    )
}
