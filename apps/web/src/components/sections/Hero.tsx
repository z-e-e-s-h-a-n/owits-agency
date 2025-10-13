import React from "react";
import { Button } from "@workspace/ui/components/button";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";

const HeroSection = () => (
  <section className="py-12 relative min-h-[80vh] portrait:sm:min-h-[50vh] sm:min-h-screen  flex items-center">
    <div className="max-w-xl relative z-10">
      <h1 className="text-7xl font-semibold leading-tight mb-2 text-primary-foreground dark:text-secondary-foreground">
        Let's
        <Image
          src="/images/hero-text.jpg"
          alt="Hero Image"
          width={200}
          height={200}
          className="inline-block w-[180px] h-[70px] rounded-4xl mx-2 sm:mx-4"
        />
        Explore the world
      </h1>
      <p className="text-lg  mt-4 mb-8 text-primary-foreground/80 dark:text-secondary-foreground/80">
        Discover the World with Us! Your dream destinations and unforgettable
        experiences are just a click away.
      </p>
      <div className="flex items-center gap-6">
        <Button href="https://wa.me/+96890699886" target="_blank" size="lg">
          Get Started
        </Button>
        <Button
          href="https://wa.me/+96890699886"
          target="_blank"
          variant="outline"
          size="lg"
        >
          Let's Talk <MoveUpRight />
        </Button>
      </div>
    </div>
    <Image src="/images/image-5.jpg" alt="Hero Image" fill className=" " />
    <div className="absolute inset-0 size-full bg-black/70 " />
  </section>
);

export default HeroSection;
