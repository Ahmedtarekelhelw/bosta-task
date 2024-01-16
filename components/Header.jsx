import Link from "next/link";
import { useMemo } from "react";

import { useLocale, useTranslations } from "next-intl";

import { MdChevronRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

import Logo from "./Logo";
import Button from "./Button";
import ShipmentSearch from "./ShipmentSearch";
import MobileNav from "./MobileNav";

const Header = () => {
  const locale = useLocale();
  const t = useTranslations("header");
  const dir = locale === "ar" ? "right" : "left";

  const reverse = locale === "ar" && "flex-row-reverse";

  const links = useMemo(() => [t("Home"), t("Prices"), t("Call_Sales")], []); // eslint-disable-line

  const mobileLinks = useMemo(
    () => [t("Home"), t("Prices"), t("Call_Sales"), t("Login"), t("ENG")],
    [] // eslint-disable-line
  );

  return (
    <header
      className={`flex px-4 sm:px-8 md:px-14 font-bold text-[16px] shadow-md ${reverse}  justify-between items-center bg-white`}
    >
      <Logo />

      {/* center links */}
      <nav className="hidden md:block">
        <ul className={`flex gap-10 items-center ${reverse}`}>
          {links.map((link, i) => (
            <li
              key={i}
              className="hover:text-[#e30613] transition-all duration-200"
            >
              <Link href="/">{link}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* left btns */}
      <div
        className={` ${reverse} flex gap-2 select-none md:gap-5 items-center`}
      >
        {/* shipment btn */}
        <div className="group relative">
          <div className=" flex gap-1 items-center group cursor-pointer text-[#e30613] hover:shadow-md px-2 py-5 md:p-6 transition-all duration-200 rounded-tl-lg rounded-tr-lg">
            <h3 className="h-full">{t("Track_Shipment")}</h3>
            <IoIosArrowDown className="hidden group-hover:block" />
            <MdChevronRight size={17} className=" group-hover:hidden" />
          </div>
          <ShipmentSearch dir={dir} />
        </div>

        <MobileNav links={mobileLinks} />

        <Button title={t("Login")} className="hidden md:block" />

        <Button
          title={t("ENG")}
          className={"text-[#e30613] hidden md:block"}
          path={locale === "ar" ? "en" : "ar"}
        />
      </div>
    </header>
  );
};

export default Header;
