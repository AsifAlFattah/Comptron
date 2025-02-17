import { MdGroups2 } from "react-icons/md";
import { motion } from "framer-motion";

const HomeWhyJoin = () => {
  return (
    <div className="text-center py-16 bg-white text-gray-600">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Why Join Comptron?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
        {content.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex justify-center mb-6">
            <MdGroups2 className="w-20 h-20" />
            </div>
            <p className="text-lg leading-relaxed font-medium">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const content = [
  {
    text: "To build skills in various sectors including Content Writing, Photojournalism, Video Editing, Event Organizing, Volunteering, Development, UI/UX Design, and Graphic Design."
  },
  {
    text: "To connect with a community of senior, junior, alumni, and respected teachers. Build harmony and get ideas about the demanding skills of the current and future professional domain."
  },
  {
    text: "To organize events national events such as Computer Science Fest, Computer Gaming Fest and intra ACC events like Jarvis - An Intra ACC Carnival and participate in regularly organized workshops and seminars for ACC members."
  }
];

export default HomeWhyJoin;