import {
    DarkMode,
    LightMode,
    Wallpaper,
    NavigateNext,
    NavigateBefore,
    RemoveCircleOutline,
    AddCircleOutline,
} from "@mui/icons-material"
import {
    AppBar,
    Button,
    ButtonGroup,
    IconButton,
    Slider,
    Toolbar,
    Tooltip,
    Typography,
} from "@mui/material"
import { Box } from "@mui/system"
import { ReactElement, useContext, useRef, useState } from "react"
import { ThemeContext } from "../../store/context/theme-context"
import { useAppDispatch, useAppSelector } from "../../store/redux/hooks"
import imageSlice from "../../store/redux/imageSlice"
import locationSlice from "../../store/redux/locationSlice"
import Link from "next/Link"

export default function Navbar({ onNextImage }: { onNextImage: (i: number) => void }) {
    const ref = useRef<HTMLDivElement>()
    const themeCxt = useContext(ThemeContext)
    const isCelsius = useAppSelector((state) => state.location.isCelsius)
    const showImage = useAppSelector((state) => state.image.showImage)
    const [showController, setShowController] = useState(false)

    const dispatch = useAppDispatch()

    function tempToggleHandler() {
        dispatch(locationSlice.actions.toggleTemperatureUnit())
    }

    function toggleImageHandler() {
        dispatch(imageSlice.actions.toggleShowImage())
    }

    const backgroundSliderStyles = {
        color: themeCxt.darkMode ? "white" : "black",
        bgcolor: themeCxt.darkMode ? "black" : "white",
        "&:hover": {
            bgcolor: "darkgrey",
        },
    }
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
                <Box
                    ref={ref}
                    sx={{
                        p: 1,
                        display: "flex",
                        flexWrap: "wrap",
                        justifyItems: "center",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <ButtonGroup color="info" size="small" sx={{ height: 35, width: 90 }}>
                        <Button
                            variant={!isCelsius ? "contained" : "outlined"}
                            onClick={!isCelsius ? undefined : tempToggleHandler}
                            fullWidth
                        >
                            °F
                        </Button>
                        <Button
                            fullWidth
                            variant={isCelsius ? "contained" : "outlined"}
                            onClick={isCelsius ? undefined : tempToggleHandler}
                        >
                            °C
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup color="info" size="small" sx={{ height: 35, width: 90 }}>
                        <Button
                            variant={!themeCxt.darkMode ? "contained" : "outlined"}
                            onClick={!themeCxt.darkMode ? undefined : themeCxt.toggleMode}
                        >
                            <LightMode fontSize="small" />
                        </Button>
                        <Button
                            variant={themeCxt.darkMode ? "contained" : "outlined"}
                            onClick={themeCxt.darkMode ? undefined : themeCxt.toggleMode}
                        >
                            <DarkMode fontSize="small" />
                        </Button>
                    </ButtonGroup>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            height: "auto",
                            width: "auto",
                        }}
                    >
                        <IconButton
                            onClick={() => setShowController((prev) => !prev)}
                            sx={{
                                color: showController ? "background.paper" : "info.main",
                                bgcolor: showController ? "info.main" : "transparent",
                                "&:hover": {
                                    bgcolor: showController ? "info.dark" : "",
                                },
                            }}
                        >
                            <Wallpaper />
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                            position: "fixed",
                            display: showController ? "flex" : "none",
                            flexDirection: "column",
                            top:
                                (ref.current?.offsetTop ?? 0) +
                                (ref.current?.offsetHeight ?? 0) +
                                5,
                            right: "10vw",
                            width: "150px",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                flexWrap: "wrap",
                                gap: 1,
                                "& > *": {
                                    boxShadow: 1,
                                },
                            }}
                        >
                            <Tooltip title="Previous Wallpaper">
                                <IconButton
                                    onClick={() => onNextImage(-1)}
                                    disabled={!showImage}
                                    sx={backgroundSliderStyles}
                                >
                                    <NavigateBefore />
                                </IconButton>
                            </Tooltip>
                            {showImage ? (
                                <Tooltip title="Hide Wallpaper">
                                    <IconButton
                                        onClick={toggleImageHandler}
                                        sx={backgroundSliderStyles}
                                    >
                                        <RemoveCircleOutline fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                            ) : (
                                <Tooltip title="Show Wallpaper">
                                    <IconButton
                                        onClick={toggleImageHandler}
                                        sx={backgroundSliderStyles}
                                    >
                                        <AddCircleOutline fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                            )}
                            <Tooltip title="Next Wallpaper">
                                <IconButton
                                    onClick={() => onNextImage(1)}
                                    disabled={!showImage}
                                    sx={backgroundSliderStyles}
                                >
                                    <NavigateNext />
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Slider
                            valueLabelDisplay="auto"
                            defaultValue={themeCxt.opacity}
                            min={0}
                            max={100}
                            color="secondary"
                            disabled={!showImage}
                            components={{
                                ValueLabel: ({
                                    children,
                                    value,
                                }: {
                                    children: ReactElement<any, any>
                                    value: number
                                }) => (
                                    <Tooltip
                                        enterTouchDelay={0}
                                        placement="bottom"
                                        title={`Background Transparency ${value}%`}
                                    >
                                        {children}
                                    </Tooltip>
                                ),
                            }}
                            onChangeCommitted={(event: any, value: any) =>
                                themeCxt.changeOpacity(value)
                            }
                            sx={{ mt: 1 }}
                        />
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
