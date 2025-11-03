"use client";

import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function FaqAccordion() {

    var [showText, setShowText] = useState(null);

    let handleClick = (index) => {
        setShowText(showText === index ? null : index);
    }

    let data = [
        {
            question: "What if my flight is delayed?",
            answer: "We monitor all flights in real-time and include 60 minutes free waiting time at airports."
        },
        {
            question: "Are your rates all-inclusive?",
            answer: "We monitor all flights in real-time and include 60 minutes free airport waiting."
        },
        {
            question: "Can I book hourly?",
            answer: "We monitor all flights in real-time and include 60 minutes free airport waiting."
        },
        {
            question: "Which vehicles do you offer?",
            answer: "We monitor all flights in real-time and include 60 minutes free airport waiting."
        },
    ]

    return (
        <Box className="bg-white w-full flex flex-col items-center pb-18!">
            <Box className="mt-15!">
                <Typography component="h1" className="text-black! text-[30px]!">
                    Frequently Asked <span className="highlight">Questions</span>
                </Typography>
                <Typography variant="body1" className="text-black!">
                    Everything you need to know about our chauffeur service
                </Typography>
            </Box>

            <Box className="w-[83vw] mt-6! bg-[#FBFBFB]">
                {data.map((val, index) => {
                    return (
                        <Box key={index} className="mb-2.5! ml-6! pb-1! border-0! border-b! border-solid! border-[#E0E0E0]!"
                        // style={{border:"solid red"}}
                        >
                            <Box className="cursor-pointer font-bold! flex justify-between pt-3! pb-5!">
                                <Typography variant="body1" className="text-[#4C4C4C]! font-semibold!">
                                    {val.question}
                                </Typography>
                                {showText === index ?
                                    <Box className="bg-black text-center! text-[#E0E0E0] rounded-[50%]! mr-5!" onClick={() => handleClick(index)}> <RemoveIcon /></Box> :
                                    <Box className="bg-black text-center! text-[#E0E0E0] rounded-[50%]! mr-5!" onClick={() => handleClick(index)}> <AddIcon /> </Box>
                                }
                            </Box>

                            {showText === index ? <Box className="bg-[#e7e4e4] p-2!">
                                <Typography variant="body1" className="text-[#4C4C4C]! font-semibold!">
                                    {val.answer}
                                </Typography>
                            </Box> : null}
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}
