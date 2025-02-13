import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import type { Testimonial } from "@shared/schema";
import { Link } from "wouter";

export default function Home() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative">
        <div className="container flex min-h-[80vh] flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
              Transform Your Life Through Fitness
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Expert personal training tailored to your goals. Whether you're just starting
              or looking to level up, I'll help you achieve the results you want.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link href="/contact">
                <Button size="lg">Start Your Journey</Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline">
                  View Programs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="container">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex items-center">
            <div>
              <h2 className="text-3xl font-bold">About Me</h2>
              <p className="mt-4 text-muted-foreground">
                With over 10 years of experience in personal training, I've helped
                hundreds of clients achieve their fitness goals. My approach combines
                proven training methods with personalized attention to deliver
                results that last.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-muted-foreground">
                    Clients Trained
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-muted-foreground">
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1434682772747-f16d3ea162c3"
              alt="Trainer"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">
          What My Clients Say
        </h2>
        {isLoading ? (
          <div>Loading testimonials...</div>
        ) : (
          <Carousel className="mx-auto max-w-4xl">
            <CarouselContent>
              {testimonials?.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <Card>
                    <CardContent className="flex flex-col items-center gap-4 p-6">
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-primary text-primary"
                          />
                        ))}
                      </div>
                      <blockquote className="text-center text-lg">
                        "{testimonial.text}"
                      </blockquote>
                      <cite className="not-italic text-muted-foreground">
                        - {testimonial.name}
                      </cite>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </section>
    </div>
  );
}
