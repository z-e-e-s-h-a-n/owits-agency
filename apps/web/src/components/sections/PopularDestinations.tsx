import React from "react";
import DestinationCard from "@/components/ui/DestinationCard";
import { destinations } from "@/constants";

const PopularDestinations = () => (
  <section className="flex flex-col items-start gap-8">
    <h2 className="text-4xl font-bold">Popular Destinations</h2>
    <div className="flex w-full gap-4 pb-2">
      {destinations.map((dest, i) => (
        <DestinationCard key={i} dest={dest} />
      ))}
    </div>
  </section>
);

export default PopularDestinations;
