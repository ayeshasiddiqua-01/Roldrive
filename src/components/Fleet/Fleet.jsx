"use client";

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { Box, Button, Typography } from '@mui/material';
import Car1 from '../../assets/images/car1.png';
import Car2 from '../../assets/images/car2.png';
import Car3 from '../../assets/images/car3.png';
import Wifi from '../../assets/images/wifi1.png';
import Location from '../../assets/images/location1.png';
import Container from '../../assets/images/container.png';
import LeftChevron from '../../assets/images/leftChevron.png';
import rightChevron from '../../assets/images/rightChevron.png';

export default function Fleet() {
    var [index, setIndex] = React.useState(0);
    var [mobile, setMobile] = React.useState(false);
    var [laptop, setLaptop] = React.useState(false);

    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth <= 767);
            setMobile(window.innerWidth <= 1279);
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, []);

    let slide1 = [1, 2, 3, 4];
    let slide2 = [1, 2, 3, 4, 5];
    let slide3 = [1, 2, 3, 4, 5, 6]

    let slides = mobile ? slide3 : laptop ? slide2 : slide1;

    const handlePrev = () => {
        setIndex((prev) => prev > 0 ? prev - 1 : prev);
    }

    const handleNext = () => {
        setIndex((prev) => prev < slides.length - 1 ? prev + 1 : prev);
    }

    const carousal = [
        {
            h1: "Mercedes E-Class",
            para: "The smart executive choice for everyday business travel and airport transfers.",
            img: Car1
        },
        {
            h1: "Mercedes S Class",
            para: "The benchmark for first-class executive travel, offering exceptional comfort and prestige.",
            img: Car2
        },
        {
            h1: "Mercedes V Class",
            para: "Spacious executive travel for families, groups and VIP movements in total comfort.",
            img: Car3
        },
        {
            h1: "Range Sprinter",
            para: "Choose from our selection of premium chauffeur-driven vehicles, ideal for airport transfers, corporate travel, events and VIP movements across London.",
            img: Car1
        },
        {
            h1: "Roles-Rover",
            para: "Choose from our selection of premium chauffeur-driven vehicles, ideal for airport transfers, corporate travel, events and VIP movements across London.",
            img: Car2
        },
        {
            h1: "Roles-Royce",
            para: "Choose from our selection of premium chauffeur-driven vehicles, ideal for airport transfers, corporate travel, events and VIP movements across London.",
            img: Car3
        },
    ]



    return (
        <Box className="w-full pb-16!"
            style={{
                backgroundImage:
                    "linear-gradient(180deg, #081017 5%, #11202D 45%, #1B2D3B 75%, #081017 100%)",
            }} id="fleet">
            <Box className="w-[55%] text-center ml-[23%]! gap-8">
                <Typography variant="body2" component="h1" className="text-[30px]! pt-15!">
                    <span className="highlight">Our Luxury</span> Chauffeur Driven Fleet
                </Typography>

                <Typography variant="body1">
                    Choose from our selection of premium chauffeur-driven vehicles, ideal for airport transfers, corporate travel, events and VIP movements across London.
                </Typography>
            </Box>

            <Box className="w-[80%] ml-[9%]! mt-8! overflow-hidden relative">
                <Box className="w-[50px] h-[50px] rounded-[50px] absolute top-[37%] z-1! left-0 bg-[#757575]" onClick={handlePrev} style={{ border: "solid" }}>
                    <Image src={LeftChevron} alt="Car" className="absolute top-2.5 w-3.2 left-3" />
                </Box>
                <Box className="w-[50px] h-[50px] rounded-[50px] absolute top-[37%] right-[0%] z-1! bg-[#757575]" onClick={handleNext} style={{ border: "solid" }}>
                    <Image src={rightChevron} alt="Car" className="absolute top-2.5 w-3.2 left-4" />
                </Box>
                <Box className="gap-5 flex w-[2155px]" style={{ transform: `translateX(-${index * 360}px)`, transition: "all 0.8s ease-in-out" }}>

                    {carousal.map((val, i) => {
                        return (
                            <Box key={i} className="bg-[#081017] w-[355px]">
                                <Box className="text-center p-2!">
                                    <Typography variant="body2" component="h1" className="text-[20px]! font-medium!">
                                        {val.h1}
                                    </Typography>

                                    <Typography component="h1" className="text-[11px]! font-light!">
                                        {val.para}
                                    </Typography>
                                </Box>
                                <Box className="ml-2! w-[95%] relative">
                                    <Image src={val.img} alt="Car" className="w-full!" />
                                    <Box className="absolute top-40! w-[99%] flex justify-between">
                                        <Box className="w-[10%] h-[35%]! text-center">
                                            <Image src={Wifi} alt="Car" className="" />
                                            <Typography component="h1" className="text-[10px]! font-thin!">Wifi Available</Typography>
                                        </Box>
                                        <Box className="w-[10%] h-[35%]! text-center">
                                            <Image src={Location} alt="Car" />
                                            <Typography component="h1" className="text-[10px]! font-thin!">GPS Tracking</Typography>
                                        </Box>
                                        <Box className="w-[10%] h-[35%]! text-center">
                                            <Image src={Container} alt="Car" />
                                            <Typography component="h1" className="text-[10px]! font-thin!">Water Available</Typography>
                                        </Box>
                                        <Box className="w-[10%] h-[35%]!">
                                            <Image src={Container} alt="Car" />
                                            <Typography component="h1" className="text-[10px]! font-thin! w-[200%]">Child seat Available</Typography>
                                        </Box>
                                        <Box className="w-[10%] h-[35%]! text-center">
                                            <Image src={Container} alt="Car" />
                                            <Typography component="h1" className="text-[10px]! font-thin! w-[80%]">Max 3</Typography>
                                        </Box>
                                        <Box className="w-[10%] h-[35%]! text-center">
                                            <Image src={Container} alt="Car" />
                                            <Typography component="h1" className="text-[10px]! font-thin! w-[80%]">Max 2</Typography>
                                        </Box>
                                    </Box>
                                </Box>

                                <Box className="border! border-solid! border-gray-500! mt-14! pl-4! pr-5! w-full">
                                    <Box className="flex justify-between border-0 border-gray-500! border-b-2! pb-2! pt-3!">
                                        <Box>
                                            <Typography component="h1" className="text-[15px]! font-thin!">Heathrow to Central London</Typography>
                                        </Box>
                                        <Box>
                                            <Typography className="highlight text-[16px]!">£ 149.40</Typography>
                                        </Box>
                                    </Box>
                                    <Box className="flex justify-between border-0 border-gray-500! border-b-2! pb-2! pt-2!">
                                        <Box>
                                            <Typography component="h1" className="text-[15px]! font-thin!">4 hours hire </Typography>
                                        </Box>
                                        <Box>
                                            <Typography className="highlight text-[16px]!">£ 255.40</Typography>
                                        </Box>
                                    </Box>
                                    <Box className="flex justify-between pb-2! pt-2!">
                                        <Box>
                                            <Typography component="h1" className="text-[15px]! font-thin!">Round trip </Typography>
                                        </Box>
                                        <Box>
                                            <Typography className="highlight text-[16px]!">£ 220.00</Typography>
                                        </Box>
                                    </Box>
                                </Box>

                                <Box className="ml-3! flex justify-between mr-5! pb-2!">
                                    <Button className="btn-secondary mt-2!">Book Now</Button>
                                    <Box>
                                        <Typography className="text-[8px]!">Prices Subject to VAT</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        );
                    })}

                </Box>
            </Box>

            <Box>
                <Button variant="outline" className="btn-danger mt-8! ml-148!">
                    View our all vehicles
                </Button>
            </Box>
        </Box>
    )
}
