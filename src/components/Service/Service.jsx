"use client";

import React from 'react';
import Image from "next/image";
import { Box, Grid, Typography } from '@mui/material';
import Service1 from '../../assets/images/service1.png';
import Service2 from '../../assets/images/service2.png';
import Service3 from '../../assets/images/service3.png';
import Service4 from '../../assets/images/service4.png';
import Service5 from '../../assets/images/service5.png';
import Service6 from '../../assets/images/service6.png';

export default function Service() {

    const serviceList = [
        {
            img: Service1,
            head: "Airport Transfers",
            para: "Stress-free airport pickups with flight tracking, luggage assistance and complimentary waiting time."
        },
        {
            img: Service2,
            head: "Corporate Travel",
            para: "Reliable, discreet chauffeur service for meetings, executive schedules and business travel across London."
        },
        {
            img: Service3,
            head: "Events & VIP Transport",
            para: "Premium chauffeured travel for galas, concerts, award nights and high-profile guest movements"
        },
        {
            img: Service4,
            head: "Flexible Hourly & Day Hire",
            para: "A dedicated chauffeur at your service for multi-stop schedules and personalised itineraries."
        },
        {
            img: Service5,
            head: "Private Sightseeing & Tours",
            para: "Tailored city tours with a professional chauffeur, showcasing London’s finest landmarks and attractions."
        },
        {
            img: Service6,
            head: "Cruise Port Transfers",
            para: "Cruise Port Transfers Smooth, punctual transfers between London and Southampton, Dover and other major UK cruise ports."
        },
    ]

    return (
        <Box className="bg-[#081017] w-full" id="service">

            <Box className="w-[55%] text-center ml-[23%]!">
                <Typography variant="body2" component="h1" className="text-[30px]! pt-15!">
                    <span className="highlight">London</span> Chauffeur Service
                </Typography>

                <Typography variant="body1">
                    Experience a seamless London chauffeur service with professional drivers, luxury vehicles, and fully personalised travel for airport journeys, business schedules, VIP events, tours, and more.
                </Typography>
            </Box>

            <Grid container spacing={{ xs: 2, sm: 5, md: 0.8 }} justifyContent={{ xs: "center" }} className="w-[86%] mt-16! ml-[8%]!">
                {serviceList.map((val, i) => {
                    return (
                        <Grid key={i} className="relative overflow-hidden">
                            <Grid item xs={12} sm={6} md={4} lg={2} className="relative border! border-solid! border-gray-500! animate">
                                <Image src={val.img} alt="Airport" width={180} height={50} className="cursor-pointer" />
                                <Grid className="absolute animation">
                                    <Typography component="h1" className="text-lg!">
                                        {val.head}
                                    </Typography>
                                    <Typography component="h1" className="text-[15px]! font-light!">
                                        {val.para}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}
