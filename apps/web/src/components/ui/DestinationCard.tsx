import { cn } from "@workspace/ui/lib/utils";
import { Star } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "@/components/ui/Image";
import MoveUpRight from "@/components/icons/MoveUpRight";

interface DestinationCardProps {
  variant?: "default" | "small";
  dest: {
    title: string;
    image: string;
    price: string;
    rating: number;
  };
}

async function DestinationCard({
  dest,
  variant = "default",
}: DestinationCardProps) {
  return (
    <Link
      href="#"
      className="basis-1/4 flex flex-col gap-4 overflow-hidden group"
    >
      <div className="relative w-full">
        <Image
          type="remote"
          src={dest.image}
          alt={dest.title}
          width={400}
          height={400}
          className={cn(
            "rounded-2xl",
            variant === "default" ? "h-72" : "size-[280px]"
          )}
        />

        {variant === "small" && (
          <MoveUpRight className="absolute top-2 right-2 size-12 group-hover:bg-primary group-hover:text-primary-foreground" />
        )}
      </div>

      {variant === "default" && (
        <div className="flex border-y border-border justify-between items-end gap-2 py-4">
          <div className="flex flex-col">
            <span className="font-semibold text-base text-foreground">
              {dest.title}
            </span>
            <span className="text-muted-foreground">{dest.price}</span>
          </div>
          <span className="flex items-center gap-1 text-md font-medium ">
            <Star className="size-4 fill-primary" />
            {dest.rating}.0
          </span>
        </div>
      )}
    </Link>
  );
}

export default DestinationCard;
