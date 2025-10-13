import React from "react";
import { Button } from "@workspace/ui/components/button";
import Image from "next/image";
import { CircleCheckBig } from "lucide-react";

const WhyChooseUs = () => (
  <section id="about" className="space-y-8 py-8">
    <h2 className="text-4xl font-bold lg:hidden">Why Choose Us</h2>

    <div className="flex lg:flex-row flex-col-reverse gap-12">
      {/* Left: Text */}
      <div className="flex-1 max-w-lg">
        <span className="font-semibold">
          Your Trusted Partner for Every Journey
        </span>
        <h2 className="text-4xl font-bold mt-2 mb-4">About One World Tours</h2>
        <p className="text-muted-foreground text-base leading-relaxed mt-2 mb-4">
          Founded with a passion for travel and service, One World Tours is a
          professional travel agency committed to making your journeys smooth,
          memorable, and affordable. With years of experience and a network of
          trusted partners worldwide, we offer customized travel solutions for
          every budget and purpose.
        </p>

        <ul className="space-y-3 mt-2">
          <li className="flex items-center gap-2">
            <CircleCheckBig /> Experienced, Friendly, and Professional Team
          </li>
          <li className="flex items-center gap-2">
            <CircleCheckBig /> Affordable & Flexible Holiday Packages
          </li>
          <li className="flex items-center gap-2">
            <CircleCheckBig /> Reliable Global Travel Support
          </li>
          <li className="flex items-center gap-2">
            <CircleCheckBig /> 100% Customer Satisfaction Guaranteed
          </li>
        </ul>

        <div className="flex gap-4 mt-6">
          <Button href="https://wa.me/+96890699886" target="_blank" size="lg">
            Book Now
          </Button>
          <Button
            href="https://wa.me/+96890699886"
            target="_blank"
            size="lg"
            variant="outline"
          >
            Let's Talk
          </Button>
        </div>
      </div>

      {/* Right: Stacked Images */}
      <div className="flex-1 flex items-center overflow-hidden justify-center gap-4">
        <Image
          src="/images/image-1.jpg"
          alt="Travel Experience"
          width={300}
          height={240}
          className="rounded-2xl basis-1/2 object-cover relative -top-6"
        />

        <Image
          src="/images/image-6.jpg"
          alt="Comfort Stay"
          width={300}
          height={240}
          className="rounded-2xl basis-1/2 object-cover relative -bottom-6"
        />
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
