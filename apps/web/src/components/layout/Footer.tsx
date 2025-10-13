import React from "react";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";
import SocialIcons from "../ui/SocialIcons";

const Footer = () => (
  <footer className="space-y-8 py-12 border-t mt-8 section-container">
    <div className="flex flex-col md:flex-row justify-between gap-12">
      <div className="space-y-8">
        <h3 className="text-5xl font-semibold">
          Let's enjoy your journey with us
        </h3>
        <nav className="flex gap-6 text-muted-foreground text-sm [&>a]:hover:text-link">
          <Link href="#">[ Home ]</Link>
          <Link href="#about">[ About ]</Link>
          <Link href="#services">[ Service ]</Link>
          <Link href="/blog">[ Blog ]</Link>
        </nav>
      </div>
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="text-muted-foreground text-sm">
            Experience ultimate comfort in our Single Deluxe Room, designed to
            offer tranquility.
          </div>
          <Button>Explore Destination</Button>
        </div>
        <Link
          href="mailto:hello@oneworld.tours"
          className="text-muted-foreground text-sm"
        >
          hello@oneworld.tours
        </Link>
      </div>
    </div>
    <div className="flex flex-col gap-8">
      <span className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight">
        Traventure <span className="align-super text-2xl">©</span>
      </span>
      <div className="flex justify-between items-center gap-8">
        <span className="mt-2 text-xs text-muted-foreground">
          © 2025 One World Tours. All rights reserved.
        </span>
        <SocialIcons variant="footer" />
      </div>
    </div>
  </footer>
);

export default Footer;
