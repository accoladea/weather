import { Box } from "@mui/material"
import { useAppSelector } from "../../../store/redux/hooks"

import Tabs from "./tabs"
import Panel from "./panel"
import { useState } from "react"
import { Daily } from "../../../types"
import { useWeather } from "../../../store/react-query/weather"
import { getDailyDate } from "../../../utils"

export interface SelectedType {
    selected: Daily
    date: string
}

export default function DailyWeather() {
    const queryInfo = useWeather((state) => state.daily)
    const daily: Daily[] | undefined = queryInfo.data

    const [selectedItem, setSelectedItem] = useState<SelectedType | undefined>()
    const celsius = useAppSelector((state) => state.location.isCelsius)

    if (!daily) return null

    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                borderRadius: 1,
                columnGap: 1,
                rowGap: 3,
            }}
        >
            <Tabs
                daily={daily}
                onSelectItem={(item: SelectedType) => {
                    setSelectedItem(item)
                }}
            />
            <Panel
                selectedItem={
                    selectedItem ?? {
                        selected: daily[0],
                        date: getDailyDate(daily[0].dt, 0),
                    }
                }
                celsius={celsius}
            />
        </Box>
    )
}
