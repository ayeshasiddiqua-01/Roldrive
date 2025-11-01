"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BgImage from "../../assets/images/bg-img1.png";
import Google from "../../assets/images/google.png";
import Phone from "../../assets/images/phone.png";
import Email from "../../assets/images/email.png";
import WhatsApp from "../../assets/images/whatsapp.png";
import Star from "../../assets/images/Star.png";
import LeftArrow from "../../assets/images/left-arrow.png";
import RightArrow from "../../assets/images/right-arrow.png";
import Transfer from "../../assets/images/transfer.png";
import Clock from "../../assets/images/clock.png";
import Marker from "../../assets/images/line.png";
import Location from "../../assets/images/location-marker.png";
import AddIcon from "../../assets/images/addIcon.png";
import DateImg from "../../assets/images/date.png";
import TimeImg from "../../assets/images/time.png";
import {
    Box,
    Typography,
    TextField,
    Button,
    CircularProgress,
    Grid,
} from "@mui/material";

const MainBanner = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <Box className="flex flex-col items-center justify-center h-screen bg-[#0F2438] text-white">
                <CircularProgress color="inherit" />
                <Typography variant="h6" sx={{ mt: 2 }}>
                    Preparing your luxury ride...
                </Typography>
            </Box>
        );
    }

    return (
        <Box className="relative w-full max-w-none min-h-screen text-white overflow-hidden">
            <Box className="absolute inset-0 -z-10 w-full h-full">
                <Image
                    src={BgImage}
                    alt="Luxury Car Background"
                    fill
                    className="object-cover opacity-90 translate-y-10"
                    priority
                />
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(8,18,28,1) 0%, rgba(8,18,28,1) 15%, rgba(0,0,0,0) 50%, rgba(8,18,28,0) 100%)",
                    }}
                />
            </Box>

            <Box className="flex flex-wrap justify-between mt-40! lg:w-[83vw] ml-0! lg:ml-[135px]!" id="mainContainer">
                <Box className="w-[38vw] 2xl:w-158" id="container">
                    <Typography variant="h3" component="h1" className="mb-2! 2xl:text-[52px]!">
                        <span className="highlight">Luxury</span> Chauffeur Service in London – Airport, &nbsp; Corporate & VIP Travel
                    </Typography>
                    <Typography variant="body1">
                        Professional chauffeurs, luxury vehicles and all-inclusive pricing.
                        Complimentary airport waiting, real-time flight monitoring & 24/7 support.
                    </Typography>

                    <Box className="flex flex-wrap items-center gap-5 mt-10!">
                        <Box className="flex items-center gap-2 text-sm md:text-base">
                            <Image src={Phone} alt="Contact" width={20} height={40} priority className="cursor-pointer" />
                            <Typography className="font-inter text-white! 2xl:text-[18px]!">+44 204 592 0966</Typography>
                        </Box>
                        <Box className="flex items-center gap-2 text-sm md:text-base">
                            <Image src={Email} alt="Mail" width={20} height={40} priority className="cursor-pointer" />
                            <Typography className="font-inter text-white! 2xl:text-[18px]!">booking@roldrive.com</Typography>
                        </Box>
                        <Box className="flex items-center gap-2 text-sm md:text-base bg-white/40 p-2! rounded-full!">
                            <Image src={WhatsApp} alt="WhatsApp" width={18} height={40} priority className="cursor-pointer" />
                        </Box>
                    </Box>

                    <Box className="bg-gray-800/40 w-[27vw] h-18 mt-23! py-5! relative rounded-xl border-t-2! border-t-white!" id="rating">
                        <Box>
                            <Image src={LeftArrow} alt="Leftchevron" width={20} priority className="cursor-pointer absolute -left-2 mt-2! 2xl:mt-1! 2xl:w-8 2xl:-left-4" />
                            <Image src={RightArrow} alt="Rightchevron" width={20} priority className="cursor-pointer absolute -right-2 mt-2! 2xl:mt-1! 2xl:w-8 2xl:-right-4" />
                        </Box>
                        <Box className="flex w-[65%] mx-10!">
                            <Box>
                                <Image src={Google} alt="Google" width={40} height={40} priority className="cursor-pointer 2xl:w-12" />
                            </Box>
                            <Box className="w-35 ml-2! -mt-2! 2xl:w-40">
                                <Typography className="font-inter text-white! text-sm 2xl:text-[22px]!">
                                    Google Rating
                                </Typography>
                                <Box className="flex font-inter text-white! text-sm 2xl:text-[22px]! w-full">
                                    5.0
                                    <Box className="ml-2! 400 2xl:pt-1!">
                                        <Box className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Image key={i} src={Star} alt="Rating" width={20} priority className="cursor-pointer" />
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box
                    className="bg-[#1B2D3C]/50 backdrop-blur-md rounded-2xl p-6! 2xl:py-20! 2xl:px-12!"
                    id="form"
                    sx={{
                        boxShadow: "0px 4px 30px rgba(0,0,0,0.2)",
                    }}
                >
                    <Box className="flex gap-2 pb-2!">
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                backgroundColor: "#223544",
                                borderRadius: "190px",
                                color: "white",
                                textTransform: "none",
                                "&:hover": { backgroundColor: "#2E4A61" },
                                border: "1px solid #FFFFFF66",
                            }}
                        >
                            <Image src={Transfer} alt="Rightchevron" width={20} priority className="mr-2!" />
                            Transfer
                        </Button>
                        <Button
                            variant="outlined"
                            fullWidth
                            sx={{
                                backgroundColor: "#22354466",
                                borderRadius: "190px",
                                color: "#828282",
                                textTransform: "none",
                                border: "1px solid #FFFFFF4D",
                            }}
                        >
                            <Image src={Clock} alt="Rightchevron" width={20} priority className="mr-2!" />
                            Hourly
                        </Button>
                    </Box>

                    <form>
                        <Box>
                            <Box className="relative w-full mb-2!">
                                <label className="text-xs! text-white!">Pick Up</label>
                                <div className="input-box">
                                    <Image src={Location} alt="Location" width={20} className="absolute left-3 top-9" />
                                    <input type="text" placeholder="Enter pick up location" className="pl-9! text-sm!" />
                                    <Image src={Marker} alt="Marker" width={12} className="absolute right-3 top-11" />
                                </div>
                            </Box>

                            <Box className="relative w-full mb-2!">
                                <label className="text-xs! text-white!">Drop Off</label>
                                <div className="input-box">
                                    <Image src={Location} alt="Location" width={20} className="absolute left-3 top-9" />
                                    <input type="text" placeholder="Enter Drop off location" className="pl-9! text-sm!" />
                                    <Image src={Marker} alt="Marker" width={12} className="absolute right-3 top-11" />
                                </div>
                                <Box className="flex gap-1 mt-1.5!">
                                    <Image src={AddIcon} alt="Location" width={15} />
                                    <Typography className="highlight text-xs!">Add Stop</Typography>
                                </Box>
                            </Box>

                            <Box className="flex flex-col sm:flex-row gap-2">
                                <Box className="relative">
                                    <label className="text-xs! text-white!">Date</label>
                                    <div className="input-box">
                                        <Image src={DateImg} alt="Date" width={15} className="absolute top-10 left-3" />
                                        <input placeholder="Pick up date" className="pl-9! text-sm! sm:w-45! w-100" />
                                    </div>
                                </Box>
                                <Box className="relative">
                                    <label className="text-xs! text-white!">Time</label>
                                    <div className="input-box">
                                        <Image src={TimeImg} alt="Time" width={15} className="absolute top-10 left-3" />
                                        <input placeholder="Pick up time" className="pl-9! text-sm! sm:w-45! w-100" />
                                    </div>
                                </Box>
                            </Box>
                        </Box>

                        <hr style={{ color: "#B2B2B2", marginTop: "18px" }} />
                        <Box className="flex gap-2 mt-4!">
                            <Image src={AddIcon} alt="Location" width={18} />
                            <Typography className="highlight text-sm!">Add Return Journey</Typography>
                        </Box>

                        <Box className="flex flex-col sm:flex-row items-center gap-3 mt-5!">
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    backgroundColor: "#FF5302",
                                    "&:hover": { backgroundColor: "#E03E00" },
                                    fontWeight: 600,
                                    textTransform: "none",
                                }}
                            >
                                Calculate Price
                            </Button>
                            <Button
                                variant="outlined"
                                fullWidth
                                sx={{
                                    borderColor: "gray",
                                    color: "white",
                                    "&:hover": { borderColor: "white", color: "white" },
                                    textTransform: "none",
                                }}
                            >
                                <Image src={WhatsApp} alt="WhatsApp" width={20} className="mr-2!" />
                                Chat on WhatsApp
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default MainBanner;