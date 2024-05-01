import { links } from "@/paths";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
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
    <footer className="flex flex-col bg-primarylight">
      <div>
        <div className="flex items-center justify-center pt-4 gap-x-4">
          <FaGithub size={30} className="text-neutral-50" />
          <FaLinkedin size={30} className="text-neutral-50" />
          <FaInstagram size={30} className="text-neutral-50" />
        </div>
        <nav className="flex items-center justify-center py-4">
          <ul className="flex items-center justify-center gap-x-8 text-neutral-50">
            {renderedLinks}
          </ul>
        </nav>
      </div>
      <div className="bg-primarylighter py-2 flex items-center justify-center">
        <p className="text-neutral-50">Desenvolvido por Arthur Schumacher</p>
      </div>
    </footer>
  );
}

export default Footer;
