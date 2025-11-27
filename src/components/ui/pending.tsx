import { Spinner } from "./spinner";

export function Pending() {
  return (
    <div className="flex flex-col space-y-2 items-center min-h-dvh justify-center p-4">
      <Spinner />
      <div className="text-sm font-medium">Please Wait...</div>
    </div>
  );
}
