import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import { Noto_Serif_TC } from "@next/font/google";

const MingTi = Noto_Serif_TC({
  weight: "900",
});

const h1class =`${MingTi.className} text-2xl leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white`

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>台灣喉科醫學會首頁：Welcome to Taiwan Laryngoloigcal Association</title>
        <meta
          name="description"
          content="TLA intro page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
     
      <SectionTitle
        pretitle="Recent Activity"
        title="聯絡我們">
        北區喉科討論會
      </SectionTitle>
 
 
  
     
      <Footer />
      
    </>
  );
}
