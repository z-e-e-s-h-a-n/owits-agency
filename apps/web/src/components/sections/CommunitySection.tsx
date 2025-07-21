import React from "react";
import { Button } from "@workspace/ui/components/button";
import { Star, Map } from "lucide-react";
import ReviewAvatars from "@/components/ui/ReviewAvatars";
import { cn } from "@workspace/ui/lib/utils";
import Image from "@/components/ui/Image";

const avatarConfigs = [
  // Left side
  { size: 120, left: 20, top: 150, bg: "bg-[#B3E5FC]" },
  { size: 80, left: 140, top: 290, bg: "bg-#A5D6A7]" },
  { size: 56, left: 40, top: 370, bg: "bg-[#FFF59D]" },
  { size: 64, left: 200, top: 190, bg: "bg-[#FFCCBC]" },
  // Right side
  { size: 120, right: 60, top: 180, bg: "bg-[#B3E5FC]" },
  { size: 80, right: 120, top: 320, bg: "bg-[#A5D6A7]" },
  { size: 56, right: 40, top: 370, bg: "bg-[#FFF59D]" },
  { size: 64, right: 220, top: 290, bg: "bg-[#FFCCBC]" },
  { size: 64, right: 200, top: 410, bg: "bg-[#CE93D8]" },
];

const featured = [
  {
    title: "Santorini Greece",
    location: "Greece",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    rating: 4.5,
  },
  {
    title: "Perfect day in Dubai",
    location: "Dubai, Tower",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
    rating: 4.5,
  },
];

const CommunitySection = () => (
  <section className="relative w-full flex flex-col items-center gap-8 py-8">
    <h2 className="text-4xl font-bold">Join with our community</h2>
    <p className="text-muted-foreground text-base text-center max-w-xl">
      Join our travel community to explore, connect, and make your next
      adventure unforgettable.
    </p>
    <Button size="lg" className="mb-4">
      Join Now
    </Button>
    {avatarConfigs.map((cfg, i) => (
      <div
        key={i}
        className={`absolute rounded-full flex items-center justify-center ${cfg.bg}`}
        style={{
          left: cfg.left,
          right: cfg.right,
          top: cfg.top,
          width: cfg.size,
          height: cfg.size,
          zIndex: 10 - i,
        }}
      >
        <Image
          src={`https://randomuser.me/api/portraits/men/${i + 60}.jpg`}
          alt="User avatar"
          width={cfg.size}
          height={cfg.size}
          className="rounded-full border-2 shadow"
        />
      </div>
    ))}

    <div className="flex gap-8 mt-6">
      {featured.map((f, i) => (
        <div
          key={i}
          className={cn(
            "p-2 space-y-2 w-64 overflow-hidden bg-card rounded-2xl",
            i / 2 === 0 && "translate-y-8"
          )}
        >
          <Image
            src={f.image}
            alt={f.title}
            width={400}
            height={400}
            className={"w-full h-40 rounded-xl"}
          />
          <div className="space-y-4">
            <span className="font-medium text-base">{f.title}</span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Map className="size-4" />
              {f.location}
            </span>
            <div className="flex justify-between items-center w-full">
              <ReviewAvatars />
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Star className="fill-primary size-4 text-primary" /> {f.rating}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CommunitySection;
