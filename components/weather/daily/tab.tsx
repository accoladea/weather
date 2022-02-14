import { Box } from "@mui/material"
import { Daily } from "../../../types"
import { getDailyDate } from "../../../utils"
import { SelectedType } from "./daily"

type TabProps = {
    item: Daily
    id: number
    selectedTab: number
    onSelectItem: (item: SelectedType) => void
    onSelectTab: (index: number) => void
}
export default function Tab({
    id,
    item,
    selectedTab,
    onSelectItem,
    onSelectTab,
}: TabProps) {
    const date = getDailyDate(item.dt, id)
    function clickTabHandler() {
        onSelectItem({ selected: item, date })
        onSelectTab(id)
    }

    return (
        <Box
            sx={{
                display: "flex",
                bgcolor: selectedTab === id ? "custom.selectedTab" : "custom.panel",
                justifyContent: "flex-start",
                alignItems: "center",
                m: 0,
                px: 2,
                py: 0,
                lineHeight: 0,
                gap: 1,
                borderRadius: 1,
                cursor: "pointer",
                flexShrink: 0,
                "&:hover": {
                    bgcolor: "custom.selectedTab",
                },
                "&:active": { bgcolor: "custom.selectedTab" },
                boxShadow: 1,
            }}
            onClick={clickTabHandler}
        >
            <Box component="span" sx={{ m: 0, p: 0, lineHeight: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                    alt={item.weather[0].description}
                    style={{ filter: "drop-shadow(0 0 0.1px grey)" }}
                />
            </Box>
            <Box component="span">{`${Math.round(item.temp.min)}°/${Math.round(
                item.temp.max
            )}°`}</Box>
            <Box
                component="span"
                sx={{
                    textAlign: "right",
                    flexGrow: 1,
                }}
            >
                {date}
            </Box>
        </Box>
    )
}
