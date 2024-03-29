"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import HamMenu from "./utils/HamMenu/HamMenu";

const Navbar = () => {

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image
          src="/hilink-logo.svg"
          alt="logo"
          width={74}
          height={29}
          style={{ width: "auto", height: "auto" }}
        />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <div className="lg:hidden">
        <HamMenu />
      </div>
      {/* // <div className="fixed left-0 top-0 h-full w-[80%] border-r border-r-gray-50 bg-slate-400">
    //     <Image
    //       src="/hilink-logo.svg"
    //       alt="logo"
    //       width={74}
    //       height={29}
    //       className="p-4"
    //       style={{ width: "auto", height: "auto" }}
    //     />
    //   <ul className="pt-12">
    //     {NAV_LINKS.map((link) => (
    //       <li className="regular-16 text-gray-50 flex flex-col p-4 cursor-pointer transition-all hover:font-bold">
    //         <Link
    //           href={link.href}
    //           key={link.key}
    //           className="border-b pb-2"
    //         >
    //           {link.label}
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    // </div> */}
    </nav>
  );
};

export default Navbar;
