"use client";

import React from 'react';
import Image from "next/image";
import { Box, Typography, Grid, Checkbox, Button } from '@mui/material';
import GoldMan from '../../assets/images/goldman.png';
import Kpmg from '../../assets/images/kpmg.png';
import Deloitte from '../../assets/images/deloitte-1.png';
import Amazon from '../../assets/images/amazon.png';
import Google from '../../assets/images/google-1.png';
import Microsoft from '../../assets/images/microsoft.png';
import Barclays from '../../assets/images/barclays.png';
import WhatsApp from '../../assets/images/whatsapp.png';

export default function SpecialRequirement() {

    return (
        <Box className="w-full h-auto"
            style={{
                backgroundImage:
                    "linear-gradient(180deg, #081017 5%, #11202D 45%, #1B2D3B 75%, #081017 100%)",
            }}
        >
            <Box className="flex flex-wrap gap-8! justify-between w-[91vw] requirement">
                <Box className="w-[33.9%] ml-[9%]! driven">
                    <Box className="pb-4! mb-4! border-0! border-b-2! border-dashed!" style={{ border: "#555555" }}>
                        <Typography component="h1">
                            <span className="highlight">Chauffeur</span> Driven Cars for Any Occasion
                        </Typography>
                        <Typography variant="body1">
                            Whether it’s an event, corporate travel or a personalised journey, we provide tailored chauffeur solutions across London. Share your requirements and we’ll respond within minutes — our average reply time is under 3 minutes — with detailed pricing and a call or email back to finalise your arrangements.
                        </Typography>
                        <Typography variant="body1" className="font-bold! mt-2!">
                            Seamless, reliable and discreet — every journey handled with exceptional care.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography className="highlight italic">
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

                    <Box className="flex">
                        <input type="checkbox" defaultChecked className="w-4! h-[18px]! accent-[#FDC65C]! rounded-full! border border-[#FDC65C] cursor-pointer" />
                        <span className="text-white text-[14px]! ml-2!">Call me</span>
                        <input type="checkbox" className="w-4! h-[18px]! mx-2! bg-transparent! accent-[#FDC65C]! rounded-full! border border-[#FDC65C] cursor-pointer" />
                        <span className="text-white text-[14px]! mt-0!">Email me</span>

                        <Box className="w-[138px] h-3.5 ml-6! border-0! border-b-2!" style={{ border: "#414141" }}></Box>
                        <Typography className="text-[12px]! text-[#414141]!">Reply within 3minutes</Typography>
                    </Box>
                </Box>

                <Box
                    className="bg-[#1B2D3C]/50 backdrop-blur-md rounded-2xl p-6! 2xl:py-20! 2xl:px-12! w-[44%]"
                    id="form"
                    sx={{
                        boxShadow: "0px 4px 30px rgba(0,0,0,0.2)",
                    }}
                >
                    <Box className="w-[38vw] mt-4!">
                        <Typography component="h1" className="text-[30px]! text-center!">
                            Have a <span className="highlight">Special</span> Requirement?
                        </Typography>
                        <Typography component="h1" className="text-[13px]! font-normal! text-center pb-1!">
                            Every journey is unique. Whether it's a corporate roadshow, VIP event, or private <span className="">sightseeing, we create a tailored chauffeur package for you.</span>
                        </Typography>
                    </Box>
                    <form>
                        <Box>
                            <Box className="w-full mb-2!">
                                <label className="text-xs! text-white!">Name</label>
                                <div className="input-box">
                                    <input type="text" placeholder="Enter your name" className="text-sm!" />
                                </div>
                            </Box>

                            <Box className="w-full mb-2!">
                                <label className="text-xs! text-white!">Email</label>
                                <div className="input-box">
                                    <input type="text" placeholder="Enter your email" className="text-sm!" />
                                </div>
                            </Box>

                            <Box className="w-full mb-2!">
                                <label className="text-xs! text-white!">Phone</label>
                                <div className="input-box">
                                    <input type="text" placeholder="Enter your phone number" className="text-sm!" />
                                </div>
                            </Box>

                            <Box className="flex flex-col sm:flex-row gap-2 mb-2!">
                                <Box className="w-full">
                                    <Typography className="text-xs! text-white! mb-2!">Contact by</Typography>
                                    <Box className="flex">
                                        <input type="checkbox" defaultChecked className="w-4! h-[18px]! accent-[#FDC65C]! rounded-full! border border-[#FDC65C] cursor-pointer" />
                                        <span className="text-xs! text-white! ml-2!">Call me</span>
                                        <input type="checkbox" className="w-4! h-[18px]! mx-2! bg-transparent! accent-[#FDC65C]! rounded-full! border border-[#FDC65C] cursor-pointer" />
                                        <span className="text-xs! text-white! mt-0!">Email Me</span>

                                        <Box className="w-[210px] h-3.5 ml-6! border-0! border-b-2!" style={{ border: "#414141" }}></Box>
                                        <Typography className="text-[12px]! text-[#414141]!">Reply within 3minutes</Typography>

                                    </Box>
                                </Box>
                            </Box>

                            <Box className="w-full mb-2!">
                                <label className="text-xs! text-white!">Provide your Brief Requirement</label>
                                <div className="input-box">
                                    <input type="text" placeholder="Describe your requirements" className="text-sm! pb-[18px]! h-18!" />
                                </div>
                            </Box>
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
}
