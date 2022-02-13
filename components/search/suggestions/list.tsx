import Suggestion from "./suggestion"
import { SuggestionsProps } from "../../../types"
import { Box } from "@mui/material"
import { SuggestType } from "../../../types"
import { useQueryLocation } from "../../../store/react-query/query-location"

export default function Suggestions({
    searchTerm,
    onSuggestionSelect,
    coord,
}: SuggestionsProps) {
    const { data, status } = useQueryLocation(searchTerm, coord)

    switch (status) {
        case "idle":
            return <p>Waiting..</p>
        case "loading":
            return <p>Loading..</p>
        case "error":
            return <Box sx={{ mx: "51px", color: "error" }}>Failed to fetch..</Box>
        default:
            break
    }

    let text = "No cities or towns were found.."

    if (data.length > 0) {
        text = data.map((item: SuggestType, index: number) => (
            <Suggestion key={index} onSuggestionSelect={onSuggestionSelect} item={item} />
        ))
    }

    return <Box sx={{ width: "inherit", mx: "51px" }}>{text}</Box>
}
