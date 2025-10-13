import { cn } from "@workspace/ui/lib/utils";
import Image from "@/components/ui/Image";
import React from "react";

interface ReviewAvatarsProps {
  variant?: "default" | "hero";
}

function ReviewAvatars({ variant = "default" }: ReviewAvatarsProps) {
  return variant === "default" ? (
    Array.from({ length: 5 }, (_, i) => (
      <Image
        key={i}
        src={`https://randomuser.me/api/portraits/men/${i + 1}.jpg`}
        alt={`portrait-${i + 1}`}
        width={100}
        height={100}
        className="absolute inset-0 size-full"
        wrapperCn={cn("size-[40px] rounded-full shadow-lg", i !== 0 && "-ml-6")}
        style={{ zIndex: i + 1 }}
      />
    ))
  ) : (
    <div className="space-y-1">
      <div className="flex items-center">
        {Array.from({ length: 4 }, (_, i) => (
          <Image
            key={i}
            src={`https://randomuser.me/api/portraits/men/${i + 40}.jpg`}
            alt={`portrait-${i + 1}`}
            width={100}
            height={100}
            className="absolute inset-0 size-full"
            wrapperCn={cn(
              "size-[60px] rounded-full shadow-lg",
              i !== 0 && "-ml-4"
            )}
            style={{ zIndex: i + 1 }}
          />
        ))}
      </div>
      <div className="[&>span:not(:first-child)]:font-medium">
        <span className="underline">Reviews</span> <span>4.8</span> out of{" "}
        <span>5</span>
      </div>
    </div>
  );
}

export default ReviewAvatars;
