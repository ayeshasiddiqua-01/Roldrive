import Navbar from "@/components/Navbar/Navbar";
import MainBanner from "@/components/MainBanner/MainBanner";
import WhyChooseSection from "@/components/WhyChooseSection/WhyChooseSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <WhyChooseSection />
    </>
  );
}
