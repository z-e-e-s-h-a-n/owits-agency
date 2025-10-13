"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel";

const TestimonialsSection = () => {
  return (
    <section className="flex flex-col items-center py-12 ">
      <span className="font-semibold text-sm uppercase tracking-wide text-gray-500">
        Real Stories from Satisfied Travelers
      </span>

      <h2 className="text-4xl font-bold mt-2 mb-8 text-center">
        What Our Happy Clients Say
      </h2>

      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="relative aspect-[9/16] max-sm:max-h-[434px] overflow-hidden rounded-2xl border-1 bg-black">
                <video
                  src={`/videos/tiktok-${index + 1}.mp4`}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  controlsList="nodownload"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default TestimonialsSection;
