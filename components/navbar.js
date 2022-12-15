import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure, Transition } from "@headlessui/react";

export default function Navbar() {
  const navigation = [
    { title: "關於我們", url: "about" },
    { title: "最新消息", url: "news" },
    { title: "學會活動", url: "activity" },
    { title: "專家會員名單", url: "list" },
    { title: "衛教資訊", url: "contact" },
  ];

  return (
    <div className="w-full shadow-lg bg-gray-100 dark:bg-slate-900">
      <nav className=" border-0 border-black container relative flex flex-wrap items-center  p-8 mx-auto  xl:px-0 xl:place-content-evenly">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <div className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-cyan-500 ">
                    <span>
                      <img
                        src="/img/logo.png"
                        alt="N"
                        width="32"
                        height="32"
                        className="w-8"
                      />
                    </span>
                    <span>TLA</span>
                  </div>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto  text-gray-600 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-gray-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className=" w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="pl-20 border-black border-0 flex flex-wrap w-full my-2 lg:hidden ">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href={"/" + item.url}>
                        <div className="flex-none border-black border-0 w-22 px-4 py-2  text-black rounded-md text-md dark:text-gray-300 hover:text-sky-100 hover:bg-gray-800 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none dark:focus:bg-trueGray-700">
                          {item.title}
                        </div>
                      </Link>
                    ))}
                    {/*}
                      <Link href="/">
                        <div className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">
                          回首頁
                        </div>
                      </Link>
                      */}
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="flex-initial border-black border-0 hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex ">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={"/" + menu.url}>
                  <div className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline  dark:text-gray-200 hover:text-sky-800 hover:bg-sky-200 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 xl:text-xl dark:hover:text-black">
                    {menu.title}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
         
        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link href="#">
            <div className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
              會員登入
            </div>
          </Link>

          <ThemeChanger />
        </div>
            
      </nav>
    </div>
  );
}
