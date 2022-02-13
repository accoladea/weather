import { Typography, Box } from "@mui/material"
import React from "react"
import { toCapitalize } from "../../../../utils"

export default function Description({ description }: { description: string }) {
    return (
        <Box display="flex" flexWrap="wrap" gap="20px">
            <Typography variant="h5" paragraph>
                {toCapitalize(description)}
            </Typography>
        </Box>
    )
}
