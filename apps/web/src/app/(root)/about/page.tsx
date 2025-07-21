import React from "react";
import Image from "@/components/ui/Image";

const team = [
  {
    name: "Ayesha Khan",
    role: "CEO",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ali Raza",
    role: "CTO",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sara Ahmed",
    role: "Lead Designer",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
];

const AboutPage = () => (
  <section className="flex flex-col gap-8 py-12 max-w-3xl mx-auto">
    <h1 className="text-4xl font-bold mb-4">About Us</h1>
    <p className="text-lg text-muted-foreground mb-4">
      Traventure is dedicated to making travel dreams come true. Our mission is
      to provide seamless, memorable, and personalized travel experiences for
      everyone.
    </p>
    <div className="bg-card rounded-2xl shadow p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
      <p className="text-muted-foreground">
        To inspire and enable people to explore the world with confidence,
        comfort, and joy.
      </p>
    </div>
    <div>
      <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
      <div className="flex gap-6">
        {team.map((member, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <Image
              type="remote"
              src={member.image}
              alt={member.name}
              width={80}
              height={80}
              className="rounded-full border-2"
            />
            <span className="font-medium">{member.name}</span>
            <span className="text-xs text-muted-foreground">{member.role}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutPage;
