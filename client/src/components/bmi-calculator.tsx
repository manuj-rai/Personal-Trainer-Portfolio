import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState<number | null>(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) return;

    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    const calculatedBMI = weightInKg / (heightInMeters * heightInMeters);
    setBMI(Math.round(calculatedBMI * 10) / 10);

    if (calculatedBMI < 18.5) setStatus("Underweight");
    else if (calculatedBMI < 25) setStatus("Normal weight");
    else if (calculatedBMI < 30) setStatus("Overweight");
    else setStatus("Obese");
  };

  return (
    <section className="container px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold">BMI Calculator</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Calculate your Body Mass Index (BMI) to get an indication of whether you're
          maintaining a healthy weight.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mx-auto mt-8 max-w-md"
      >
        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="Enter your height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="Enter your weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <Button onClick={calculateBMI}>Calculate BMI</Button>
            </div>

            {bmi !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 text-center"
              >
                <div className="text-2xl font-bold text-primary">{bmi}</div>
                <div className="mt-2 text-muted-foreground">
                  Your BMI indicates: <span className="font-medium text-foreground">{status}</span>
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
