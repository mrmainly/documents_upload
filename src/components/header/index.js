import React, { useState, useEffect } from "react";

import {
    AppBar,
    Toolbar,
    MenuItem,
    Box,
    Drawer,
    IconButton,
    Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const Root = styled("div")(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 80,
}));
const BoxLinks = styled(Box)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
        justifyContent: "center",
    },
}));
const BoxLogo = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
        marginLeft: 0,
    },
}));

const Cuslink = styled(Link)(({ theme }) => ({
    color: "black",
    textDecoration: "none",
    marginLeft: 5,
    marginRight: 5,
    [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
        justifyContent: "center",
        marginTop: theme.spacing(1),
        color: "black",
    },
}));
const BoxLogin = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("lg")]: {
        alignItems: "end",
        height: "100%",
    },
}));

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    fontSize: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const Header = () => {
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });
    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 1200
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({
                      ...prevState,
                      mobileView: false,
                  }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const headerData = [
        {
            text: "Products",
            link: "/faq",
        },
        {
            text: "Solutions",
            link: "/about",
        },
        {
            text: "Tools and Resources",
            link: "/",
        },
        {
            text: "Support",
            link: "/contacts",
        },
        {
            text: "Education",
            link: "/login1",
        },
        {
            text: "About",
            link: "/login2",
        },
        {
            text: "Order Now",
            link: "/login3",
        },
    ];

    const Links = () => {
        return (
            <BoxLinks>
                {headerData.map((item) => (
                    <Cuslink to={item.link} key={item.link}>
                        <CustomMenuItem>{item.text}</CustomMenuItem>
                    </Cuslink>
                ))}
            </BoxLinks>
        );
    };
    const Logo = () => {
        return (
            <BoxLogo>
                <img src={"/img/microchip.png"} />
            </BoxLogo>
        );
    };
    const Desktop = () => {
        return (
            <Root>
                <Logo />
                <Links />
            </Root>
        );
    };
    const Mobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                }}
            >
                <IconButton
                    {...{
                        edge: "start",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                    style={{ color: "#1B1642" }}
                >
                    <MenuIcon />
                </IconButton>
                <Logo />
                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <Box
                        style={{
                            width: 250,
                            padding: 15,
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                        }}
                    >
                        <Links />
                    </Box>
                </Drawer>
            </Box>
        );
    };
    return (
        <AppBar position="static" sx={{ background: "white" }}>
            <Container>
                <Toolbar>{mobileView ? Mobile() : Desktop()}</Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
