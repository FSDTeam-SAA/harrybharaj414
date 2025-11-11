import HomeAbout from "@/components/about/HomeAbout";
import HomeContact from "@/components/contact/HomeContact";
import HomeLegalDisclamer from "@/components/home/HomeLegalDisclamer";
import HowItWorks from "@/components/home/HowItWorks";
import MyAchievement from "@/components/home/MyAchievement";
import OurClientSay from "@/components/home/OurClientSay";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HomeServices from "@/components/services/HomeSerivces";
import StudyLegal from "@/components/services/legaldisclamer/StudyLegal";
import Hero from "@/components/shared/Hero";
import VideoResources from "@/components/shared/VideoResources";


export default function Home() {
  return (
    <div className="">
      <Hero />
      <MyAchievement />
      <HomeAbout />
      <HomeServices />
      <HowItWorks />
      {/* <WhyChooseUs /> */}

      <OurClientSay />
      <HomeContact /> 
     <VideoResources />
     {/* <HomeLegalDisclamer /> */}
      <StudyLegal />
     
    </div>
  );
}
