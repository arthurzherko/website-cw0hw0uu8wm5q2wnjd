import { Activity, BarChart, Zap, Calendar, Users, Medal } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const Features = () => {
  const features = [
    {
      icon: Activity,
      title: "Workout Tracking",
      description: "Log your exercises, sets, reps, and weights with ease."
    },
    {
      icon: BarChart,
      title: "Progress Analytics",
      description: "Visualize your fitness journey with detailed charts and insights."
    },
    {
      icon: Zap,
      title: "Personalized Goals",
      description: "Set and achieve custom fitness goals tailored to your needs."
    },
    {
      icon: Calendar,
      title: "Workout Planner",
      description: "Plan your workouts in advance and stay on track with your fitness routine."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with like-minded fitness enthusiasts and share your progress."
    },
    {
      icon: Medal,
      title: "Achievements",
      description: "Earn badges and rewards as you reach your fitness milestones."
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center text-4xl font-bold">FitTrack Features</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;