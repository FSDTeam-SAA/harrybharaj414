import HomeAbout from "@/components/about/HomeAbout";
import HomeContact from "@/components/contact/HomeContact";
import MyAchievement from "@/components/home/MyAchievement";
import OurClientSay from "@/components/home/OurClientSay";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HomeServices from "@/components/services/HomeSerivces";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";
import VideoResources from "@/components/shared/VideoResources";


export default function Home() {
  return (
    <div className="">
      <Hero />
      <MyAchievement />
      <HomeAbout />
      <HomeServices />
      <WhyChooseUs />

      <OurClientSay />
      <HomeContact /> 
     <VideoResources />
   
    </div>
  );
}
