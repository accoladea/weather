import { Typography, Box } from "@mui/material"

export default function SpecItem({
    specName,
    specValue,
}: {
    specName: string
    specValue: string
}) {
    return (
        <Typography
            variant="h6"
            paragraph
            sx={{
                display: "flex",
                justifyContent: "space-between",
                m: 0,
                p: 0,
                gap: 3,
            }}
        >
            <Box component="span">{specName}</Box>
            <Box component="span"> {specValue}</Box>
        </Typography>
    )
}
