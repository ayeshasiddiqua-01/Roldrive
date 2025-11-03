"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Box, Typography } from '@mui/material';
import logo from "../../assets/images/logo.png";
import Facebook from "../../assets/images/facebook.png";
import Twitter from "../../assets/images/Frame.png";
import Instagram from "../../assets/images/instagram.png";
import Pinterest from "../../assets/images/pinterest.png";
import Linkedin from "../../assets/images/linkedin.png";
import WhatsAppLink from "../../assets/images/Whatsapplink.png";
import UpArrow from "../../assets/images/uparrow.png";

export default function Footer() {

    const appList = [
        { app: "https://www.facebook.com/", img: Facebook },
        { app: "https://x.com/", img: Twitter },
        { app: "https://www.instagram.com/", img: Instagram },
        { app: "https://www.instagram.com/", img: Pinterest },
        { app: "https://in.linkedin.com/", img: Linkedin }
    ]

    const fleetList = [
        { li: "Business" },
        { li: "First" },
        { li: "Luxury" },
        { li: "Electric" },
        { li: "Suv" },
        { li: "MVP" },
        { li: "Sprinter" }
    ];

    const ServiceList = [
        { li: "Airport Transfer" },
        { li: "Road Shows" },
        { li: "Intercity Transfer" },
        { li: "Event Transfer" },
        { li: "All Services" }
    ];

    const citiesList = [
        { li: "London" },
        { li: "Paris" },
        { li: "New York" },
        { li: "Dubai" },
        { li: "Tokyo" }
    ];

    const faqList = [
        { li: "Blogs" },
        { li: "Career" },
        { li: "About us" },
    ]
    const policyList = [
        { li: "Privacy policy" },
        { li: "GDPR policy" },
        { li: "Terms & conditions" }
    ]

    return (
        <>
            <Box className="bg-[#081017] w-full pl-[10%]! py-[3%]! relative">
                <Box className="w-[85vw] flex gap-2 flex-wrap pb-4! pt-[5%]!">
                    <Box className="w-[230px]">
                        <Image
                            src={logo}
                            alt="RolDrive Logo"
                            width={120}
                            height={40}
                            priority
                            className="cursor-pointer"
                        />

                        <Typography className="text-[12px]! text-[#FFFFFF99]! leading-snug! font-normal! mt-4!">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </Typography>
                        <Typography className="text-[12px]! text-[#FFFFFF99]! leading-snug! font-normal! mt-4!">
                            +44 (0) 207 112 8101
                        </Typography>
                        <Typography className="text-[12px]! text-[#FFFFFF99]! leading-snug! font-normal! mt-3!">
                            booking@roldrive.com
                        </Typography>

                        <Box className="flex gap-2 mt-5!">
                            {appList.map((val, i) => {
                                return (
                                    <Link key={i} href={val.app} target="_blank">
                                        <Image src={val.img} alt="Facebook" width={20} height={40} priority className="cursor-pointer" />
                                    </Link>
                                )
                            })}
                        </Box>
                    </Box>

                    <Box className="w-[200px]! ml-[10%]! pr-[12%]!">
                        <Typography component="h1" className="text-[16px]! text-white!">
                            Fleet
                        </Typography>
                        {fleetList.map((val, i) => {
                            return (
                                <Typography key={i} component="h1" className="text-[12px]! text-[#FFFFFF99]! mt-4!">
                                    {val.li}
                                </Typography>
                            )
                        })}
                    </Box>

                    <Box className="w-[230px]">
                        <Typography component="h1" className="text-[16px]! text-white!">
                            Services
                        </Typography>
                        {ServiceList.map((val, i) => {
                            return (
                                <Typography key={i} component="h1" className="text-[12px]! text-[#FFFFFF99]! mt-4!">
                                    {val.li}
                                </Typography>
                            )
                        })}
                    </Box>

                    <Box className="w-[180px]">
                        <Typography component="h1" className="text-[16px]! text-white!">
                            Top Cities
                        </Typography>
                        {citiesList.map((val, i) => {
                            return (
                                <Typography key={i} component="h1" className="text-[12px]! text-[#FFFFFF99]! mt-4!">
                                    {val.li}
                                </Typography>
                            )
                        })}
                    </Box>

                    <Box className="w-[130px]">
                        <Typography component="h1" className="text-[16px]! text-white!">
                            FAQ
                        </Typography>
                        {faqList.map((val, i) => {
                            return (
                                <Typography key={i} component="h1" className="text-[12px]! text-[#FFFFFF99]! mt-4!">
                                    {val.li}
                                </Typography>
                            )
                        })}
                        <Typography component="h1" className="highlight text-[12px]! mt-4!">
                            Become a Supplier
                        </Typography>
                    </Box>
                </Box>

                <Box className="w-[80vw]">
                    <Box className="flex gap-5 w-full borderborder-0! border-b-2! border-solid! border-[#555555]! pb-5!">
                        {policyList.map((val, i) => {
                            return (
                                <Typography key={i} component="h1" className="text-[12px]! text-[#FFFFFF99]! mt-4!">
                                    {val.li}
                                </Typography>
                            )
                        })}
                    </Box>

                    <Typography component="h1" className="text-[12px]! text-[#FFFFFF99]! mt-6!">
                        Copyright ©2024 - RolDrive. All Rights Reserved.
                    </Typography>
                </Box>
                <Box className="absolute right-[7%] bottom-[10%] ">
                    <Link href="#mainBanner">
                        <Image src={UpArrow} alt="Whatsapp" width={110} height={40} priority className="cursor-pointer" />
                    </Link>
                </Box>
            </Box>

            <Box className="fixed bottom-10 right-8">
                <Link href="https://web.whatsapp.com/" target="_blank">
                    <Image src={WhatsAppLink} alt="Whatsapp" width={40} height={40} priority className="cursor-pointer" />
                </Link>
            </Box>
        </>
    )
}
