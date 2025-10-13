import React from "react";
import Image from "@/components/ui/Image";

const services = [
  {
    icon: "/icons/ticket-flight.png",
    title: "Hassle-Free Ticketing",
    desc: "All-in-one ticket booking, from flights to events, with ease.",
  },
  {
    icon: "/icons/hotel-1.png",
    title: "Hotel Booking",
    desc: "Comfortable stays at the best prices, from budget to luxury hotels.",
  },
  {
    icon: "/icons/tour-1.png",
    title: "Luxury Tour Packages",
    desc: "Indulge in premium experiences and exclusive destinations.",
  },
  {
    icon: "/icons/car-rental-1.png",
    title: "Car Rentals & Transfers",
    desc: "Convenient airport transfers and reliable car hire for your journey.",
  },
  {
    icon: "/icons/travel-insurance-3.png",
    title: "Travel Insurance",
    desc: "Stay protected with coverage for medical, cancellations, and more.",
  },
  {
    icon: "/icons/tour-guide-1.png",
    title: "Group Tours",
    desc: "Join guided group adventures for shared experiences and savings.",
  },
  {
    icon: "/icons/umrah-2.png",
    title: "Umrah Packages",
    desc: "Tailored Umrah journeys with reliable arrangements and guidance.",
  },
  {
    icon: "/icons/tour-2.png",
    title: "Custom Trip Planning",
    desc: "Personalized itineraries designed to match your travel desires.",
  },
  {
    icon: "/icons/visa.png",
    title: "Visa Assistance",
    desc: "Smooth and hassle-free visa processing for multiple destinations.",
  },
  {
    icon: "/icons/student-visa.png",
    title: "Student Visa Services",
    desc: "Guidance and support for studying abroad in top destinations.",
  },
  {
    icon: "/icons/work-visa.png",
    title: "Work Visa Services",
    desc: "Expert assistance for overseas employment opportunities.",
  },
  {
    icon: "/icons/support.jpg",
    title: "24/7 Travel Support",
    desc: "Help is just a call away, anytime, anywhere you travel.",
  },
];

const ServicesSection = () => (
  <section id="services" className="space-y-8">
    <h2 className="text-4xl font-bold">Our services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      {services.map(({ desc, icon, title }, i) => (
        <div
          key={i}
          className="bg-card flex-col items-start rounded-2xl shadow dark:border px-6 py-12 flex gap-3"
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
