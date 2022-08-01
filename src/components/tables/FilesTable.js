import * as React from "react";

import {
    Paper,
    TableRow,
    TableHead,
    TableContainer,
    TableCell,
    TableBody,
    Table,
    Box,
} from "@mui/material";
import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Text } from "..";
import ROUTES from "../../routes";

const Arrow = styled(Box)(({ theme }) => ({
    cursor: "pointer",
    transition: "all 0.5s ease",
    color: "#55CD61",
    "&:hover": {
        color: "red",
    },
}));

const TableContainerCus = styled(TableContainer)(({ theme }) => ({
    marginTop: 20,
}));

const TextCus = styled(Text)(({ theme }) => ({
    cursor: "pointer",
    fontWeight: 600,
    "&:hover": {
        color: "#41b6e6",
    },
}));

const FilesTable = ({ data, loading }) => {
    const navigate = useNavigate();
    return (
        <TableContainerCus component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ background: "#41b6e6" }}>
                    <TableRow>
                        <TableCell align="left">
                            <Text sx={{ color: "white" }} variant="body1">
                                Title
                            </Text>
                        </TableCell>
                        <TableCell align="left">
                            <Text sx={{ color: "white" }} variant="body1">
                                Download
                            </Text>
                        </TableCell>
                        <TableCell align="left">
                            <Text sx={{ color: "white" }} variant="body1">
                                Date
                            </Text>
                        </TableCell>
                        <TableCell align="left">
                            <Text sx={{ color: "white" }} variant="body1">
                                Size
                            </Text>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.length ? (
                        data.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell
                                    component="th"
                                    scope="row"
                                    align="left"
                                >
                                    <Text>{row.title}</Text>
                                </TableCell>
                                <TableCell align="left">
                                    <TextCus
                                        onClick={() =>
                                            navigate(
                                                `${ROUTES.DOCUMENT_DETAIL}/${row.id}`
                                            )
                                        }
                                    >
                                        {row.download}
                                    </TextCus>
                                </TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">{row.size}</TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell scope="row" align="center">
                                Нету данных
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainerCus>
    );
};

export default FilesTable;
