"use client";

import React, { useState } from "react";
import { Box, Typography, Button, Grid, } from "@mui/material";
import Image from "next/image";
import BgImage from "../../assets/images/bgimg3.jpg";
import Phone from "../../assets/images/phone.png";
import Email from "../../assets/images/email.png";
import Transfer from "../../assets/images/transfer.png";
import Clock from "../../assets/images/clock.png";
import Marker from "../../assets/images/line.png";
import Location from "../../assets/images/location-marker.png";
import AddIcon from "../../assets/images/addIcon.png";
import DateImg from "../../assets/images/date.png";
import TimeImg from "../../assets/images/time.png";
import GoldMan from '../../assets/images/goldman.png';
import Kpmg from '../../assets/images/kpmg.png';
import Deloitte from '../../assets/images/deloitte-1.png';
import Amazon from '../../assets/images/amazon.png';
import Google from '../../assets/images/google-1.png';
import Microsoft from '../../assets/images/microsoft.png';
import Barclays from '../../assets/images/barclays.png';
import WhatsApp from '../../assets/images/whatsapp.png';

export default function BookingSection() {
    return (
        <Box className="relative w-full max-w-none min-h-screen text-white overflow-hidden" id="airport">
            <Box className="absolute inset-0 -z-10 w-full h-full">
                <Image
                    src={BgImage}
                    alt=""
                    fill
                    className="object-cover object-[35%_center]"
                    priority
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(to bottom, rgba(8,16,23,0.9) 0%, rgba(8,16,23,0.6) 50%, rgba(8,16,23,0.9) 100%)",
                    }}
                />
            </Box>

            <Box className="flex flex-wrap justify-between mt-40! lg:w-[83vw] ml-0! lg:ml-[135px]!" id="mainContainer">
                <Box className="w-[33.1vw] 2xl:w-158" id="container">
                    <Typography variant="h3" component="h1" className="mb-2! 2xl:text-[52px]!">
                        Book Your London <span className="highlight">Chauffeur Today</span>
                    </Typography>
                    <Typography variant="body1">
                        From Heathrow transfers to corporate roadshows, secure your chauffeur with RolDrive. Availability is limited during peak seasons — reserve now.
                    </Typography>

                    <Box className="flex flex-wrap items-center gap-5 mt-2! border-0! border-b-2! border-dashed! border-[#555555]! pb-5!">
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

                    <Box>
                        <Typography className="highlight italic mt-4!">
                            Trusted by Leading Companies
                        </Typography>
                        <Grid container spacing={2} className="mb-6! mt-4!">
                            <Grid item lg={1.7} className="flex items-center">
                                <Image src={GoldMan} alt="Goldman" width={50} height={50} className="cursor-pointer" />
                            </Grid>
                            <Grid item lg={1.7} className="flex items-center">
                                <Image src={Kpmg} alt="Kpmg" width={50} height={50} className="cursor-pointer" />
                            </Grid>
                            <Grid item lg={1.7} className="flex items-center">
                                <Image src={Deloitte} alt="Deloitte" width={50} height={50} className="cursor-pointer" />
                            </Grid>
                            <Grid item lg={1.7} className="flex items-center">
                                <Image src={Amazon} alt="Amazon" width={50} height={50} className="cursor-pointer" />
                            </Grid>
                            <Grid item lg={1.7} className="flex items-center">
                                <Image src={Google} alt="Google" width={50} height={50} className="cursor-pointer" />
                            </Grid>
                            <Grid item lg={1.7} className="flex items-center">
                                <Image src={Microsoft} alt="Microsoft" width={50} height={50} className="cursor-pointer" />
                            </Grid>
                            <Grid item lg={1.7} className="flex items-center">
                                <Image src={Barclays} alt="Barclays" width={50} height={50} className="cursor-pointer" />
                            </Grid>
                        </Grid>
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
                            <Button variant="contained" className="btn-primary w-full">
                                Calculate Price
                            </Button>
                            <Button variant="outlined" className="btn-outline w-full">
                                <Image src={WhatsApp} alt="WhatsApp" width={20} className="mr-1!" />
                                Chat on WhatsApp
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};