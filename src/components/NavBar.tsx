"use client";
import { paths } from "@/paths";
import Link from "next/link";

import MobileNav from "./MobileNav";

function NavBar() {
  const links = [
    { label: "About", path: paths.about() },
    { label: "Professional Projects", path: paths.projects() },
    { label: "Personal Work", path: paths.work() },
    { label: "Contact", path: paths.contact() },
  ];

  const renderedLinks = links.map((link, index) => {
    return (
      <li className="group relative" key={index}>
        <Link href={link.path} className="relative">
          <span>{link.label}</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
        </Link>
      </li>
    );
  });

  return (
    <div className="bg-primarylight/80 text-neutral-50 navbar fixed top-0 z-10 w-full">
      <div className="container flex items-center justify-between py-5">
        <div>
          <Link href={"/"} className="uppercase text-xl font-medium">
            Gabriel Barberiz
          </Link>
        </div>

        <ul className="hidden md:flex md:items-center gap-x-12">
          {renderedLinks}
        </ul>

        <MobileNav links={links} />
      </div>
    </div>
  );
}

export default NavBar;
