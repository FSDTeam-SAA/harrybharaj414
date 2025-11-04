import HomeAbout from "@/components/about/HomeAbout";
import MyAchievement from "@/components/home/MyAchievement";
import OurClientSay from "@/components/home/OurClientSay";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HomeServices from "@/components/services/HomeSerivces";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <MyAchievement />
      <HomeAbout />
      <HomeServices />
      <WhyChooseUs />
      <OurClientSay />
      <Footer />
    </div>
  );
}
