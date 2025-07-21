import React from "react";
import { Button } from "@workspace/ui/components/button";
import Image from "@/components/ui/Image";

const WhyChooseUs = () => (
  <section className="w-full flex gap-8 py-8">
    {/* Left: Text */}
    <div className="flex-1 flex flex-col gap-8 max-w-lg">
      <h2 className="text-4xl font-bold">Why choose us?</h2>
      <p className="text-muted-foreground text-base">
        Experience ultimate comfort in our Single Restore Room, designed to
        offer tranquility
      </p>
      <ul className="space-y-4">
        <li className="space-y-4">
          <span className="text-base font-medium">01. Travel Plan</span>
          <p className="text-muted-foreground">
            Experience ultimate comfort in our Single Restore Room, designed to
            offer tranquility
          </p>
        </li>
        <li className="space-y-4">
          <span className="text-base font-medium">02. Flight Booking</span>
          <p className="text-muted-foreground">
            Personalized itineraries designed to match your unique travel dreams
          </p>
        </li>
      </ul>
      <Button size="lg" className="w-fit">
        Learn More
      </Button>
    </div>
    {/* Right: Decorative Image/Graphic */}
    <div className="flex-1 flex items-center justify-center bg-muted rounded-2xl">
      <div className="relative w-80 h-64 overflow-hidden flex items-center justify-center">
        {/* Placeholder for illustration */}
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
          width={400}
          height={400}
          alt="Why Choose Us"
          className="size-80 rounded-xl shadow-lg absolute bottom-4 right-4 border-4 border-white"
        />
        <div className="absolute left-0 top-0 w-40 h-40 bg-primary/10 rounded-full -z-10" />
        <div className="absolute right-0 bottom-0 w-32 h-32 bg-secondary/20 rounded-full -z-10" />
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
