import React from "react";

import { Box, Button, ButtonGroup, TextField, Pagination } from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";

import { Text, DocumentsTable } from "../../components";

const CustomTextField = styled(TextField)(({ theme }) => ({
    background: "white",
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderTopRightRadius: 0,
            borderEndEndRadius: 0,
        },
    },
}));

const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: "blue",
    color: "white",
    borderTopLeftRadius: 0,
    borderEndStartRadius: 0,
    "&:hover": {
        color: "green",
        borderColor: "green",
    },
}));

const ButtonGroupSearch = styled(ButtonGroup)(({ theme }) => ({
    marginTop: 30,
    width: "100%",
}));

const Home = () => {
    const data = [
        {
            name: "AC268 - AC268:Using IGLOO and ProASIC3 FPGAs as a System Power Sequencer Design Example App Note",
            data: "02/22/2022",
            id: 1,
        },
        {
            name: "AC268 - AC268:Using IGLOO and ProASIC3 FPGAs as a System Power Sequencer Design Example App Note",
            data: "02/22/2022",
            id: 2,
        },
        {
            name: "AC268 - AC268:Using IGLOO and ProASIC3 FPGAs as a System Power Sequencer Design Example App Note",
            data: "02/22/2022",
            id: 3,
        },
        {
            name: "AC268 - AC268:Using IGLOO and ProASIC3 FPGAs as a System Power Sequencer Design Example App Note",
            data: "02/22/2022",
            id: 4,
        },
        {
            name: "AC268 - AC268:Using IGLOO and ProASIC3 FPGAs as a System Power Sequencer Design Example App Note",
            data: "02/22/2022",
            id: 5,
        },
    ];

    return (
        <Box>
            <Text variant="h5">Browse Application Notes</Text>
            <ButtonGroupSearch>
                <CustomTextField
                    variant="outlined"
                    label="Поиск"
                    fullWidth
                    size="small"
                    // onChange={(e) => setSearchValue(e.target.value)}
                />
                <CustomButton size="small">
                    <SearchIcon />
                </CustomButton>
            </ButtonGroupSearch>
            <Box>
                <DocumentsTable data={data} />
                <Pagination sx={{ mt: 3 }} />
            </Box>
        </Box>
    );
};

export default Home;
