"use client";
import { paths } from "@/paths";
import Link from "next/link";
import { GoListUnordered } from "react-icons/go";

function NavBar() {
  const links = [
    { label: "About", path: paths.about() },
    { label: "Professional Projects", path: paths.about() },
    { label: "Personal Work", path: paths.about() },
    { label: "Contact", path: paths.about() },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <li className="group relative">
        <Link href={link.path} className="relative">
          <span>{link.label}</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
        </Link>
      </li>
    );
  });

  return (
    <div className="bg-primarylighter text-neutral-50 navbar fixed top-0 z-10 w-full">
      <div className="container flex items-center justify-between py-6">
        <div>
          <h1 className="uppercase text-xl font-medium">Gabriel Barberiz</h1>
        </div>

        <ul className="hidden sm:flex items-center gap-x-12">
          {renderedLinks}
        </ul>

        <div className="sm:hidden flex">
          <GoListUnordered size={28} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
