import { AppBar, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Link from "next/Link"
import NavbarElements from "./navbar/navbar-elements"
import NavbarSwitch from "./navbar/navbar-switch"

export default function Header({ onNextImage }: { onNextImage: (i: number) => void }) {
    return (
        <AppBar
            position="static"
            sx={{
                bgcolor: "custom.background",
                boxShadow: 1,
                height: "auto",
            }}
        >
            <Toolbar
                sx={{
                    maxWidth: (t) => t.breakpoints.values.lg,
                    width: "100%",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Box
                    sx={{
                        color: "text.primary",
                        "& a": {
                            textDecoration: "none",
                            color: "text.primary",
                        },
                    }}
                >
                    <Typography variant="h5" component="h1">
                        <Link href="/">BugunHavo</Link>
                    </Typography>
                    <Typography variant="body2" component="h1">
                        Weather Forecast
                    </Typography>
                </Box>

                <NavbarSwitch onNextImage={onNextImage} />
            </Toolbar>
        </AppBar>
    )
}
