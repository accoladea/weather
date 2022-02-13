import { Box, Typography } from "@mui/material"
import React, { useState } from "react"
import { useWeather } from "../../../store/react-query/weather"
import { Daily } from "../../../types"
import { SelectedType } from "./daily"
import Tab from "./tab"
import Time from "./time"

type TabsProps = {
    daily: Daily[]
    onSelectItem: (item: SelectedType) => void
}

export default function Tabs({ daily, onSelectItem }: TabsProps) {
    const [selectedTab, setSelectedTab] = useState(0)
    const timezone: string = useWeather((state) => state.timezone).data

    const tabs = daily.map((item, index) => {
        return (
            <Tab
                key={index}
                id={index}
                item={item}
                selectedTab={selectedTab}
                onSelectTab={(index: number) => setSelectedTab(index)}
                onSelectItem={onSelectItem}
            />
        )
    })
    const item = daily[selectedTab]
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                flex: "1 0 355px",
                rowGap: 2,
            }}
        >
            <Typography sx={{ color: "text.secondary" }}>
                FORECAST FOR THE NEXT 7 DAYS
            </Typography>
            {tabs}
            <Box
                sx={{
                    bgcolor: "custom.panel",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    p: 2,
                    justifyContent: "center",
                    borderRadius: 1,
                }}
            >
                <Time title="sunrise" dt={item.sunrise} timezone={timezone} />
                <Time title="sunset" dt={item.sunset} timezone={timezone} />
                <Time title="moonrise" dt={item.moonrise} timezone={timezone} />
                <Time title="moonset" dt={item.moonset} timezone={timezone} />
            </Box>
        </Box>
    )
}
