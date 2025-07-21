import React from "react";
import Image from "@/components/ui/Image";

const services = [
  {
    icon: "/icons/suitcase-2.png",
    title: "Custom Trip Planning",
    desc: "Personalized itineraries designed to match your travel desires.",
    details:
      "We work with you to create a unique travel plan tailored to your interests, budget, and schedule.",
  },
  {
    icon: "/icons/ticket-flight.png",
    title: "Hassle-Free Ticketing",
    desc: "All-in-one ticket booking, from flights to events, with ease.",
    details:
      "Book flights, hotels, and activities in one place. Our team ensures you get the best deals and seamless experiences.",
  },
  {
    icon: "/icons/suitcase-1.png",
    title: "Luxury Tour Packages",
    desc: "Indulge in premium experiences and exclusive destinations.",
    details:
      "Enjoy curated luxury tours, private guides, and exclusive access to top destinations.",
  },
  {
    icon: "/icons/contact-support.jpg",
    title: "24/7 Travel Support",
    desc: "Help is just a call away, anytime, anywhere you travel.",
    details:
      "Our support team is available around the clock to assist you with any travel needs or emergencies.",
  },
];

const ServicesPage = () => (
  <section className="flex flex-col gap-8 py-12">
    <h1 className="text-4xl font-bold mb-4">Our Services</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {services.map(({ icon, title, desc, details }, i) => (
        <div
          key={i}
          className="bg-card rounded-2xl shadow p-6 flex flex-col gap-3"
        >
          <Image
            type="local"
            wrap={true}
            alt={title}
            src={icon}
            width={64}
            height={64}
            wrapperCn="bg-muted rounded-full p-3 mb-2 flex-center"
          />
          <div className="font-semibold text-lg">{title}</div>
          <div className="text-sm text-muted-foreground">{desc}</div>
          <div className="text-xs text-muted-foreground mt-2">{details}</div>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesPage;
