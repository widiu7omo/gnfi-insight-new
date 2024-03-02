import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type HeaderType = {
  title?: string;
  coverImage: string;
  customTitle?: ReactNode;
  className?: string;
};
export default function Header({
  title,
  coverImage,
  className,
  customTitle,
}: HeaderType) {
  return (
    <div
      className={cn(
        "h-[600px] bg-center bg-cover flex items-center justify-center",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%),url(${coverImage})`,
      }}
    >
      {customTitle ? (
        customTitle
      ) : (
        <h2 className="text-5xl font-bold text-white max-w-5xl text-center leading-snug">
          {title}
        </h2>
      )}
    </div>
  );
}
