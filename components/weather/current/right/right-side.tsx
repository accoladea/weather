import { Box } from "@mui/material"
import MainTemp, { MainTempProps } from "./main-temp"
import Specs, { SpecsProps } from "./specs"

type RightHalfProps = MainTempProps & SpecsProps

export default function RightHalf({
    temp,
    feels_like,
    humidity,
    windSpeed,
    clouds,
    unit,
}: RightHalfProps) {
    return (
        <Box sx={{ width: { xs: "100%", md: "inherit" } }}>
            <MainTemp temp={temp} unit={unit} />
            <Specs
                feels_like={feels_like}
                humidity={humidity}
                windSpeed={windSpeed}
                clouds={clouds}
                unit={unit}
            />
        </Box>
    )
}
