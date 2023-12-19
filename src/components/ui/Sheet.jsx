import { BadgeInfoIcon, MessagesSquare, PhoneCall, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sheet() {
  function handleClose() {
    document.getElementById("sheet").classList.toggle("hidden");
    document.body.classList.toggle("overflow-hidden");
  }
  return (
    <div
      id="sheet"
      className="absolute top-[0px] left-0 p-4 px-6 w-full h-[100vh] bg-white/90 hidden backdrop-blur-[10px]"
    >
      <div className="flex mb-2">
        <X
          id="close"
          onClick={handleClose}
          size={18}
          className="cursor-pointer hover:text-black"
        />
      </div>

      <div className="mx-auto max-w-[350px] divide-y divide-primary">
        <Link
          to={`/About/`}
          className="header-link flex py-3"
          onClick={handleClose}
        >
          <BadgeInfoIcon size={14} className="mr-[6px]" />
          About
        </Link>
        {/* <Link to={`#`} className="header-link flex py-3">
          <PhoneCall size={14} className="mr-[6px]" />
          Contact
        </Link> */}
        <Link
          to={`/Services/`}
          className="header-link flex py-3"
          onClick={handleClose}
        >
          <MessagesSquare size={14} className="mr-[6px]" />
          Services
        </Link>
      </div>
    </div>
  );
}
