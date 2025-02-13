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
import servicesData from "../data/services.json";
import { Link } from "wouter";
import { motion } from "framer-motion";


const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: { y: -5, transition: { duration: 0.2 } }
};

const pricingPlans = [
  {
    name: "Starter",
    price: "$49/month",
    description: "Perfect for beginners",
    features: [
      "2 training sessions per week",
      "Basic nutrition guidance",
      "Access to training app",
      "Email support"
    ]
  },
  {
    name: "Pro",
    price: "$99/month",
    description: "Most popular choice",
    features: [
      "4 training sessions per week",
      "Detailed nutrition plan",
      "Access to training app",
      "Priority email support",
      "Monthly progress review"
    ]
  },
  {
    name: "Elite",
    price: "$199/month",
    description: "For serious athletes",
    features: [
      "Unlimited training sessions",
      "Custom nutrition & meal plans",
      "Premium app features",
      "24/7 WhatsApp support",
      "Weekly progress review",
      "Recovery guidance"
    ]
  }
];

type Service = {
  id: number;
  title: string;
  description: string;
  price: string;
  features: string[];
};

export default function Services() {
  const { data: services = servicesData, isLoading } = useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: async () => servicesData,
    staleTime: Infinity,
  });

  if (isLoading) {
    return <div className="container py-20 text-center">Loading services...</div>;
  }

  return (
    <div className="container py-20 px-4">
      {/* Services Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold">Training Programs</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose the perfect program to achieve your fitness goals. Each program is
          designed to deliver maximum results through proven methods.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services?.map((service: Service, index: number) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition={{ delay: index * 0.1 }}
          >
            <Card className="relative flex h-full flex-col">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-2xl font-bold">{service.price}</div>
                <ul className="mt-4 space-y-3">
                  {service.features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (index * 0.1) }}
                      className="flex items-center gap-2"
                    >
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button 
                    className="w-full transition-all hover:scale-105"
                  >
                    Get Started
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Pricing Section */}
      <div className="mt-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold">Pricing Plans</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose a plan that fits your goals and budget
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
            >
              <Card className="relative flex h-full flex-col">
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-3xl font-bold text-primary">{plan.price}</div>
                  <ul className="mt-4 space-y-3">
                    {plan.features.map((feature, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + (index * 0.1) }}
                        className="flex items-center gap-2"
                      >
                        <Check className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button 
                      className="w-full transition-all hover:scale-105"
                      variant={plan.name === "Pro" ? "default" : "outline"}
                    >
                      Choose {plan.name}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}