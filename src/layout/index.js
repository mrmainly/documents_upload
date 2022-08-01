import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";

import { Header, Footer } from "../components";

const Layout = () => {
    return (
        <div style={{ backgroundColor: "#F7F7F7" }}>
            <Header />
            <Container sx={{ minHeight: "100vh", mt: 5 }}>
                <Outlet />
            </Container>
            <Footer />
        </div>
    );
};

export default Layout;
