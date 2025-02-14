import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1618590145013-680c8816047c",
    alt: "Training session",
  },
  {
    src: "https://images.unsplash.com/photo-1607286908165-b8b6a2874fc4",
    alt: "Workout equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1541757088-1c919081357f",
    alt: "Group training",
  },
  {
    src: "https://images.unsplash.com/photo-1626569452808-d1e6ee2d23b9",
    alt: "Personal training",
  },
  {
    src: "https://images.unsplash.com/photo-1611876385388-94a5e97a219a",
    alt: "Gym session",
  },
  {
    src: "https://images.unsplash.com/photo-1662659642792-d241f53b0582",
    alt: "Training equipment",
  },
];

export default function Gallery() {
  return (
    <div className="container py-20 px-4">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold">Training Gallery</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Take a look at some of our training sessions and facilities. Every
          workout is tailored to help you reach your goals.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden">
              <img
                src={photo.src}
                alt={photo.alt}
                className="aspect-square w-full object-cover transition-transform hover:scale-105"
              />
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
