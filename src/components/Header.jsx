// import { Sun } from "lucide-react";
import logo from "/logo.svg";
import Sheet from "./ui/Sheet";

// Updates theme
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.classList.add(savedTheme);
});

function Logo() {
  return (
    <div className="mx-auto">
      <img src={logo} alt="vite logo" width="" />
    </div>
  );
}

function Links() {
  return (
    <div className="space-x-3 text-accent">
      <a href="#" className="hover:underline">
        Github
      </a>
      <a href="#" className="hover:underline">
        Socials
      </a>
    </div>
  );
}

/* ------------- disabled for now ------------ */
// function ThemeToggle() {
//   function handleToggleTheme() {
//     const currentTheme = document.documentElement.classList.contains("light")
//       ? "light"
//       : "dark";

//     const newTheme = currentTheme === "light" ? "dark" : "light";

//     localStorage.setItem("theme", newTheme);
//     document.documentElement.classList.remove(currentTheme);
//     document.documentElement.classList.add(newTheme);
//   }

//   return (
//     <div className="ml-auto p-1 rounded-full hover:bg-gray-50 dark:hover:bg-neutral-700">
//       <Sun size={18} strokeWidth={2} id="toggle" onClick={handleToggleTheme} />
//     </div>
//   );
// }

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
      <Sheet />
    </div>
  );
}

export default function Header() {
  return (
    <div className="wrapper max-w-4xl mx-auto w-full flex gap-x-3 items-center h-[26px]">
      <MenuIcon />
      <Logo />
      <Links />
    </div>
  );
}
