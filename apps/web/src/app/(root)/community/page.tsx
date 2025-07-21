import React from "react";
import { Button } from "@workspace/ui/components/button";
import Image from "@/components/ui/Image";

const members = [
  { name: "User 1", image: "https://randomuser.me/api/portraits/men/61.jpg" },
  { name: "User 2", image: "https://randomuser.me/api/portraits/women/62.jpg" },
  { name: "User 3", image: "https://randomuser.me/api/portraits/men/63.jpg" },
  { name: "User 4", image: "https://randomuser.me/api/portraits/women/64.jpg" },
];

const CommunityPage = () => (
  <section className="flex flex-col gap-8 py-12 items-center">
    <h1 className="text-4xl font-bold mb-4">Join Our Community</h1>
    <p className="text-lg text-muted-foreground text-center max-w-xl mb-4">
      Connect with fellow travelers, share your experiences, and get inspired
      for your next adventure.
    </p>
    <Button size="lg" className="mb-4">
      Join Now
    </Button>
    <div className="flex gap-6 mb-8">
      {members.map((m, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <Image
            type="remote"
            src={m.image}
            alt={m.name}
            width={64}
            height={64}
            className="rounded-full border-2"
          />
          <span className="text-xs text-muted-foreground">{m.name}</span>
        </div>
      ))}
    </div>
    <div className="bg-card rounded-2xl shadow p-6 max-w-lg w-full">
      <h2 className="text-xl font-semibold mb-2">Testimonial</h2>
      <p className="text-muted-foreground">
        “Being part of this community has made my travels so much more enjoyable
        and stress-free!”
      </p>
      <span className="block mt-2 text-sm text-muted-foreground">
        - Community Member
      </span>
    </div>
  </section>
);

export default CommunityPage;
