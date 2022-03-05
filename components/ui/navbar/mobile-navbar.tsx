import { INavImageProps } from "../../../types"
import NavbarElements from "./navbar-elements"
import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import MenuIcon from "@mui/icons-material/Menu"
import { IconButton } from "@mui/material"

export default function MobileNavbar({ onNextImage }: INavImageProps) {
    const [showDrawer, setShowDrawer] = React.useState(false)

    const toggleDrawer = (open: boolean) => (event: any) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return
        }

        setShowDrawer(open)
    }

    return (
        <div>
            <IconButton aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={showDrawer} onClose={toggleDrawer(false)}>
                <Box
                    sx={{
                        p: 1,
                        display: "flex",
                        flexDirection: "column",
                        flexWrap: "wrap",
                        justifyItems: "center",
                        alignItems: "center",
                        gap: 2,
                        width: 250,
                        height: "auto",
                        my: "auto",
                    }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <NavbarElements onNextImage={onNextImage} />
                </Box>
            </Drawer>
        </div>
    )
}
