import React from "react";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { CalendarDays, Clock, MapPin, MoveUpRight } from "lucide-react";
import Image from "@/components/ui/Image";
import SocialIcons from "@/components/ui/SocialIcons";
import ReviewAvatars from "@/components/ui/ReviewAvatars";
import DestinationCard from "@/components/ui/DestinationCard";
import { destinations } from "@/constants";

const HeroSection = () => (
  <section className="flex flex-col md:flex-row gap-8 items-center justify-between py-12">
    {/* Left: Text and Search */}
    <div className=" flex flex-col gap-6 max-w-xl">
      <div>
        <h1 className="text-7xl font-semibold leading-tight mb-2">
          Let's{" "}
          <Image
            src="/images/hero-text.jpg"
            alt=""
            width={200}
            height={200}
            className="inline-block w-[180px] h-[70px] rounded-4xl mx-2"
          />
          Explore the world
        </h1>
        <p className="text-lg text-muted-foreground">
          Discover the World with Us! Your dream destinations and unforgettable
          experiences are just a click away.
        </p>
      </div>
      {/* Search Form */}
      <div className="bg-card rounded-2xl shadow p-6 flex flex-col gap-4">
        <div className="flex gap-2 mb-2">
          <Button variant="default" size="sm">
            Destination
          </Button>
          <Button variant="ghost" size="sm">
            Flight
          </Button>
          <Button variant="ghost" size="sm">
            Hotel
          </Button>
        </div>
        <form className="flex flex-col md:flex-row gap-2 items-center">
          <div className="flex items-center gap-2 bg-muted rounded px-3 py-2 flex-1">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <Input
              className="border-none bg-transparent p-0"
              placeholder="Location"
              defaultValue="Lisbon, Portugal"
            />
          </div>
          <div className="flex items-center gap-2 bg-muted rounded px-3 py-2 flex-1">
            <CalendarDays className="w-4 h-4 text-muted-foreground" />
            <Input
              className="border-none bg-transparent p-0"
              placeholder="Date"
              defaultValue="05-25-2025"
            />
          </div>
          <div className="flex items-center gap-2 bg-muted rounded px-3 py-2 flex-1">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <Input
              className="border-none bg-transparent p-0"
              placeholder="Time"
              defaultValue="10:00 - 12:00"
            />
          </div>
          <Button type="submit" className="min-w-[120px]">
            Search Now
          </Button>
        </form>
      </div>
    </div>
    {/* Right: Images */}
    <div className="columns-2 space-y-4">
      {destinations.slice(0, 3).map((dest, i) => (
        <React.Fragment key={i}>
          {i === 2 && (
            <div className="flex justify-between">
              <ReviewAvatars variant="hero" />
              <SocialIcons variant="hero" />
            </div>
          )}
          <DestinationCard dest={dest} variant="small" />
        </React.Fragment>
      ))}

      <Button variant="link" className="underline text-link">
        Explore Best Packages
        <MoveUpRight />
      </Button>
    </div>
  </section>
);

export default HeroSection;
