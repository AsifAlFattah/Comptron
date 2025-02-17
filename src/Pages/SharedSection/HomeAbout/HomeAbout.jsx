import React from 'react';
import { motion } from 'framer-motion';

const HomeAbout = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between px-4 py-10 bg-white">
            {/* Left Side: Text Content */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6 }}
                className="text-justify p-3"
            >
                <h3 className="text-lg font-bold text-gray-600">ABOUT</h3>
                <h2 className="text-3xl font-bold text-gray-800 mt-2">Comptron - <span className='italic'>Creativity Assembled</span></h2>
                <p className="mt-4 text-gray-700 text-base leading-relaxed pr-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad blanditiis maiores minima sequi eos. Deserunt, nisi quod cum, expedita officia fugit aut eius magni nemo amet non aperiam temporibus. 
                </p>
                <p className="mt-4 text-gray-700 text-base leading-relaxed pr-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur omnis explicabo nesciunt nemo at eius deleniti saepe nam adipisci fugit, voluptatibus rerum dolorum molestias obcaecati temporibus laborum.
                </p>
            </motion.div>
            
            {/* Right Side: Image */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 md:mt-0"
            >
                <img
                    src="./images/img3.png"
                    alt="AIUB Computer Club"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </motion.div>
        </div>
    );
};

export default HomeAbout;
