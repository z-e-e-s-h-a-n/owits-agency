import React from "react";
import DestinationCard from "@/components/ui/DestinationCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel";

import { destinations } from "@/constants";

const DestinationSection = () => (
  <section id="destinations" className="space-y-8">
    <h2 className="text-4xl font-bold">Popular Destinations</h2>
    <Carousel className="w-full" opts={{ slidesToScroll: 1 }}>
      <CarouselContent>
        {destinations.map((dest, i) => (
          <CarouselItem
            key={i}
            className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <DestinationCard key={i} dest={dest} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </section>
);

export default DestinationSection;
