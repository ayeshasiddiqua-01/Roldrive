"use client";

import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from "next/image";
import BgCar from "../../assets/images/bgImg2.jpg";
import Flight from "../../assets/images/flight.png";
import Pilot from "../../assets/images/pilot.png";
import Dollar from "../../assets/images/dollar.png";
import Cars from "../../assets/images/cars.png";
import Booking from "../../assets/images/booking.png";

export default function WhyChooseSection() {

    const roldriveList = [
        {
            img: Flight,
            head: "60 minutes free airport wait",
            para: "Complete peace of mind for delayed flights"
        },
        {
            img: Pilot,
            head: "Professional chauffeurs",
            para: "Uniformed, discreet and well-presented"
        },
        {
            img: Dollar,
            head: "All-inclusive pricing",
            para: "No hidden fees, surcharges or surprises"
        },
        {
            img: Cars,
            head: "Luxury fleet",
            para: "Hand-picked vehicles for a first-class travel experience"
        },
        {
            img: Booking,
            head: "24/7 support",
            para: "Always available for bookings and assistance"
        }
    ]

    return (
        <>
            <Box className="relative -z-10 w-full">
                <Image
                    src={BgCar}
                    alt="Luxury Car Background"
                    style={{
                        width: "120%",
                        height: "60vh",
                        objectFit: "cover",
                        objectPosition: "center top"
                    }}
                    priority
                    className='whychooseholder'
                />

                <Box className="bg-[#081017F2]/95 absolute top-0 h-full w-full">

                    <Box className="w-[70%] text-center mt-15! ml-[15%]!">
                        <Typography variant="body2" component="h1" className="text-[30px]!">
                            Why Choose <span className="highlight">RolDrive</span>
                        </Typography>

                        <Typography variant="body1">
                            Choose a premium chauffeur service in London, trusted by corporate travellers and VIP clients. From airport transfers to business travel, RolDrive delivers a seamless, reliable and comfortable journey every time.
                        </Typography>
                    </Box>

                    <Box className="flex w-[84vw] ml-[9%]! mt-12! features">

                        {roldriveList.map((val, i) => {
                            return (
                                <Box key={i} className="w-[20vw] flex flex-col items-center minfeatures">
                                    <Image src={val.img} alt="Flight" width={40} />
                                    <Box className="w-full! text-center mt-4!">
                                        <Typography component="h1" className="text-[16px]! pb-1!">{val.head}</Typography>
                                        <Typography component="h1" className="text-[14px]! font-medium!">{val.para}</Typography>
                                    </Box>
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
            </Box>
        </>
    )
}