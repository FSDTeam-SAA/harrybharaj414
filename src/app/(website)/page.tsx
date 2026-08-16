import HomeAbout from "@/components/about/HomeAbout";
import HomeContact from "@/components/contact/HomeContact";
import HomeLegalDisclamer from "@/components/home/HomeLegalDisclamer";
import HowItWorks from "@/components/home/HowItWorks";
import MyAchievement from "@/components/home/MyAchievement";
import OurClientSay from "@/components/home/OurClientSay";
import ReviewSection from "@/components/home/ReviewSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HomeServices from "@/components/services/HomeSerivces";
import StudyLegal from "@/components/services/legaldisclamer/StudyLegal";
import Hero from "@/components/shared/Hero";
import VideoResources from "@/components/shared/VideoResources";
import { absoluteUrl, createPageMetadata, siteConfig } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Work, Study & Immigration Visa Consulting",
  description: "Get professional guidance for work visas, study visas, immigration, career planning and documentation from Destiny Abroad.",
  path: "/",
});

export default function Home() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: absoluteUrl("/"),
  };

  return (
    <div className="">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <ReviewSection />
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
