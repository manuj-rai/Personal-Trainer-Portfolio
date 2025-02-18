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
import testimonialsData from "@/data/testimonials.json";
import { Link } from "wouter";
import BMICalculator from "@/components/bmi-calculator";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const hoverText = "Transform Your Life Through Fitness".split(" ");
  const { data: testimonials = testimonialsData, isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => testimonialsData,
    staleTime: Infinity,
  });
  
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white relative">

        {/* Background Hover Effect */}
        <div
          className={cn(
            "absolute text-7xl font-extrabold text-red-500 opacity-0",
            "group-hover:opacity-20 transition-opacity duration-500"
          )}
        >
          FITNESS
        </div>

        {/* Content Container */}
        <div className="container flex min-h-[90vh] flex-col items-center justify-center text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="max-w-4xl bg-gradient-to-br from-background/50 to-background/10 backdrop-blur-lg p-4 rounded-2xl border border-border/20"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            whileInView="animate"
          >
            {/* Main Heading */}
            <motion.h1 
              variants={fadeIn}
              className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-transparent animate-gradient-x"            >
              Transform Your Life Through Fitness
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              variants={fadeIn}
              className="mt-6 text-lg md:text-xl text-muted-foreground"
            >
              Expert personal training tailored to your goals. Whether you're just starting
              or looking to level up, I'll help you achieve the results you want.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              variants={fadeIn}
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link href="/contact">
              <Button
                  size="lg"
                  className="relative overflow-hidden group w-full sm:w-auto hover:scale-[1.02] active:scale-95 transition-transform"
                >
                  <span className="relative z-10">Start Your Journey</span>
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all" />
                  <div className="absolute bottom-0 h-[2px] w-full bg-primary group-hover:h-full transition-all duration-300" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto hover:scale-[1.02] active:scale-95 transition-transform"
                >
                  View Programs
                </Button>
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div
            variants={fadeIn}
            className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground flex-col"
          >
            <div className="flex -space-x-4">
              {/* Replace with actual client avatars */}
              <img
                src="/avatar1.jpg"
                alt="Client 1"
                className="w-10 h-10 rounded-full border-2 border-background"
              />
              <img
                src="/avatar2.jpg"
                alt="Client 2"
                className="w-10 h-10 rounded-full border-2 border-background"
              />
              <img
                src="/avatar3.jpg"
                alt="Client 3"
                className="w-10 h-10 rounded-full border-2 border-background"
              />
            </div>
            <span>Join 1,200+ transformed clients</span>
            <Badge variant="outline" className="border-primary">
              <Star className="w-4 h-4 mr-1 fill-primary" />
              4.9/5 (380+ reviews)
            </Badge>
          </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="container px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex"
          >
            <div>
              <h2 className="text-3xl font-bold">About Me</h2>
              <p className="mt-4 text-muted-foreground">
                With over 5 years of experience in personal training, I've helped
                hundreds of clients achieve their fitness goals. My approach combines
                proven training methods with personalized attention to deliver
                results that last.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-lg bg-card"
                >
                  <div className="text-2xl font-bold">k11</div>
                  <div className="text-sm text-muted-foreground">
                    Certified Trainer
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-lg bg-card"
                >
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-lg bg-card"
                >
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-sm text-muted-foreground">
                    Clients Trained
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative aspect-square overflow-hidden rounded-lg"
          >
            <img
              src="https://img.freepik.com/free-photo/front-view-fit-shirtless-man-with-weights_23-2148700662.jpg?ga=GA1.1.1148541306.1739510033&semt=ais_authors_boost"
              alt="Trainer"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold"
        >
          What My Clients Say
        </motion.h2>
        {isLoading ? (
          <div>Loading testimonials...</div>
        ) : (
          <Carousel className="mx-auto max-w-4xl">
            <CarouselContent>
              {testimonials?.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
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
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </section>

      {/* Add BMI Calculator Section after testimonials */}
      {/* <BMICalculator /> */}
    </div>
  );
}