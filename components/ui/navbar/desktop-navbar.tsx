import { Box } from "@mui/system"
import { INavImageProps } from "../../../types"
import NavbarElements from "./navbar-elements"

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
            <NavbarElements onNextImage={onNextImage} />
        </Box>
    )
}
