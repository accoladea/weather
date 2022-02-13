import { Typography } from "@mui/material"
import { SuggestionProps } from "../../../types"

export default function Suggestion({ onSuggestionSelect, item }: SuggestionProps) {
    const styles = {
        "&:hover": {
            cursor: "pointer",
            color: "white",
            bgcolor: "grey.400",
        },
    }
    const text = item.name + ", " + (item.state ? item.state + ", " : "") + item.country

    function clickHandler() {
        onSuggestionSelect(text, item)
    }

    return (
        <Typography sx={styles} onClick={clickHandler}>
            {text}
        </Typography>
    )
}
