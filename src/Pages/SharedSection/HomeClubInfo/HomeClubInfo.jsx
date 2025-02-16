import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HomeClubInfo = () => {
    const stats = [
        { number: 110, label: 'Current Members' },
        { number: 560, label: 'Alumni' },
        { number: 1, label: 'Advisors' },
        { number: 18, label: 'Current Executives' }
    ];

    const [counts, setCounts] = useState(stats.map(() => 0));

    useEffect(() => {
        stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.number;
            const duration = 2000;
            const stepTime = Math.abs(Math.floor(duration / end));
            
            const timer = setInterval(() => {
                start += 1;
                setCounts(prevCounts => {
                    const newCounts = [...prevCounts];
                    newCounts[index] = start;
                    return newCounts;
                });
                if (start === end) clearInterval(timer);
            }, stepTime);
        });
    }, []);

    return (
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200 py-16 flex justify-center items-center">
            <motion.div 
                className="w-11/12 md:w-3/4 grid grid-cols-2 md:grid-cols-4 text-center gap-10"
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                {stats.map((item, index) => (
                    <motion.div 
                        key={index} 
                        className="flex flex-col items-center p-6 bg-gray-800 bg-opacity-90 rounded-2xl shadow-xl border border-gray-700"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-5xl font-extrabold text-blue-400 drop-shadow-lg">{counts[index]}{(index<2?"+":"")}</h2>
                        <p className="text-xl font-semibold uppercase mt-2 text-gray-300">{item.label}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default HomeClubInfo;