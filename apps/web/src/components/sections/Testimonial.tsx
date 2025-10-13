"use client";

import React, { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel";

const TestimonialsSection = () => {
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => observer.observe(video));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex flex-col items-center py-12">
      <span className="font-semibold text-sm uppercase tracking-wide text-gray-500">
        Real Stories from Satisfied Travelers
      </span>

      <h2 className="text-4xl font-bold mt-2 mb-8 text-center">
        What Our Happy Clients Say
      </h2>

      <Carousel className="w-full" opts={{ slidesToScroll: 1 }}>
        <CarouselContent>
          {Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border bg-black">
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[index] = el;
                  }}
                  className="size-full object-cover"
                  controls
                  loop
                  muted
                  playsInline
                  preload="none"
                  controlsList="nodownload"
                >
                  <source
                    src={`/videos/tiktok-${index + 1}.webm`}
                    type="video/webm"
                  />
                  <source
                    src={`/videos/tiktok-${index + 1}.mp4`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
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
