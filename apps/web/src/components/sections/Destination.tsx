import React from "react";
import DestinationCard from "@/components/ui/DestinationCard";
import { destinations } from "@/constants";

const DestinationSection = () => (
  <section id="destinations" className="space-y-8">
    <h2 className="text-4xl font-bold">Popular Destinations</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-4 pb-2">
      {destinations.map((dest, i) => (
        <DestinationCard key={i} dest={dest} />
      ))}
    </div>
  </section>
);

export default DestinationSection;
