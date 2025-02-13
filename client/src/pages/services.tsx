import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import type { Service } from "@shared/schema";
import { Link } from "wouter";

export default function Services() {
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  if (isLoading) {
    return <div>Loading services...</div>;
  }

  return (
    <div className="container py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold">Training Programs</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose the perfect program to achieve your fitness goals. Each program is
          designed to deliver maximum results through proven methods.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {services?.map((service) => (
          <Card key={service.id} className="relative flex flex-col">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-2xl font-bold">{service.price}</div>
              <ul className="mt-4 space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" className="w-full">
                <Button className="w-full">Get Started</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
