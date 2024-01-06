import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonNavBar = () => {
  return (
    <header className="w-full h-fit py-4 px-4 md:px-14 flex justify-between items-center">
      <div className="font-mono">
        <Skeleton className="w-12 h-12 text-transparent rounded-full bg-zinc-300 dark:bg-zinc-300/30" />
      </div>

      <div className="flex gap-5">
        <Skeleton className="h-10 px-7 text-transparent rounded-md bg-zinc-300 dark:bg-zinc-300/30">
          Category
        </Skeleton>
        <Skeleton className="h-10 px-7 text-transparent rounded-md bg-zinc-300 dark:bg-zinc-300/30">
          Category
        </Skeleton>
        <Skeleton className="h-10 px-7 text-transparent rounded-md bg-zinc-300 dark:bg-zinc-300/30">
          Category
        </Skeleton>
      </div>

      <div className="flex items-center gap-5">
        <Skeleton className="w-12 h-10 rounded-md bg-zinc-300 dark:bg-zinc-300/30" />
        <Skeleton className="w-24 h-10 rounded-md bg-zinc-300 dark:bg-zinc-300/30" />
      </div>
    </header>
  );
};

export default SkeletonNavBar;