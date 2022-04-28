import { INavImageProps } from "../../types"
import NavList from "../layout/nav-list"
import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import MenuIcon from "@mui/icons-material/Menu"
import { IconButton } from "@mui/material"

export default function MobileNavbar({
    onNextImage,
    isMobile,
}: INavImageProps & { isMobile?: boolean }) {
    const [showDrawer, setShowDrawer] = React.useState(false)

    const handleDrawerToggle = () => {
        setShowDrawer(!showDrawer)
    }

    return (
        <div>
            <IconButton aria-label="open drawer" onClick={handleDrawerToggle}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={showDrawer} onClose={handleDrawerToggle}>
                <Box
                    sx={{
                        p: 1,
                        display: "flex",
                        flexDirection: "column",
                        flexWrap: "wrap",
                        justifyItems: "center",
                        alignItems: "center",
                        gap: 5,
                        width: 250,
                        height: "auto",
                        my: "auto",
                    }}
                >
                    <NavList onNextImage={onNextImage} isMobile={isMobile} />
                </Box>
            </Drawer>
        </div>
    )
}
