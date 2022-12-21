import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Footer from "../components/footer";
import Link from "next/link";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";

import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

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
        <title>台灣喉科醫學會首頁：Official site of Taiwan Laryngoloigcal Association</title>
        <meta
          name="description"
          content="TLA intro page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Recent Activity"
        title="最新活動">
        北區喉科討論會
      </SectionTitle>
 
 
     
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        歡迎與我們聯絡
      </SectionTitle>
     
      <Footer />
      {/*<PopupWidget />*/}
    </>
  );
}
