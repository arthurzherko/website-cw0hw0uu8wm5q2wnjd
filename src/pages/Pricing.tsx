import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      features: [
        "Workout tracking",
        "Basic progress analytics",
        "3 custom goals"
      ],
      cta: "Get Started"
    },
    {
      name: "Pro",
      price: "$9.99/month",
      features: [
        "All Basic features",
        "Advanced analytics",
        "Unlimited custom goals",
        "Workout planner"
      ],
      cta: "Go Pro"
    },
    {
      name: "Elite",
      price: "$19.99/month",
      features: [
        "All Pro features",
        "1-on-1 coaching",
        "Nutrition tracking",
        "Priority support"
      ],
      cta: "Get Elite"
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center text-4xl font-bold">Choose Your Plan</h1>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription className="text-2xl font-bold">{plan.price}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="mr-2 h-5 w-5 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">{plan.cta}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;