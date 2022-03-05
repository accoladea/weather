import {
    DarkMode,
    LightMode,
    Wallpaper,
    NavigateNext,
    NavigateBefore,
    RemoveCircleOutline,
    AddCircleOutline,
} from "@mui/icons-material"
import { Button, ButtonGroup, IconButton, Slider, Tooltip } from "@mui/material"
import { Box } from "@mui/system"
import { ReactElement, useContext, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../store/redux/hooks"
import { ThemeContext } from "../../../store/context/theme-context"
import imageSlice from "../../../store/redux/imageSlice"
import locationSlice from "../../../store/redux/locationSlice"
import { INavImageProps } from "../../../types"

export default function NavbarElements({ onNextImage }: INavImageProps) {
    const isCelsius = useAppSelector((state) => state.location.isCelsius)
    const showImage = useAppSelector((state) => state.image.showImage)
    const [showController, setShowController] = useState(false)

    const themeCxt = useContext(ThemeContext)
    const [opacityVal, setOpacityVal] = useState(themeCxt.opacity)

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
        <>
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
                    // position: "fixed",
                    display: showController ? "flex" : "none",
                    flexDirection: "column",
                    // top: 55,
                    // right: "10vw",
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
                {showImage && (
                    <Slider
                        valueLabelDisplay="auto"
                        defaultValue={themeCxt.opacity}
                        value={opacityVal}
                        min={0}
                        max={100}
                        color="secondary"
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
                                    title={
                                        <Box>
                                            <span>
                                                {`Background Transparency ${value}%`}
                                            </span>
                                            <br />
                                            <span>
                                                Hint: Decrease to 0% to view the wallpaper
                                            </span>
                                        </Box>
                                    }
                                >
                                    {children}
                                </Tooltip>
                            ),
                        }}
                        onChangeCommitted={(event: any, value: any) => {
                            themeCxt.changeOpacity(value)
                            setOpacityVal(value)
                        }}
                        sx={{ mt: 1 }}
                    />
                )}
            </Box>
        </>
    )
}
