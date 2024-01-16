"use client";

import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import Button from "./Button";
import useDirection from "@/hooks/useDirection";

const MobileNav = ({ links }) => {
  const [open, setOpen] = useState(false);

  const { locale, dir } = useDirection();

  return (
    <>
      {open ? (
        <IoCloseSharp
          size={25}
          className="block md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      ) : (
        <MdMenu
          size={25}
          className="block md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      )}

      <ul
        style={{
          [dir]: open ? 0 : "1000px",
        }}
        className={`fixed w-full h-full flex text-${dir} px-8 py-5  flex-col md:hidden  bg-white top-[64px] z-20 transition-all duration-300`}
      >
        {links.map((link, i) => {
          const lang = i === links.length - 1;

          return (
            <li
              key={i}
              className={`border-b-2 py-6 w-full hover:text-[#e30613] transition-all duration-200 select-none`}
              onClick={() => setOpen(false)}
            >
              {lang ? (
                <Button
                  title={link}
                  className={`text-[#e30613] w-full ${
                    dir === "left" ? "text-left" : "text-right"
                  }`}
                  path={locale === "ar" ? "en" : "ar"}
                />
              ) : (
                <Link href={`/${locale}`} className="block w-full">
                  {link}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MobileNav;
