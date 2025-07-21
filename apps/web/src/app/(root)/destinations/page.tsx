import React from "react";
import DestinationCard from "@/components/ui/DestinationCard";
import { destinations } from "@/constants";

const DestinationsPage = () => (
  <section className="flex flex-col gap-8 py-12">
    <h1 className="text-4xl font-bold mb-4">All Destinations</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {destinations.map((dest, i) => (
        <DestinationCard key={i} dest={dest} />
      ))}
    </div>
  </section>
);

export default DestinationsPage;
