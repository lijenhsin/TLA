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
        <title>
          台灣喉科醫學會首頁：Official site of Taiwan Laryngoloigcal Association
        </title>
        <meta name="description" content="TLA intro page" />
        <link rel="icon" href="/fav.ico" />
      </Head>

      <Navbar />

      <SectionTitle pretitle="2023TLA Spring Conference" title="線上報名表單" className="">
        <div className="content-center">
          <iframe className="w-80 md:w-96 lg:w-[800px]"
            src="https://docs.google.com/forms/d/e/1FAIpQLSc_GXNs2fgj1W5x5KG-Xd1DzzXFNDhDGx1Qf3nA7Gxdoit6CA/viewform?embedded=true"
            
            height="1000"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            載入中…
          </iframe>
        </div>
      </SectionTitle>

      <Footer />
      
    </>
  );
}
