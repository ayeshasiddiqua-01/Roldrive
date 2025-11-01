"use client";
import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Menu,
    MenuItem,
    Button,
    Box,
    Typography,
    Select,
    FormControl,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import Whatsapp from "../../assets/images/whatsapp.png";

const Navbar = () => {
    const [language, setLanguage] = useState("Eng");

    const navLinks = [
        { label: "Services", href: "/services" },
        { label: "Fleet", href: "/fleet" },
        { label: "Business Solutions", href: "/business" },
        { label: "Cities", href: "/cities" },
        { label: "Airport Transfers", href: "/airport" },
    ];

    return (
        <AppBar
            position="fixed"
            className="primary"
            elevation={0}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "100%",
                    px: { xs: 2, md: 4 },
                }}
            >
                <Box className="flex shrink-0 justify-start md:justify-start md:ml-26!">
                    <Image
                        src={logo}
                        alt="RolDrive Logo"
                        width={135}
                        height={40}
                        priority
                        className="cursor-pointer"
                    />
                </Box>

                <Box
                    className="hidden md:flex flex-1 justify-start gap-x-7 ml-10! mt-2! shrink-0"
                    sx={{
                        display: "flex",
                        "@media (max-width:1250px)": {
                            display: "none",
                        },
                    }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-[13px] font-medium tracking-wide text-white hover:text-[#00B894] transition-all duration-200 whitespace-nowrap"
                        >
                            {link.label}
                        </a>
                    ))}
                </Box>

                <Box
                    className="hidden md:flex items-center gap-x-6 mr-24! shrink-0"
                    sx={{
                        display: "flex",
                        "@media (max-width:1250px)": {
                            display: "none",
                        },
                    }}
                >
                    <Box className="flex items-center gap-x-2 cursor-pointer hover:text-green-400 transition">
                        <Image
                            src={Whatsapp}
                            alt="WhatsApp Logo"
                            width={20}
                            height={22}
                            priority
                            className="cursor-pointer"
                        />
                        <Typography
                            variant="body2"
                            className="text-white text-[14px] whitespace-nowrap"
                        >
                            Contact Us
                        </Typography>
                    </Box>

                    <FormControl variant="outlined" size="small">
                        <Select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="text-white! border! border-white/60! rounded-md! bg-transparent! hover:border-white!"
                            sx={{
                                color: "white",
                                ".MuiOutlinedInput-notchedOutline": {},
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "gray",
                                },
                                "& .MuiSvgIcon-root": { color: "white" },
                            }}
                        >
                            <MenuItem value="Eng">Eng</MenuItem>
                            <MenuItem value="Hin">Hin</MenuItem>
                        </Select>
                    </FormControl>

                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "white",
                            color: "#0F2438",
                            textTransform: "none",
                            fontWeight: 600,
                            fontSize: "14px",
                            px: 3,
                            width: "120px",
                            borderRadius: "8px",
                            "&:hover": {
                                backgroundColor: "#f2f2f2",
                            },
                        }}
                    >
                        Sign In
                    </Button>
                </Box>

                <Box
                    className="md:hidden"
                    sx={{
                        display: "none",
                        "@media (max-width:1250px)": {
                            display: "flex",
                        },
                    }}
                >
                    <IconButton color="inherit">
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;