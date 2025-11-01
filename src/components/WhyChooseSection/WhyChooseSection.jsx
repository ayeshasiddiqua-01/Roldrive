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
    return (
        <>
            <Box className="relative w-full max-w-none min-h-screen text-white overflow-hidden">
                <Box className="absolute inset-0 -z-10 w-full h-[62%] whychooseholder">
                    <Image
                        src={BgCar}
                        alt="Luxury Car Background"
                        width={1600}
                        height={600}
                        style={{
                            width: "120%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center top"
                        }}
                        priority
                    />
                    <Box className="absolute inset-0 bg-[#081017F2]/95">

                        <Box className="w-[70%] text-center mt-15! ml-[15%]!">
                            <Typography variant="body2" component="h1" className="text-[30px]!">
                                Why Choose <span className="highlight">RolDrive</span>
                            </Typography>

                            <Typography variant="body1">
                                Choose a premium chauffeur service in London, trusted by corporate travellers and VIP clients. From airport transfers to business travel, RolDrive delivers a seamless, reliable and comfortable journey every time.
                            </Typography>
                        </Box>

                        <Box className="flex w-[84vw] ml-[9%]! mt-12! features">

                            <Box className="w-[20vw] flex flex-col items-center minfeatures">
                                <Image src={Flight} alt="Flight" width={40} />
                                <Box className="w-full! text-center mt-4!">
                                    <Typography component="h1" className="text-[16px]! pb-1!">60 minutes free airport wait</Typography>
                                    <Typography component="h1" className="text-[14px]! font-medium!">Complete peace of mind for delayed flights</Typography>
                                </Box>
                            </Box>

                            <Box className="w-[20vw] flex flex-col items-center minfeatures">
                                <Image src={Pilot} alt="Flight" width={40} />
                                <Box className="w-full! text-center mt-4!">
                                    <Typography component="h1" className="text-[16px]! pb-1!">Professional chauffeurs</Typography>
                                    <Typography component="h1" className="text-[14px]! font-medium!">Uniformed, discreet and well-presented</Typography>
                                </Box>
                            </Box>

                            <Box className="w-[20vw] flex flex-col items-center minfeatures">
                                <Image src={Dollar} alt="Flight" width={40} />
                                <Box className="w-full! text-center mt-4!">
                                    <Typography component="h1" className="text-[16px]! pb-1!">All-inclusive pricing</Typography>
                                    <Typography component="h1" className="text-[14px]! font-medium!">No hidden fees, surcharges or surprises</Typography>
                                </Box>
                            </Box>

                            <Box className="w-[20vw] flex flex-col items-center minfeatures">
                                <Image src={Cars} alt="Flight" width={40} />
                                <Box className="w-full! text-center mt-4!">
                                    <Typography component="h1" className="text-[16px]! pb-1!">Luxury fleet</Typography>
                                    <Typography component="h1" className="text-[14px]! font-medium!">Hand-picked vehicles for a first-class travel experience</Typography>
                                </Box>
                            </Box>

                            <Box className="w-[20vw] flex flex-col items-center minfeatures">
                                <Image src={Booking} alt="Flight" width={40} />
                                <Box className="w-full! text-center mt-4!">
                                    <Typography component="h1" className="text-[16px]! pb-1!">24/7 support</Typography>
                                    <Typography component="h1" className="text-[14px]! font-medium!">Always available for bookings and assistance</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}