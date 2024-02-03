import { HeaderButton } from "./HeaderButton";
import { Logo } from "@/icons/Logo";
import { Aside } from "./Aside";
import { SearchIcon } from "@/icons/SearchIcon";
import { UserIcon } from "@/icons/UserIcon";
import { WishListIcon } from "@/icons/WishListIcon";
import { useState } from "react";

export function Header() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) setColor(!color);
    else setColor(true);
  };
  const whiteColorClassName = "text-zinc-100";
  const blackColorClassName = "text-zinc-900";

  window.addEventListener("scroll", changeColor);

  return (
    <header
      key={"header"}
      className={`z-[100] fixed top-0 w-screen py-6 px-8
      max-sm:px-4 justify-between flex h-20
      ${color ? whiteColorClassName : blackColorClassName} `}
    >
      <ul className="flex flex-grow basis-0 gap-2 items-center">
        <li className="flex">
          <Aside />
        </li>
        <li className="flex lg:hidden hover:text-zinc-600 hover:scale-105 transition-transform">
          <a href="#">
            <SearchIcon />
          </a>
        </li>
        <li
          className="border-zinc-900 border rounded flex
        p-1.5 max-lg:hidden gap-2"
        >
          <SearchIcon />
          <label>
            <input
              type="text"
              className="bg-transparent outline-none placeholder:text-zinc-900
            placeholder:font-semibold placeholder:text-lg"
              placeholder="Search"
              list="searchs"
            />
          </label>
          <datalist id="searchs" className="">
            <option value="aaa"></option>
          </datalist>
        </li>
      </ul>

      <div className="flex">
        <a href="#">
          <Logo />
        </a>
      </div>

      <ul className="flex justify-end gap-2 flex-grow basis-0 items-center">
        <HeaderButton>
          <UserIcon />
        </HeaderButton>
        <HeaderButton>
          <WishListIcon />
        </HeaderButton>
      </ul>
    </header>
  );
}
