import { twMerge } from "tailwind-merge";

import { Separator } from "@/components/ui/separator";

interface NotFoundProps {
  children?: React.ReactNode;
}

export function NotFound({ children }: NotFoundProps) {

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-4 min-h-screen dark:bg-neutral-950">
      {children || (
        <div className="gap-4 flex items-center">
          <span
            className={twMerge("text-2xl text-gray-900", "dark:text-white")}
          >
            404
          </span>
          <Separator className="min-h-8" orientation="vertical" />
          <span
            className={twMerge("text-2xl text-gray-800", "dark:text-white")}
          >
            Not Found
          </span>
        </div>
      )}
    </div>
  );
}
