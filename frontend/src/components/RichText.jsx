import { motion } from "framer-motion";

export default function RichText({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-xl font-extrabold text-yellow-400 text-center"
    >
      {text}
    </motion.div>
  );
}
