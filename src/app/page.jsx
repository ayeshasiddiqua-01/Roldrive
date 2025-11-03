"use client"

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import MainBanner from "@/components/MainBanner/MainBanner";
import WhyChooseSection from "@/components/WhyChooseSection/WhyChooseSection";
import Image from "next/image";
import SpecialRequirement from "@/components/SpecialRequirement/SpecialRequirement";
import Service from "@/components/Service/Service";
import Fleet from "@/components/Fleet/Fleet";
import ChauffeurQuoteForm from "@/components/ChauffeurQuoteForm/ChauffeurQuoteForm";
import FeedbackSection from "@/components/FeedbackSection/FeedbackSection";
import AppDownloadSection from "@/components/AppDownloadSection/AppDownloadSection";
import FaqSection from "@/components/FaqSection/FaqSection";
import BookingSection from "@/components/BookingSection/BookingSection";
import Footer from "@/components/Footer/Footer";
import { Box, CircularProgress, Typography } from "@mui/material";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Box className="flex flex-col items-center justify-center h-screen bg-[#0F2438] text-white" id="mainBanner">
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  return (
    <>
      <Navbar />
      <MainBanner />
      <WhyChooseSection />
      <SpecialRequirement />
      <Service />
      <Fleet />
      <ChauffeurQuoteForm />
      <FeedbackSection />
      <AppDownloadSection />
      <FaqSection />
      <BookingSection />
      <Footer />
    </>
  );
}
