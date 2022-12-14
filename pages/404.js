import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Link from "next/link";

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
        <title>台灣喉科醫學會首頁：NOT FOUND</title>
        <meta
          name="description"
          content="TLA 404 page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <SectionTitle
        pretitle="404 Ｎot Found"
        title="無此頁面">
        您所指定的頁面不存在，請 <Link className="text-slate-600 underline" href={'/'}>按此</Link> 回首頁
      </SectionTitle>
 
 
     
 
     
      <Footer />
      {/*<PopupWidget />*/}
    </>
  );
}
