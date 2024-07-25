import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Paintbrush, Code, Zap, Layout } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Paintbrush className="h-6 w-6 text-purple-500" />,
    title: "AI Design Suggestions",
    description: "Get intelligent design recommendations tailored to your content.",
  },
  {
    icon: <Code className="h-6 w-6 text-pink-500" />,
    title: "Smart Code Generation",
    description: "Automatically generate clean, semantic HTML and CSS.",
  },
  {
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
    title: "Instant Previews",
    description: "See your changes in real-time as you edit your website.",
  },
  {
    icon: <Layout className="h-6 w-6 text-green-500" />,
    title: "Responsive Layouts",
    description: "Create websites that look great on all devices with ease.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 gradient-text"
        >
          Powerful Features
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover-lift">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;