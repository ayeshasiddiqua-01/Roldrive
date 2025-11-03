"use client";

import React from 'react';
import Image from "next/image";
import { Box, Button, Typography } from '@mui/material';
import User from '../../assets/images/user.png';
import Star from '../../assets/images/star.png';

export default function FeedbackSection() {
    
    return (
        <Box className="w-full h-auto bg-white pb-10!" id="business">

            <Box className="w-[92vw] flex flex-wrap items-center! justify-between">

                <Box className="w-[33%] ml-[9%]!">
                    <Typography component="h1" className="text-[#4C4C4C]! text-[30px]!">
                        What Our <span className="highlight">Clients Say</span>
                    </Typography>

                    <Typography className="text-[#4C4C4C]! text-[13px]! font-bold! font-[Helvetica Neue]!">
                        Every journey is one-of-a-kind. Be it a corporate roadshow, a VIP gathering, or a private tour, we design a customized chauffeur experience just for you.
                    </Typography>

                    <Button className="btn-primary mt-5! w-[32%]">Discover More</Button>
                </Box>
                <Box className="flex flex-col flex-wrap h-full w-[45%] mt-15!">
                    <Box className=" flex p-5! gap-2 border! mb-5! border-[#E5E7EB]! rounded-lg shadow-md!">
                            <Box>
                                <Image src={User} alt="User" className="w-full!" />
                            </Box>
                        <Box className="w-[80%]">
                            <Typography className="text-[#4C4C4C]! text-[16px]! pb-2! font-semibold! font-[Helvetica Neue]!">
                                Mehwish
                            </Typography>
                            <Typography className="text-[#4C4C4C]! text-[13px]! pb-4! font-semibold! font-[Helvetica Neue]!">
                                Content Writer
                            </Typography>
                            <Typography component="h1" className="text-[#4C4C4C]! text-[14px]! font-medium! font-[Helvetica Neue]!">
                                "I recently hired a chauffeur service for a special event, and I couldn't be happier! The driver was punctual, professional, and made the ride incredibly comfortable. Highly recommend!"
                            </Typography>

                            <Box className="w-full mt-5! flex flex-wrap">
                                <Box className="flex w-[33%] justify-between">
                                    <Image src={Star} alt="Star" className="w-5" />
                                    <Image src={Star} alt="Star" className="w-5" />
                                    <Image src={Star} alt="Star" className="w-5" />
                                    <Image src={Star} alt="Star" className="w-5" />
                                    <Image src={Star} alt="Star" className="w-5" />
                                </Box>
                                <Typography component="h1" className="text-[#4C4C4C]! text-[14px]! font-medium! font-[Helvetica Neue]! ml-2!">
                                    5.0/5.0
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="flex p-5! gap-2 border! border-gray-300! rounded-lg shadow-md bg-[#F3F4F9]">
                            <Box>
                                <Image src={User} alt="User" className="w-full!" />
                            </Box>
                        <Box className="w-[80%]" >
                            <Typography className="text-[#4C4C4C]! text-[16px]! pb-2! font-semibold! font-[Helvetica Neue]!">
                                Mehwish
                            </Typography>
                            <Typography className="text-[#4C4C4C]! text-[13px]! pb-4! font-semibold! font-[Helvetica Neue]!">
                                Content Writer
                            </Typography>
                            <Typography component="h1" className="text-[#4C4C4C]! text-[14px]! font-medium! font-[Helvetica Neue]!">
                                "I recently hired a chauffeur service for a special event, and I couldn't be happier! The driver was punctual, professional, and made the ride incredibly comfortable. Highly recommend!"
                            </Typography>

                            <Box className="w-full mt-5! flex">
                                <Box className="flex w-[33%] justify-between">
                                    <Image src={Star} alt="Star" className="w-5" />
                                    <Image src={Star} alt="Star" className="w-5" />
                                    <Image src={Star} alt="Star" className="w-5" />
                                    <Image src={Star} alt="Star" className="w-5" />
                                    <Image src={Star} alt="Star" className="w-5" />
                                </Box>
                                <Typography component="h1" className="text-[#4C4C4C]! text-[14px]! font-medium! font-[Helvetica Neue]! ml-2!">
                                    5.0/5.0
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
