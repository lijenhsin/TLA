import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Link from "next/link";
import Image from "next/image";
import { Noto_Serif_TC } from "@next/font/google";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const MingTi = Noto_Serif_TC({
  weight: "300",
});

const h2class =`text-left hover:text-blue-500 text-lg tracking-tight text-gray-800 lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white`

export default function Home() {
  return (
    <>
      <Head>
        <title>台灣喉科醫學會：Activities</title>
        <meta
          name="description"
          content="TLA intro page"
        />
        <link rel="icon" href="/fav.ico" />
      </Head>

      <Navbar />
      
      <SectionTitle
        pretitle="Recent Activities"
        title="近期活動"><ul className="list-none">
        <li>2022-12-03 <Link href="20221201" className={h2class}>成大醫院喉科新進展</Link></li>
        <li>2023-01-8 <Link href="20230108" className={h2class}>台灣喉科醫學會冬季學術研討會</Link></li>
        
         
        </ul>
      </SectionTitle>
 
 
     
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        歡迎與我們聯絡
      </SectionTitle>
     
      <Footer />
       
    </>
  );
}
