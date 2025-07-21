import React from "react";
import Image from "@/components/ui/Image";

const services = [
  {
    icon: "/icons/suitcase-2.png",
    title: "Custom Trip Planning",
    desc: "Personalized itineraries designed to match your travel desires.",
  },
  {
    icon: "/icons/ticket-flight.png",
    title: "Hassle-Free Ticketing",
    desc: "All-in-one ticket booking, from flights to events, with ease.",
  },
  {
    icon: "/icons/suitcase-1.png",
    title: "Luxury Tour Packages",
    desc: "Indulge in premium experiences and exclusive destinations.",
  },
  {
    icon: "/icons/contact-support.jpg",
    title: "24/7 Travel Support",
    desc: "Help is just a call away, anytime, anywhere you travel.",
  },
];

const ServicesSection = () => (
  <section className="w-full flex flex-col items-start gap-8">
    <h2 className="text-4xl font-bold">Our services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
      {services.map(({ desc, icon, title }, i) => (
        <div
          key={i}
          className="bg-card flex-col items-start rounded-2xl shadow px-6 py-12 flex gap-3"
        >
          <Image
            alt={title}
            src={icon}
            width={64}
            height={64}
            wrapperCn="bg-muted rounded-full p-3 mb-2 flex-center"
          />

          <div className="font-semibold text-lg">{title}</div>
          <div className="text-sm text-muted-foreground">{desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
