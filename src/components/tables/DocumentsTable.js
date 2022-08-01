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
    "&:hover": {
        color: "#41b6e6",
    },
}));

const DocumentsTable = ({ data, loading }) => {
    const navigate = useNavigate();
    return (
        <TableContainerCus component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Название </TableCell>
                        <TableCell align="left">Дата</TableCell>
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
                                    <TextCus
                                        onClick={() =>
                                            navigate(
                                                `${ROUTES.DOCUMENT_DETAIL}/${row.id}`
                                            )
                                        }
                                    >
                                        {row.name === null ? "Нету" : row.name}
                                    </TextCus>
                                </TableCell>
                                <TableCell align="left">{row.data}</TableCell>
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

export default DocumentsTable;
