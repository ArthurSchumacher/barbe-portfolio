import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface AboutProps {
  imagePath: string;
  isReverse?: boolean;
  title?: string;
  link?: string;
  pathToLink?: string;
  children: ReactNode;
}

function About({
  isReverse,
  imagePath,
  title,
  link,
  pathToLink,
  children,
}: AboutProps) {
  return (
    <div className="grid grid-cols-2">
      <div
        className={`sm:col-span-1 col-span-2 flex items-center justify-center p-6 ${
          isReverse ? "sm:order-1" : ""
        }`}
      >
        <Image
          width={368}
          height={368}
          src={imagePath}
          alt="Foto 1 sobre mim."
          className="rounded-full object-contain border-4 border-primarylighter"
        />
      </div>
      <div className="sm:col-span-1 col-span-2 flex flex-col items-center justify-center p-6">
        {title && <h1 className="self-start text-3xl py-4">{title}</h1>}
        <p
          className={`sm:text-left text-justify ${
            isReverse ? "sm:text-right" : ""
          }`}
        >
          {children}
        </p>
        {link && pathToLink && (
          <Link href={pathToLink} className="ml-auto py-4 underline">
            {link}
          </Link>
        )}
      </div>
    </div>
  );
}

export default About;
