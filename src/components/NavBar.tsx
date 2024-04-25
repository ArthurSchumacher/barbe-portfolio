import Link from "next/link";
import { GoListUnordered } from "react-icons/go";

function NavBar() {
  return (
    <div className="bg-primarylighter text-neutral-50 navbar sticky">
      <div className="container flex items-center justify-between py-6">
        <div>
          <h1 className="uppercase text-xl font-medium">Gabriel Barberiz</h1>
        </div>

        <ul className="hidden sm:flex items-center gap-x-12">
          <li>
            <Link href={"/"}>About</Link>
          </li>
          <li>
            <Link href={"/"}>Professional Projects</Link>
          </li>
          <li>
            <Link href={"/"}>Personal Work</Link>
          </li>
          <li>
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>

        <div className="sm:hidden flex">
          <GoListUnordered size={28} className="text-black" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
