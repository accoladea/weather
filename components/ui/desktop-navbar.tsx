import { Box } from "@mui/system"
import { INavImageProps } from "../../types"
import NavList from "../layout/nav-list"

export default function DesktopNavbar({ onNextImage }: INavImageProps) {
    return (
        <Box
            sx={{
                p: 1,
                display: "flex",
                flexWrap: "wrap",
                justifyItems: "center",
                alignItems: "center",
                gap: 2,
            }}
        >
            <NavList onNextImage={onNextImage} />
        </Box>
    )
}
