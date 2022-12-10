import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Footer() {
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative ">
      <Container>
        <div className="flex flex-col justify-center border-t border-gray-200">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            贊助 <span className="text-indigo-600">台灣喉科醫學會</span>{" "}
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="p-3 shadow-lg text-gray-400 dark:text-gray-400">
              <a href="">
                <Image src="/img/tty.jpg" height={100} width={300}></Image>
              </a>
            </div>
            {/*
            <div className="p-3 shadow-lg text-gray-400 dark:text-gray-400">
              <a href="">
                <Image src="/img/tt.jpg" height={100} width={300}></Image>
              </a>
            </div>
            */}
          </div>
        </div>
      </Container>
      <Container className="shadow-xl m-0 border-black border-2 max-w-screen-xl bg-slate-800 text-slate-200">
        <div className="place-content-center md:flex max-w-screen-xl  ">
          <div className="p-4 md:shrink-0 ">
            <h1 className="leading-8 text-center border-b-sky-600 border-b-2">
              Follow us 追蹤我們
            </h1>
            <div className=" flex justify-center mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://www.facebook.com/groups/738069780632980"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Facebook</span>
                <Facebook />
              </a>
              <a
                href="https://line.me/R/ti/g/-eI-Qs8Iq4"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Line</span>
                <Image
                  src="/img/brands/LINE_logo.svg"
                  height={24}
                  width={24}
                ></Image>
              </a>
            </div>
          </div>
          <div className="p-4  ">
            <h1 className="leading-8 text-center border-b-sky-600 border-b-2">
              學會秘書處
            </h1>
            <ul className="leading-8 text-lg p-5 md:text-sm ">

              <li className="font-bold">林麗芸 秘書</li>
              <li>電話：<a href="tel:03-3281200 #3967"> 03-3281200 #3967</a></li>
              <li className="font-bold">秘書長 辛立仁醫師</li>
              <li>e-mail: <a className="text-blue-400" href="lijen.hsin@gmail.com">lijen.hsin@gmail.com</a></li>
              <li className="font-bold">副秘書長 盧怡安醫師</li>
              <li className="">e-mail: <a className="text-blue-400" href="season4990@hotmail.com">season4990@hotmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-300 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. 台灣喉科醫學會 Taiwan
          Laryngological Association
        </div>
      </Container>

      {/* Do not remove this */}
      <Backlink />
    </div>
  );
}

 
const Facebook = ({ size = 30 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 30 30"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);
 

 

const Backlink = () => {
  return (
    <a
      href="https://web3templates.com"
      target="_blank"
      rel="noopener"
      className="absolute flex px-3 py-1 space-x-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded shadow-sm place-items-center left-5 bottom-5 dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        className="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="29.5385" rx="2.76923" fill="#362F78" />
        <path
          d="M10.14 21.94H12.24L15.44 12.18L18.64 21.94H20.74L24.88 8H22.64L19.58 18.68L16.36 8.78H14.52L11.32 18.68L8.24 8H6L10.14 21.94Z"
          fill="#F7FAFC"
        />
      </svg>

      <span>Design modified from：Web3Templates ｜ Nextly</span>
    </a>
  );
};
