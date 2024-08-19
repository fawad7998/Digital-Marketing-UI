"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Image from "next/image";

import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

import { MdPhoneInTalk } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

const navItems = [
  {
    label: "For Professionals",
    link: "#",
    children: [
      { label: "Todo list", link: "#" },
      { label: "Calendar", link: "#" },
      { label: "Reminders", link: "#" },
      { label: "Planning", link: "#" },
    ],
  },
  {
    label: "For Companies",
    link: "#",
    children: [
      { label: "History History", link: "ali" },
      { label: "Our Team", link: "husnian" },
      { label: "Blog", link: "#" },
    ],
  },
  {
    label: "For Entrepreneur",
    link: "#",
    children: [
      { label: "Todo list", link: "#" },
      { label: "CalendarHistoryHistory", link: "#" },
      { label: "Reminders", link: "#" },
      { label: "Planning", link: "#" },
    ],
  },
  {
    label: "About",
    link: "#",
    children: [
      { label: "Todo list", link: "#" },
      { label: "Calendar", link: "#" },
      { label: "Reminders", link: "#" },
      { label: "Planning", link: "#" },
    ],
  },
  { label: "Contact us", link: "#" },
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenu] = useState(false);

  useEffect(() => {
    // Ensure that the side menu state is consistent
    setSideMenu(false);
  }, []);
  function openSideMenu() {
    setSideMenu(true);
  }
  function closeSideMenu() {
    setSideMenu(false);
  }
  return (
    <>
      {/*Top Nav*/}
      <section
        ref={animationParent}
        className="bg-top-nav-color max-xs:hidden transition-all"
      >
        <div className="flex items-center justify-between w-full max-w-6xl h-[50px] px-4 mx-auto">
          {/*left*/}
          <p className="text-white font-normal tracking-wide">
            Welcome to{" "}
            <span className="text-orange-500">Learn Digital Marketing</span>
          </p>
          {/*right*/}
          <div className="flex gap-2">
            <Link href="https://www.fb.com" target="_blank">
              <TiSocialFacebook className="bg-white text-blue-800 p-1 text-2xl rounded-full hover:scale-125 transition-all cursor-pointer" />
            </Link>
            <Link href="https://www.twitter.com" target="_blank">
              <TiSocialTwitter className="bg-white text-blue-400 p-1 text-2xl rounded-full hover:scale-125 transition-all cursor-pointer" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <IoLogoInstagram className="bg-white text-pink-400 p-1 text-2xl rounded-full hover:scale-125 transition-all cursor-pointer" />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank">
              <TiSocialLinkedin className="bg-white text-blue-600 p-1 text-2xl rounded-full hover:scale-125 transition-all cursor-pointer" />
            </Link>
          </div>
        </div>
      </section>
      {/*Middel Nav*/}
      <section ref={animationParent} className="hidden lg:block transition-all">
        <div className=" flex items-center justify-between w-full max-w-6xl mx-auto bg-white p-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Image
              src="/logo.png" // Replace with your logo path
              alt="Learn Digital Marketing Logo"
              width={220} // Adjust size as necessary
              height={110}
              className="object-contain"
            />
          </div>

          {/* Contact Info Section */}
          <div className="flex items-center space-x-8 text-sm text-gray-600">
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <MdPhoneInTalk className="text-orange-color text-4xl font-bold" />
              <span>
                <b className="text-heading-color">Requesting a Call:</b> <br />
                <strong className="text-sm font-light text-text-color">
                  (210) 123 451
                </strong>
              </span>
            </div>

            {/* Divider */}
            <div className="border-l h-8 border-gray-300"></div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <IoIosMail className="text-orange-color text-4xl font-bold" />
              <span>
                <b className="text-heading-color">Mail us for help:</b> <br />
                <strong className="text-sm font-light text-text-color">
                  info@learndigitalmarketing.academy
                </strong>
              </span>
            </div>

            {/* Divider */}
            <div className="border-l h-8 border-gray-300"></div>

            {/* Location */}
            <div className="flex items-center space-x-4">
              <MdLocationOn className="text-orange-color text-4xl font-bold" />
              <span>
                <b className="text-heading-color">09, SAIF Zone 514789</b>{" "}
                <br />
                <strong className="text-sm font-light text-text-color">
                  Dubai UAE
                </strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/*Navbar*/}
      <div
        className={`mx-auto flex w-full max-w-6xl justify-start max-sm:justify-between px-4 md:px-[100px] ${!isSideMenuOpen && "py-3"
          } lg:py-0 text-sm shadow-md bg-white lg:bg-blue-navi-color`}
      >
        <section ref={animationParent} className="flex items-center gap-10">
          {!isSideMenuOpen && (
            <Image
              src="/logo.png"
              width={100}
              height={100}
              alt="logo"
              className="hidden max-sm:block"
            />
          )}
          <div className="hidden md:flex items-center gap-4 transition-all">
            {navItems.map((d, i) => (
              <div
                key={i}
                className="relative group px-2 py-5 transition-all border-b-4 border-transparent hover:border-orange-color"
              >
                <Link href={d.link ?? "#"}>
                  <p className="flex cursor-pointer items-center gap-2 text-heading-color lg:text-white font-bold">
                    <span>{d.label}</span>
                    {d.children && (
                      <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                    )}
                  </p>
                </Link>
                {d.children && (
                  <div className="absolute group left-0 top-[64px] hidden w-auto flex-col gap-1 rounded-b-sm bg-white py-3 shadow-md transition-all group-hover:flex">
                    {d.children.map((ch, i) => (
                      <Link
                        key={i}
                        href={ch.link ?? "#"}
                        className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-text-color hover:text-green-color"
                      >
                        <span className="whitespace-nowrap pl-3">
                          {ch.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        </section>

        <FiMenu
          onClick={openSideMenu}
          className={`cursor-pointer text-4xl md:hidden ${isSideMenuOpen && "hidden"
            }`}
        />
      </div>
    </>
  );
}

function MobileNav({ closeSideMenu }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-start bg-black/60 md:hidden">
      <div className="h-full w-[65%] overflow-auto bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl"
          />
        </section>
        <div className="flex flex-col text-base gap-2 transition-all">
          <Image src="/logo.png" width={150} height={75} alt="logo" />

          {navItems.map((d, i) => (
            <SingleNavItem key={i} label={d.label} link={d.link}>
              {d.children}
            </SingleNavItem>
          ))}
        </div>
        <section className="flex flex-col gap-4 mt-4 items-start text-gray-800 md:hidden">
          {/* Contact Info Section */}
          <div className="space-y-2 text-start ">
            <Link href="#" className="flex items-center space-x-2">
              <MdPhoneInTalk className="text-orange-color text-3xl font-bold" />
              <span>
                <b className="text-heading-color">Requesting a Call:</b> <br />
                <strong className="text-sm font-light text-text-color">
                  (210) 123 451
                </strong>
              </span>
            </Link>

            {/* Email */}
            <Link href="#" className="flex items-center space-x-2">
              <IoIosMail className="text-orange-color text-3xl font-bold" />
              <span>
                <b className="text-heading-color">Mail us for help:</b> <br />
                <strong className="text-sm font-light text-text-color">
                  info@learndigitalmarketing.academy
                </strong>
              </span>
            </Link>

            {/* Location */}
            <Link href="#" className="flex items-center space-x-2">
              <MdLocationOn className="text-orange-color text-3xl font-bold" />
              <span>
                <b className="text-heading-color">09, SAIF Zone 514789</b>{" "}
                <br />
                <strong className="text-sm font-light text-text-color">
                  Dubai UAE
                </strong>
              </span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function SingleNavItem(d) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    setItem(!isItemOpen);
  }

  return (
    <div
      ref={animationParent}
      onClick={toggleItem}
      className="relative px-2 py-1 transition-all"
    >
      <Link href={d.link ?? "#"}>
        <p className="flex cursor-pointer items-center gap-2 text-text-color group-hover:text-green-color">
          <span>{d.label}</span>
          {d.children && (
            <IoIosArrowDown
              className={`text-xs transition-all ${isItemOpen && "rotate-180"}`}
            />
          )}
        </p>
      </Link>
      {isItemOpen && d.children && (
        <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-text-color hover:text-green-color"
            >
              <span className="whitespace-nowrap pl-3">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
