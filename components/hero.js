import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/tsgh.jpg";
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
            <h1 className={h1class}>
              最新活動: 2023 台灣喉科醫學會春季學術研討會
            </h1>
            <div
              className={`p-5 py-5 text-md leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 `}
            >
              <p className="p-5 bg-gray-100 dark:bg-gray-900">
                台灣喉科醫學會春季演講會精彩開講！本次演講主題為喉部經口手術研討，以及特殊病例的研討。內容精彩，歡迎您的加入！。
              </p>
              <ul className="pl-5 lg:pl-10 list-disc pt-5 dark:text-sky-200 text-slate-800 text-sm sm:text-md lg:text-lg">
                <li>主辦：台灣喉科醫學會。</li>
                <li>主辦：台北三軍總醫院。</li>
                <li> 時間：2023 年 4 月 8 日 (六)</li>
                <li> 地點：台北三軍總醫院 B1 第二演講廳。</li>

                <li> 地址：114 台北市內湖區成功路二段 325 號。</li>
              </ul>
              <div className="m-5 text-red-500 sm:text-sm lg:text-xl">
                {" "}
                已審核台灣耳鼻喉頭頸外科學分1.5分
              </div>
              <div className="w-full lg:h-96 md:h-80 sm:h-80 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.85534276075!2d121.58890171511423!3d25.072891642885107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac8581a0b6e9%3A0x7d52e36317cbca1c!2zMTE05Y-w5YyX5biC5YWn5rmW5Y2A5oiQ5Yqf6Lev5LqM5q61MzI16Jmf!5e0!3m2!1szh-TW!2stw!4v1679379787093!5m2!1szh-TW!2stw"
                  width="100%"
                  height="100%"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="m-3 shadow-lg"
                ></iframe>
              </div>
            </div>

            <div className="place-content-center flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="currentevent"
                className="w-40 p-2  font-medium text-center text-white bg-blue-700 rounded-md "
              >
                報名
              </Link>
            </div>
            <div>
              <table className="mt-10">
                <thead className="bg-blue-300 dark:bg-blue-700">
                  <tr>
                    <th>Time</th>
                    <th>Topic</th>
                    <th>Speaker</th>
                    <th>Moderator</th>
                  </tr>
                </thead>
                <tbody className="bg-sky-100 dark:bg-sky-900">
                  <tr>
                    <td>08:30 – 08:40</td>
                    <td colspan="3">Registration 報到</td>
                  </tr>
                  <tr>
                    <td>08:40 – 09:00</td>
                    <td>Opening Remark 開幕式</td>
                    <td colspan="2">朱永祥主任 / 方端仁理事長</td>
                  </tr>
                  <tr>
                    <td>09:00 – 09:25</td>
                    <td>Transoral thyroidectomy</td>
                    <td>
                      劉紹正醫師
                      <br />
                      三軍總醫院
                    </td>
                    <td>
                      楊宗霖醫師
                      <br />
                      台大醫院
                    </td>
                  </tr>
                  <tr>
                    <td>09:25 – 9:50</td>
                    <td>Tongue base suspension in OSA patients</td>
                    <td>
                      辛立仁醫師
                      <br />
                      林口長庚醫院
                    </td>
                    <td>
                      李學禹醫師
                      <br />
                      林口長庚醫院
                    </td>
                  </tr>
                  <tr>
                    <td>09:50 – 10:15</td>
                    <td>
                      TORS for OSA: postoperational care and
                      <br />
                      complications
                    </td>
                    <td>
                      曹傑漢醫師
                      <br />
                      中山大學附設醫院
                    </td>
                    <td>
                      林婉妮醫師
                      <br />
                      林口長庚醫院
                    </td>
                  </tr>
                  <tr>
                    <td>10:15 – 10:40</td>
                    <td>
                      Transoral Tongue Base Surgery for Sleeprelated
                      <br />
                      Breathing Disorders
                    </td>
                    <td>
                      林新景醫師
                      <br />
                      高雄長庚醫院
                    </td>
                    <td>
                      蔡青劭醫師
                      <br />
                      童綜合醫院
                    </td>
                  </tr>{" "}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="items-center justify-center w-full lg:w-1/2 ">
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
