import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const stories = [
  {
    name: "John Smith",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    story: "Lost 30 pounds in 6 months",
    description: "Working with FitPro transformed my life. The personalized training plan and constant support helped me achieve what I thought was impossible.",
    achievement: "Completed first marathon"
  },
  {
    name: "Maria Rodriguez",
    image: "https://img.freepik.com/free-photo/young-adult-doing-indoor-sport-gym_23-2149205542.jpg?ga=GA1.1.1148541306.1739510033&semt=ais_authors_boost",
    story: "Gained strength and confidence",
    description: "From barely being able to do a push-up to completing multiple sets with ease. The journey has been incredible and empowering.",
    achievement: "Doubled strength metrics"
  },
  {
    name: "David Chen",
    image: "https://img.freepik.com/free-photo/man-training-gym_52683-103765.jpg?ga=GA1.1.1148541306.1739510033&semt=ais_authors_boost",
    story: "Recovered from injury",
    description: "After a back injury, I thought I'd never train again. The rehabilitation program helped me get back stronger than ever.",
    achievement: "Back to full fitness"
  }
];

export default function SuccessStories() {
  return (
    <div className="container py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold">Success Stories</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Real results from real people. Get inspired by these transformational journeys.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((story, index) => (
          <motion.div
            key={story.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden">
              <img
                src={story.image}
                alt={story.name}
                className="aspect-square w-full object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">{story.name}</h3>
                <p className="mt-2 text-primary font-semibold">{story.story}</p>
                <p className="mt-4 text-muted-foreground">{story.description}</p>
                <div className="mt-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                  {story.achievement}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
