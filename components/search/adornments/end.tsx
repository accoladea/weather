import { Close as CloseIcon, Search as SearchIcon } from "@mui/icons-material"
import { Box, Divider, IconButton, InputAdornment } from "@mui/material"
import React, { memo, MutableRefObject } from "react"

type EndAdornmentProps = {
    showSuggestions: boolean
    onInputReset: () => void
    searchRef: MutableRefObject<HTMLInputElement | undefined>
    onSetShowSuggestions: (bool: boolean) => void
}

export default memo(function EndAdornment({
    showSuggestions,
    onInputReset,
    searchRef,
    onSetShowSuggestions,
}: EndAdornmentProps) {
    function closeIconButton_onClickHandler() {
        onInputReset()
        searchRef.current!.value = ""
        onSetShowSuggestions(false)
    }

    function searchIconButton_onClickHandler() {
        if (searchRef.current!.value.trim() === "") {
            searchRef.current!.focus()
            return
        }
        onSetShowSuggestions(true)
    }

    return (
        <InputAdornment position="end">
            <Box
                sx={{
                    display: "flex",
                    columnGap: "5px",
                }}
            >
                {showSuggestions && (
                    <>
                        <IconButton
                            onClick={closeIconButton_onClickHandler}
                            edge="end"
                            sx={{ color: "text.secondary" }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Divider
                            sx={{ height: 28, mt: "10px", ml: "10px" }}
                            orientation="vertical"
                        />
                    </>
                )}
                <IconButton
                    sx={{
                        color: "text.secondary",
                    }}
                    onClick={searchIconButton_onClickHandler}
                >
                    <SearchIcon />
                </IconButton>
            </Box>
        </InputAdornment>
    )
})
