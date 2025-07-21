import React from "react";
import { Input } from "@workspace/ui/components/input";
import { Button } from "@workspace/ui/components/button";

const ContactPage = () => (
  <section className="flex flex-col gap-8 py-12 max-w-xl mx-auto">
    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
    <form className="flex flex-col gap-4 bg-card rounded-2xl shadow p-8">
      <Input placeholder="Your Name" required />
      <Input placeholder="Your Email" type="email" required />
      <Input placeholder="Subject" required />
      <textarea className="border rounded p-2 min-h-[100px]" placeholder="Your Message" required />
      <Button type="submit" className="mt-2">Send Message</Button>
    </form>
    <div className="text-muted-foreground text-sm mt-4">Or email us at <a href="mailto:hello@traveltrip.com" className="underline">hello@traveltrip.com</a></div>
  </section>
);

export default ContactPage; 