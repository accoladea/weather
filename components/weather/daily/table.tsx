import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material"
import { FeelsLike } from "../../../types"

export default function CustomTable({
    title,
    day,
    night,
    morn,
    eve,
}: FeelsLike & { title: string }) {
    return (
        <TableContainer>
            <Table
                sx={{
                    bgcolor: "rgba(255,255,255,0.1)",
                    borderRadius: 1,
                    mt: 3,
                    border: 0,
                    flexGrow: 1,
                    flexShrink: 0,
                }}
                size="small"
            >
                <TableHead>
                    <TableRow sx={{ border: 0 }}>
                        <TableCell
                            align="center"
                            sx={{
                                border: 0,
                                fontWeight: "bolder",
                                bgcolor: "text.primary",
                                color: "background.paper",
                                p: 0,
                                py: "2px",
                            }}
                            colSpan={4}
                        >
                            {title}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell
                            align="center"
                            sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
                        >
                            morning
                        </TableCell>
                        <TableCell
                            align="center"
                            sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
                        >
                            evening
                        </TableCell>
                        <TableCell
                            align="center"
                            sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
                        >
                            day
                        </TableCell>
                        <TableCell
                            align="center"
                            sx={{ fontSize: { xs: "0.85rem", md: "1rem" } }}
                        >
                            night
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="center" sx={{ border: 0 }}>
                            {Math.round(morn)}°
                        </TableCell>
                        <TableCell align="center" sx={{ border: 0 }}>
                            {Math.round(eve)}°
                        </TableCell>
                        <TableCell align="center" sx={{ border: 0 }}>
                            {Math.round(day)}°
                        </TableCell>
                        <TableCell align="center" sx={{ border: 0, overflow: "hidden" }}>
                            {Math.round(night)}°
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}
