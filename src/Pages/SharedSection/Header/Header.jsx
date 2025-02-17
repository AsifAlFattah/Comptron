import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 z-50 w-[90%] bg-gradient-to-r from-[#fff] to-[#fff] backdrop-blur-lg px-3 py-3 transition-all">
            <div className= "mx-auto flex items-center justify-between">
                {/* Logo Section */}
                <Link to={'/'} className="flex items-center space-x-2">
                    <img className="w-16 h-16" src="images/Comptron.png" alt="Iral Connect" />
                    <span className="italic mt-8 text-blue-800 font-mono pt-2">Creativity Assembled</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-8 text-lg font-medium">
                    {["Home", "About", "Events", "Gallery", "Contact"].map((item, index) => (
                        <Link
                            key={index}
                            to={index === 0 ? `/` : `/${item.toLowerCase().replace(/ /g, "")}`}
                            className={index === 0 ? `block mt-2 py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500` : `block mt-2 py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                        >
                            {item}
                        </Link>
                    ))}
                    <Link to={'/register'} className="block py-2 px-3 bg-blue-400 text-white rounded-sm hover:bg-gray-100 md:hover:bg-blue-600 md:border-0 md:hover:text-white dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Membership
                    </Link>
                </div>


                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-[#34275d] focus:outline-none"
                    >
                        {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="z-50 lg:hidden absolute top-full left-0 w-full bg-[#16213e] shadow-md py-6 flex flex-col items-center space-y-4"
                >
                    {["Home", "About", "Events", "Gallery", "Contact"].map((item, index) => (
                        <Link
                            key={index}
                            to={index === 0 ? `/` : `/${item.toLowerCase().replace(/ /g, "")}`}
                            className="text-white text-lg hover:text-gold transition-all"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <Link to={'/register'} className="block py-2 px-3 bg-blue-400 text-white rounded-sm hover:bg-blue-600 md:hover:bg-blue-600 md:border-0 md:hover:text-white dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Membership
                    </Link>
                </motion.div>
            )}
        </nav>
    );
};

export default Header;