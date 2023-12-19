import logo from "../assets/velvet-icon.svg";
import bagIcon from "../assets/bag.svg";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="mx-auto md:translate-x-[25px]">
      <img src={logo} alt="vite logo" width="" />
    </div>
  );
}

function BagSVG() {
  return (
    <>
      <img
        src={bagIcon}
        className="w-[18px] cursor-pointer"
        alt="bag icon"
        title="shop more"
      />
    </>
  );
}

function Links() {
  return (
    <div className="space-x-3 hidden md:block ">
      <Link to={`/About/`} className="header-link">
        About
      </Link>
      <Link to={`#`} className="header-link">
        Contact
      </Link>
      <Link to={`#`} className="header-link">
        Services
      </Link>
    </div>
  );
}

function MenuIcon() {
  function handleBodyStylesAndSheetVisibility() {
    document.getElementById("sheet").classList.toggle("hidden");
    document.body.classList.toggle("overflow-hidden");
  }

  return (
    <div className="md:hidden">
      <div
        id="menu-icon"
        onClick={handleBodyStylesAndSheetVisibility}
        className="cursor-pointer"
      >
        <svg
          width="18px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path d="M24 0L24 0L24 24L0 24L0 0L24 0Z" id="path_1" />
            <clipPath id="clip_1">
              <use xlinkHref="#path_1" clipRule="evenodd" fillRule="evenodd" />
            </clipPath>
          </defs>
          <g id="menu" clipPath="url(#clip_1)">
            <path
              d="M24 0L24 0L24 24L0 24L0 0L24 0Z"
              id="menu"
              fill="none"
              stroke="none"
            />
            <path
              d="M13.625 12L4 12"
              id="Line"
              fill="none"
              fillRule="evenodd"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 6L4 6"
              id="Line"
              fill="none"
              fillRule="evenodd"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 18L4 18"
              id="Line"
              fill="none"
              fillRule="evenodd"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="wrapper container-4xl bg-white/[.9] backdrop-blur-sm shadow-md w-full rounded md:rounded-md">
      <div className="flex gap-x-3 items-center px-3 py-2 md:py-3 ">
        <MenuIcon />
        <div className="hidden md:block">
          <BagSVG />
        </div>
        <Logo />
        <Links />
        <div className="md:hidden">
          <BagSVG />
        </div>
        {/* <ShoppingBag size={18} className=""/> */}
      </div>
    </div>
  );
}
