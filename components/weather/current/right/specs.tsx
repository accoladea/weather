import React from "react"
import SpecItem from "./spec-item"

export type SpecsProps = {
    feels_like: number
    humidity: number
    windSpeed: number
    clouds: number
    unit: string
}

export default function Specs({
    feels_like,
    humidity,
    windSpeed,
    clouds,
    unit,
}: SpecsProps) {
    return (
        <>
            <SpecItem
                key={"feels like"}
                specName={"feels like"}
                specValue={Math.round(feels_like) + unit}
            />
            <SpecItem key={"humidity"} specName={"humidity"} specValue={humidity + "%"} />
            <SpecItem key={"clouds"} specName={"clouds"} specValue={clouds + "%"} />
            <SpecItem
                key={"wind speed"}
                specName={"wind speed"}
                specValue={windSpeed.toFixed(1) + " mph"}
            />
        </>
    )
}
