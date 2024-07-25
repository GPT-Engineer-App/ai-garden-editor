import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 gradient-text"
        >
          Get in Touch
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-lg"
        >
          <form className="space-y-4">
            <Input placeholder="Your Name" className="bg-gray-50 dark:bg-gray-800" />
            <Input type="email" placeholder="Your Email" className="bg-gray-50 dark:bg-gray-800" />
            <Textarea placeholder="Your Message" className="bg-gray-50 dark:bg-gray-800" />
            <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;