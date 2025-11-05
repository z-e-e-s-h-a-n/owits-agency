import React from "react";
import { Input } from "@workspace/ui/components/input";
import { Button } from "@workspace/ui/components/button";
import { MessageCircleMore, Map } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const Contact = () => (
  <section id="contact">
    <h1 className="text-4xl font-bold mb-8 lg:hidden">Contact Us</h1>
    <div className="grid gird-cols-1 lg:grid-cols-2 gap-12">
      <form className="p-4 sm:p-8 bg-card rounded-xl">
        <span className="font-semibold">Travel Tips, Guides, and Stories</span>
        <h2 className="text-4xl font-bold mt-2 mb-4">Need a Quick Response</h2>
        <p className="text-muted-foreground text-base leading-relaxed mt-2 mb-6">
          Fill out the form below, and one of our travel advisors will get in
          touch with you shortly. We aim to respond to all inquiries within 24
          hours.
        </p>
        <div className="flex flex-col gap-4">
          <Input placeholder="Your Name" required />
          <div className="flex items-center gap-2">
            <Input placeholder="Your Email" type="email" required />
            <Input placeholder="WhatsAap" type="phone" required />
          </div>
          <textarea
            className="border rounded p-2 min-h-[100px]"
            placeholder="Your Message"
            required
          />
          <Button type="submit" className="mt-2">
            Send Message
          </Button>
        </div>
      </form>
      <div>
        <span className="font-semibold">
          Your Trusted Partner for Every Journey
        </span>
        <h2 className="text-4xl font-bold mt-2 mb-4">About One World Tours</h2>
        <p className="text-muted-foreground text-base leading-relaxed mt-2 mb-4">
          Founded with a passion for travel and service, Pak Globe Travels is a
          professional travel agency committed to making your journeys smooth,
          memorable, and affordable. With years of experience and a network of
          trusted partners worldwide, we offer customized travel solutions for
          every budget and purpose.
        </p>
        <div className="space-y-6 [&_svg]:size-8">
          <h2 className="text-3xl font-bold my-6">Get in Touch</h2>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex items-center gap-2">
              <MessageCircleMore />
              <div className="flex flex-col">
                <a href="tel:+96890699886">
                  <span className="font-medium">phone:</span> +968 90699886
                </a>
                <a href="mailto:hello@oneworld.tours">
                  <span className="font-medium">Email:</span>{" "}
                  hello@oneworld.tours
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaWhatsapp className="size-6" />
              <a href="https://wa.me/+96890699886" target="_blank">
                <span className="font-medium">Whatsapp:</span>
                +968 90699886
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Map />
            <p>Office #13, Al Madina Market, Seeb Souq, Muscat, Oman</p>
          </div>
          <div className="flex items-center gap-4">
            <Map />
            Office #LG126, Saddiq Trade Center, Gulberg, Lahore, Pakistan
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
