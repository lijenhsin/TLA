import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
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
  weight: "900",
});

const h1class =`${MingTi.className} text-2xl leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white`

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
        title="近期活動">
        <h1 className={h1class}>台灣喉科醫學會冬季學術研討會</h1>
        <div>
        <Image className="p-5 shadow-lg m-5"
              src="https://scontent.ftpe13-1.fna.fbcdn.net/v/t39.30808-6/321957161_554307636351764_6164903996593642824_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a83260&_nc_ohc=TtHuswJKqvkAX8n4dsS&_nc_ht=scontent.ftpe13-1.fna&oh=00_AfDeNfZajftGnk31iuqC0xeylZ0JsKSkMEz1uWus0Iy4PQ&oe=641E35C4"
              width="800"
              height="532"
              alt="KCGMH"
            
              loading="eager"
               
            />

<Image className="p-5 shadow-lg m-5"
              src="https://scontent.ftpe13-2.fna.fbcdn.net/v/t39.30808-6/323164251_910384166631183_2209057214912818497_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a83260&_nc_ohc=SqZ7l-NNZnkAX8hF1jW&_nc_ht=scontent.ftpe13-2.fna&oh=00_AfAWJ7pRBon94UDDKKF--Nl8fgiZ8V7Z8d3ezFBaC27Wcw&oe=641D8225"
              width="800"
              height="532"
              alt="KCGMH"
            
              loading="eager"
              
            />
            <Image className="p-5 shadow-lg m-5"
              src=" https://scontent.ftpe13-1.fna.fbcdn.net/v/t39.30808-6/322590455_3460858084160938_9088587602197556900_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a83260&_nc_ohc=iBI_W9SedloAX_uloqD&_nc_ht=scontent.ftpe13-1.fna&oh=00_AfDCRrv9v2M58rPyygUhzqLwQM5VKH8JGfCAYxc24O5UHg&oe=641F0335"
              width="800"
              height="532"
              alt="KCGMH"
            
              loading="eager"
              
            />
        </div>
      </SectionTitle>
 
 
     
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        歡迎與我們聯絡
      </SectionTitle>
     
      <Footer />
       
    </>
  );
}
