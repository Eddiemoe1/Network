import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "@/components/Top/Top";
import KeyFeatures from "@/components/key/keyFeature";
import HowItWorks from "@/components/How It Works/how";
import Benefits from "@/components/benefit/benefits";
import UseCases from "@/components/use/useCase";
import  CallToAction  from "@/components/CTA/cta";
import FAQ from "@/components/FAQ/Faq";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        <HeroSection/>
        <KeyFeatures/>
        <HowItWorks/>
        <Benefits/>
        <UseCases/>
        <FAQ/>
        <CallToAction/>
        
      </div>
    </main>
  );
}
