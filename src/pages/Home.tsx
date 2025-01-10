import { Activity, BarChart, Zap } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";

const Home = () => {
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
    }
  ];

  return (
    <div>
      <HeroSection />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Why Choose FitTrack?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;