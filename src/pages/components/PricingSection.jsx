import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    features: ["Basic AI suggestions", "5 pages", "Community support"],
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Pro",
    price: "$19",
    features: ["Advanced AI features", "Unlimited pages", "Priority support", "Custom domain"],
    color: "from-purple-400 to-purple-600",
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Full AI capabilities", "Dedicated account manager", "Custom integrations", "SLA"],
    color: "from-pink-400 to-pink-600",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 gradient-text"
        >
          Simple, Transparent Pricing
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full hover-lift">
                <CardHeader>
                  <CardTitle className={`text-2xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>{plan.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-4xl font-bold mb-2">{plan.price}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">per month</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg
                          className={`w-5 h-5 mr-2 text-${plan.color.split('-')[1]}-500`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className={`w-full bg-gradient-to-r ${plan.color} text-white hover:opacity-90`}>
                    Choose Plan
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;