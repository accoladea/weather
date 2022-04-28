import { Box, Typography } from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { memo } from "react"

export default memo(function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: "custom.background", opacity: 0.5 }}>
            <Typography
                variant="body1"
                textAlign="center"
                py={1}
                color="background"
                sx={{
                    textShadow: "1px 1px 15px white",
                }}
            >
                Made with{" "}
                <FavoriteIcon
                    fontSize="small"
                    sx={{
                        background: "rgba(255,255,255,0.1)",
                        borderRadius: "50%",
                        position: "relative",
                        top: "5px",
                    }}
                />{" "}
                by Islomzhan
            </Typography>
        </Box>
    )
})
