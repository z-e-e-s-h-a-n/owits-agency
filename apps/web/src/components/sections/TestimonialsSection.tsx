import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel";
import { Badge } from "@workspace/ui/components/badge";
import { Quote, Star } from "lucide-react";
import Image from "@/components/ui/Image";
import { Card, CardContent } from "@workspace/ui/components/card";

const testimonial = {
  name: "Muhammad Mishu",
  role: "UI/UX Designer",
  feedback:
    "A fantastic experience from start to finish! The team made our trip effortless and memorable with their excellent service and attention to detail. Highly recommend for hassle-free travel planning!",
  rating: 5,
  image: "https://randomuser.me/api/portraits/men/32.jpg",
};

const TestimonialsSection = () => (
  <section className="w-full flex flex-col items-center gap-6 py-8">
    <Badge>
      <Star /> Reviews
    </Badge>
    <h2 className="text-4xl font-bold">What our client say about us</h2>
    <Carousel className="w-full max-w-5xl">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card className="flex-row p-4 items-center">
              <Image
                type="remote"
                src={testimonial.image}
                alt={testimonial.name}
                width={400}
                height={400}
                className="size-80 rounded-2xl border-4 shadow-md"
              />
              <CardContent className="flex-1 flex flex-col gap-2">
                <div className="inline-flex items-center gap-4 text-xl font-semibold mb-1">
                  <Quote /> Feedback
                </div>
                <div className="text-base text-muted-foreground mb-2">
                  {testimonial.feedback}
                </div>
                <div className="flex justify-between items-center gap-2 mt-2">
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold text-foreground">
                      {testimonial.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 ml-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="size-4 fill-primary" />
                    ))}
                  </span>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </section>
);

export default TestimonialsSection;
