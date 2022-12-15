import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/keelung.jpg";
import { Noto_Serif_TC } from "@next/font/google";
import Link from "next/link";

const MingTi = Noto_Serif_TC({
  weight: "900",
});

const h1class = `${MingTi.className} text-2xl leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white`;
export default function Hero() {
  // config font

  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 content-center">
            <h1 className={h1class}>最新活動: 台灣喉科醫學會冬季學術研討會</h1>
            <div
              className={`p-5 py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 `}
            >
              台灣喉科醫學會於2023/1/8(日)預計於基隆長庚醫院舉辦，主題為咽喉逆流的最新治療以及喉科臨床病例討論會。
              <ul className="pt-5 dark:text-sky-200 text-slate-800 text-sm sm:text-md lg:text-lg">
                <li>地點：基隆長庚紀念醫院 五樓國際會議中心 </li>
                <li>地址：基隆市安樂區麥金路222號</li>
              </ul>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14448.098310160252!2d121.70629557456493!3d25.134859917479435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d4ddb4595a7db%3A0x4b97f433c070bf14!2z6ZW35bqa6Yar55mC6LKh5ZyY5rOV5Lq65Z-66ZqG6ZW35bqa57SA5b-16Yar6Zmi!5e0!3m2!1szh-TW!2stw!4v1670979313890!5m2!1szh-TW!2stw"
                width="300"
                height="300"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="m-3 shadow-lg w-10/12 sm:w-96 lg:w-10/12 "
              ></iframe>
            </div>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="currentevent"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              >
                報名
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2 ">
          <div className=" border-blue-200 border-10 p-3 shadow-lg">
            <Image
              src={heroImg}
              width="800"
              height="532"
              alt="KCGMH"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
 