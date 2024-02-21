import {
  ClipboardIcon,
  CopyIcon,
  FacebookIcon,
  Share2Icon,
  ShareIcon,
  TwitterIcon,
} from "lucide-react";

export default function SectionFooter() {
  return (
    <>
      <div className="text-red-500 bg-white w-full text-center py-8 text-base xl:text-2xl relative overflow-clip flex flex-col items-center space-y-8">
        <div className="flex space-x-4 z-10">
          <button type="button" className="hover:bg-red-50 rounded-full p-2">
            <TwitterIcon />
          </button>
          <button type="button" className="hover:bg-red-50 rounded-full p-2">
            <Share2Icon />
          </button>
          <button type="button" className="hover:bg-red-50 rounded-full p-2">
            <FacebookIcon />
          </button>
        </div>
        <div>
          <span className="text-lg">Dibuat oleh </span>
          <span className="font-bold">Good News From Indonesia</span>
        </div>
        <div className="">
          <img src="assets/gnfi.svg" alt="Logo GNFI" className="h-[80px]" />
        </div>
      </div>
    </>
  );
}
