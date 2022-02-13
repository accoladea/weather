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
            >
                <TableHead>
                    <TableRow sx={{ display: { sm: "none", border: 0 } }}>
                        <TableCell sx={{ border: 0 }} colSpan={4}>
                            {title}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell
                            sx={{ display: { xs: "none", sm: "table-cell" }, border: 0 }}
                        />
                        <TableCell align="right">morning</TableCell>
                        <TableCell align="right">evening</TableCell>
                        <TableCell align="right">day</TableCell>
                        <TableCell align="right" sx={{ overflow: "hidden" }}>
                            night
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell
                            sx={{
                                display: { xs: "none", sm: "table-cell" },
                                fontWeight: "bolder",
                                border: 0,
                                position: "relative",
                                top: "-30px",
                            }}
                        >
                            {title}
                        </TableCell>
                        <TableCell align="right" sx={{ border: 0 }}>
                            {Math.round(morn)}°
                        </TableCell>
                        <TableCell align="right" sx={{ border: 0 }}>
                            {Math.round(eve)}°
                        </TableCell>
                        <TableCell align="right" sx={{ border: 0 }}>
                            {Math.round(day)}°
                        </TableCell>
                        <TableCell align="right" sx={{ border: 0, overflow: "hidden" }}>
                            {Math.round(night)}°
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}
