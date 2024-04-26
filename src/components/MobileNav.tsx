"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GoListUnordered } from "react-icons/go";
import { LiaTimesSolid } from "react-icons/lia";
import { Button } from "@/components/ui/button";

interface NavbarMenuModalProps {
  links: { label: string; path: string }[];
}

function NavbarMenuModal({ links }: NavbarMenuModalProps) {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (node.current && !node.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          setOpen(!open);
        }}
        variant="ghost"
        size="icon"
        className="sm:hidden static flex items-center justify-center"
      >
        {open ? <LiaTimesSolid size={28} /> : <GoListUnordered size={28} />}
      </Button>
      <div
        className={`fixed top-0 w-[60%] h-dvh z-40 bg-primarylight transition-all duration-300 ease-in ${
          open ? "left-0" : "left-[-100%]"
        }`}
      >
        <ul className="flex flex-col gap-y-4 px-4 py-8">
          {links.map((link, index) => {
            return (
              <li className="group relative" key={index}>
                <Link href={link.path} className="relative">
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default NavbarMenuModal;
