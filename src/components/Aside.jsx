import { useState } from "react";

const CloseIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M18 6l-12 12"></path>
      <path d="M6 6l12 12"></path>
    </svg>
  );
};

const NavSectionIcon = ({ children }) => {
  return (
    <a
      href="#"
      className="transition-transform hover:scale-105 hover:text-zinc-600"
    >
      {children}
    </a>
  );
};

const BarsIcon = () => {
  return (
    <svg
      className="w-6 h-6"
      strokeWidth="2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 6l16 0"></path>
      <path d="M4 12l16 0"></path>
      <path d="M4 18l16 0"></path>
    </svg>
  );
};

export function Aside() {
  const initialFolow = true;
  const [isFolowing, setIsFolowing] = useState(initialFolow);

  const asideClassName = isFolowing
    ? "sm:-translate-x-96 max-sm:-translate-x-full"
    : "";
  const categoriesClassName = isFolowing
    ? "text-zinc-100 hover:text-zinc-400"
    : "text-zinc-800 hover:text-zinc-600";

  const handleClick = () => {
    setIsFolowing(!isFolowing);
  };
  return (
    <nav className="flex">
      <div className="flex gap-2 items-start">
        <button
          onClick={handleClick}
          className={`text-zinc-800 hover:text-zinc-600
            hover:scale-105 transition-transform`}
        >
          <BarsIcon />
        </button>
      </div>

      <article
        className={`absolute top-0 left-0 transition-transform 
          bg-zinc-100 h-screen w-80 text-zinc-800 font-bold 
          text-3xl flex flex-col gap-2 max-sm:w-full px-8
          max-sm:pl-4 max-sm:pt-4 
          ${asideClassName}
          `}
        id="NavMenu"
      >
        <div className="pt-6">
          <button
            onClick={handleClick}
            className={`
            text-zinc-800 hover:text-zinc-600
              hover:scale-105 transition-transform`}
          >
            <BarsIcon />
          </button>
        </div>
        <ul
          className={`flex flex-wrap gap-2 
            font-semibold items-center
            ${categoriesClassName}`}
        >
          <li className="flex">
            <a
              href="#"
              className={`text-lg hover:scale-105
                transition-transform ${categoriesClassName}`}
            >
              Men
            </a>
          </li>

          <li>
            <span
              className={`font-light text-2xl
                transition-transform ${categoriesClassName}`}
            >
              I
            </span>
          </li>

          <li className="flex">
            <a
              href="#"
              className={`text-lg hover:scale-105
                transition-transform ${categoriesClassName}`}
            >
              Women
            </a>
          </li>
        </ul>
        <NavSectionIcon> Sale </NavSectionIcon>
        <NavSectionIcon> Clothes </NavSectionIcon>
        <NavSectionIcon> Shoes </NavSectionIcon>
        <NavSectionIcon> Accesories </NavSectionIcon>
        <NavSectionIcon> Bags </NavSectionIcon>
        <NavSectionIcon> New Season </NavSectionIcon>
      </article>
    </nav>
  );
}
