import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full py-12 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-2 gradient-text">AI Web Editor</h3>
            <p className="text-sm">Empowering creators with AI-powered web editing tools.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-500 transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-purple-500 transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-purple-500 transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-purple-500 transition-colors">Contact</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-500 transition-colors">Terms of Service</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-purple-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-purple-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-purple-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </motion.div>
        </div>
        <div className="mt-8 text-center text-sm">
          © 2023 AI Web Editor. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;