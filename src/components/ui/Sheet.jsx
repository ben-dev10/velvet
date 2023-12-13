import { FolderGit2, MessagesSquare, PhoneCall, X } from "lucide-react";

export default function Sheet() {
  function handleClose() {
    document.getElementById("sheet").classList.toggle("hidden");
    document.body.classList.toggle("overflow-hidden");
  }
  return (
    <div
      id="sheet"
      className="absolute top-0 left-0 p-4 w-full h-[100vh] bg-white/90 hidden backdrop-blur-[10px]"
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
        <a href="#" className="py-3 hover:underline flex ">
          <FolderGit2 size={14} className="mr-[6px]" />
          Documentation
        </a>
        <a href="#" className="py-3 hover:underline flex ">
          <PhoneCall size={14} className="mr-[6px]" />
          Contact
        </a>
        <a href="#" className="py-3 flex hover:underline">
          <MessagesSquare size={14} className="mr-[6px]" />
          Services
        </a>
      </div>
    </div>
  );
}
