import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Paintbrush, Code, Zap, Layout } from "lucide-react";

const features = [
  {
    icon: <Paintbrush className="h-6 w-6" />,
    title: "AI Design Suggestions",
    description: "Get intelligent design recommendations tailored to your content.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Smart Code Generation",
    description: "Automatically generate clean, semantic HTML and CSS.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Instant Previews",
    description: "See your changes in real-time as you edit your website.",
  },
  {
    icon: <Layout className="h-6 w-6" />,
    title: "Responsive Layouts",
    description: "Create websites that look great on all devices with ease.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {feature.icon}
                  <span>{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;