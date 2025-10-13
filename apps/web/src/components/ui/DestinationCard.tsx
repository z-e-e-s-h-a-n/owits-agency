import { Star } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import MoveUpRight from "@/components/icons/MoveUpRight";

interface DestinationCardProps {
  dest: {
    title: string;
    image: string;
    price: string;
    rating: number;
  };
}

async function DestinationCard({ dest }: DestinationCardProps) {
  return (
    <Link
      href="#"
      className="basis-1/4 rounded-2xl border overflow-hidden group"
    >
      <div className="relative w-full">
        <Image
          src={dest.image}
          alt={dest.title}
          width={400}
          height={400}
          className={" size-[280px] w-full"}
        />

        <MoveUpRight className="absolute top-3 right-2 size-12 group-hover:bg-primary group-hover:text-primary-foreground" />
      </div>

      <div className="flex justify-between items-end gap-2 p-4">
        <div className="flex flex-col">
          <span className="font-semibold text-xl text-foreground">
            {dest.title}
          </span>
          <span className="text-muted-foreground">{dest.price}</span>
        </div>
        <span className="flex items-center gap-1 text-md font-medium ">
          <Star className="size-4 fill-primary" />
          {dest.rating}.0
        </span>
      </div>
    </Link>
  );
}

export default DestinationCard;
