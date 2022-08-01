import React from "react";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";

import { useParams } from "react-router-dom";

import { Text, FilesTable } from "../../components";

const Wrapper = styled(Box)(({ theme }) => ({
    width: "100%",
    background: "white",
}));

const Body = styled(Box)(({ theme }) => ({
    padding: 40,
}));

const TitleBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}));

const TableBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
}));

const TableCellRow = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    height: 50,
}));

const Title = styled(Text)(({ theme }) => ({
    width: 110,
}));

const DocumentDetail = () => {
    const params = useParams();

    const data = [
        {
            title: "Title",
            value: "AC268:Using IGLOO and ProASIC3 FPGAs as a System Power Sequencer Design Example App Note",
        },
        {
            title: "Name",
            value: "AC268",
        },
        {
            title: "Date",
            value: "02/22/2022",
        },
    ];

    const tableData = [
        {
            title: "System_Power_Sequencer_DF.zip",
            date: "11/19/2021",
            download: " Download",
            size: "3.0 MB",
        },
    ];

    return (
        <Box>
            <Wrapper>
                <Body>
                    <TitleBox>
                        <Text variant="h6">AC268</Text>
                        <Button variant="contained">
                            Download Application Note
                        </Button>
                    </TitleBox>
                    <TableBox>
                        {data.map((item, index) => (
                            <TableCellRow key={index}>
                                <Title variant="h6">{item.title}</Title>
                                <Text>{item.value}</Text>
                            </TableCellRow>
                        ))}
                    </TableBox>
                </Body>
            </Wrapper>
            <Text variant="h5" sx={{ mt: 5 }}>
                Files
            </Text>
            <FilesTable data={tableData} />
        </Box>
    );
};

export default DocumentDetail;
