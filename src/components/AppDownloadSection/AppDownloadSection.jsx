"use client";

import React from 'react';
import Image from "next/image";
import { Box, Typography } from '@mui/material';
import GooglePlay from '../../assets/images/googleplay.png';
import AppStore from '../../assets/images/appstore.png';
import Appleiphone from '../../assets/images/AppleiPhone.png';
import Download from '../../assets/images/arrow.png';
import Dots from '../../assets/images/box.png';

export default function AppDownloadSection() {
    return (
        <>
            <Box className="bg-[#081017] pb-[4%]! pt-[9%]!" id="cities">
                <Box className="w-[81vw] bg-[#20313F] rounded-xl ml-[9%]! flex flex-wrap">
                    <Box className="w-[35vw] ml-[4%]! py-[2%]!">
                        <Typography variant="body2" component="h1" className="text-[32px]! leading-none!">
                            Luxury Chauffeurs, On Demand — Anytime, Anywhere
                        </Typography>

                        <Typography className="text-[#FFFFFF]! text-[13px]! font-normal! leading-[1.3]! font-[Helvetica Neue]! mt-[3%]!">
                            Book, manage and track your chauffeur with ease using the RolDrive mobile app. Stay in control of your journeys with instant notifications, live updates and 24/7 availability.
                        </Typography>

                        <Box className="w-full flex justify-between">
                            <Box className="flex gap-2 ">
                                <Box className="w-2.5 h-2.5 border! border-[#FDC65C]! rounded-[50%]! bg-[#FDC65C] mt-[6%]!"></Box>
                                <Typography variant="body2" component="h1" className="text-[#FFFFFF]! text-[13px]! font-normal! leading-[1.3]! font-[Helvetica Neue]! pt-[5%]!">
                                    Manage bookings on the go
                                </Typography>
                            </Box>
                            <Box className="flex gap-2 ">
                                <Box className="w-2.5 h-2.5 border! border-[#FDC65C]! rounded-[50%]! bg-[#FDC65C] mt-[6%]!"></Box>
                                <Typography variant="body2" component="h1" className="text-[#FFFFFF]! text-[13px]! font-normal! leading-[1.3]! font-[Helvetica Neue]! pt-[5%]!">
                                    Live chauffeur and flight tracking
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="flex gap-2 mt-[2%]! pb-[5%]!">
                            <Box className="w-2.5 h-2.5 border! border-[#FDC65C]! rounded-[50%]! bg-[#FDC65C]"></Box>
                            <Typography variant="body2" component="h1" className="text-[#FFFFFF]! text-[13px]! font-normal! leading-[1.3]! font-[Helvetica Neue]!">
                                Secure in-app payments
                            </Typography>
                        </Box>

                        <Box className="w-full flex flex-wrap gap-2">
                            <Image src={GooglePlay} alt="Play store" className="w-[114px]" />
                            <Image src={AppStore} alt="Play store" className="w-[114px]" />
                        </Box>

                    </Box>

                    <Box className="relative ml-[12%]!">
                        <Image src={Appleiphone} alt="Play store" className="w-[264px] -mt-[20%]!" />
                        <Box className="absolute -left-[36%]! top-[20%]! w-[114px]">
                            <Image src={Download} alt="Download here" />
                        </Box>
                        <a className="highlight font-medium! text-[14px]! -left-[40%]! top-[58%]! absolute">Download Now</a>
                    </Box>
                    <Box>
                        <Image src={Dots} alt="" className="w-[85px] mt-[160%]! -ml-[40%]!" style={{ border: "10px solid" }} />
                    </Box>
                    <Box>
                        <Image src={Dots} alt="" className="w-[85px] mt-[86%]! -ml-[68%]!" style={{ border: "10px solid" }} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}
