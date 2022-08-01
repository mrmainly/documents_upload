import React from "react";

import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const Text = ({ children, lg, md, xs, sm, xl, ...props }) => {
    const MyText = styled(Typography)(({ theme }) => ({
        [theme.breakpoints.down("lg")]: {
            fontSize: lg ? lg : "",
        },
        [theme.breakpoints.down("xl")]: {
            fontSize: xl ? xl : "",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: md ? md : "",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: sm ? sm : "",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: xs ? xs : "",
        },
        fontStyle: "normal",
        color: "#3E3E3E",
    }));
    return <MyText {...props}>{children}</MyText>;
};

export default Text;
