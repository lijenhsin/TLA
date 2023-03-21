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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <SectionTitle
        pretitle="Recent Activities"
        title="近期活動">
        <h1 className={h1class}>成大醫院喉科新進展</h1>
        <div>
        <Image className="p-5 shadow-lg m-5"
              src="https://lh6.googleusercontent.com/uacgAwUATy6FOVcHSBBNGDVUM7-1BWOJFu0w7F9tzxdthj4XIe4daC1uex8Rpo5Px0A=w2400"
              width="800"
              height="532"
              alt="KCGMH"
            
              loading="eager"
               
            />

<Image className="p-5 shadow-lg m-5"
              src="https://lh6.googleusercontent.com/W_tVk0igWu1WIjnA9SXbM35mYte5ttVUX4N-tu_pd-1jTJ-K_x6DNGl9zuYa_Z6PZgY=w2400"
              width="800"
              height="532"
              alt="KCGMH"
            
              loading="eager"
              
            />
            <Image className="p-5 shadow-lg m-5"
              src="https://lh4.googleusercontent.com/gUkK36DjYd9Ll-EoeqhjzC5PYjbIza5KgWXaIryiZxIb5TuyVcwsHGYjyAPiILK5Nfo=w2400"
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
