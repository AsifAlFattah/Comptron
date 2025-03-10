import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="container mx-auto  bg-white mt-28">
            {/* Header Section */}
            <div className="bg-blue-500 py-16">
                <motion.h1
                    className="text-4xl text-white text-center font-bold"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    ABOUT US
                </motion.h1>
            </div>

            {/* Content Section */}
            <div className="px-4 py-16 grid md:grid-cols-2 justify-center items-center gap-10">
                {/* Image Section */}
                <motion.div className="flex" whileHover={{ scale: 1.05 }}>
                    <img
                        src="https://aiubcc.org/wp-content/uploads/2020/12/1r.png"
                        alt="Campus"
                        className="rounded-lg shadow-lg w-1/2"
                    />
                    <div className="">
                        <img
                            src="https://aiubcc.org/wp-content/uploads/2020/12/2-768x563.jpg"
                            alt="Event 1"
                            className="rounded-lg shadow-lg"
                        />
                        <img
                            src="https://aiubcc.org/wp-content/uploads/2020/12/3-300x160.jpg"
                            alt="Event 2"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </motion.div>

                {/* Text Section */}
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-xl font-semibold text-gray-800">History</h2>
                    <h1 className="text-3xl font-bold text-gray-900">The Beginning</h1>
                    <p className="text-gray-600">
                        On September 13, 2012, the voyage of AIUB Computer Club – ACC, had commenced.
                        The dream was to set a platform for AIUB students to spread out the light of technology,
                        and that dream was seen by six founder members of AIUB Computer Club.
                        It started with a mission and vision. ACC welcome every student of American International
                        University – Bangladesh.
                    </p>
                </motion.div>

                {/* Text Section */}
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl font-bold text-gray-900">Our Mission</h1>
                    <p className="text-gray-600">
                        On September 13, 2012, the voyage of AIUB Computer Club – ACC, had commenced.
                        The dream was to set a platform for AIUB students to spread out the light of technology,
                        and that dream was seen by six founder members of AIUB Computer Club.
                        It started with a mission and vision. ACC welcome every student of American International
                        University – Bangladesh.
                    </p>
                </motion.div>

                {/* Image Section */}
                <motion.div className="flex" whileHover={{ scale: 1.05 }}>
                    <img
                        src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/480708368_1030629142430948_8052111319667662981_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFALvvSpMImGgbXYQ5JdfBi5HMv_cYQu-Xkcy_9xhC75fVkYxgVREcLRykgy2RtE5WKc61C9h3GuubDa4kpjlbt&_nc_ohc=hiCOB4xI1BkQ7kNvgFH7Dn3&_nc_oc=AdiGAIlvNrWqNLEu6HoiIEiJMjd9yLTIRsFSMU7G1MV4pMfcqjZmE4E5WFf1Rjfp8AI&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AABlZXLln2X_Y3kDxdr3L9M&oh=00_AYEyr4Gi8JFE_W5FbJPJwiMXB-ASJXihVhcwapESyTiPHA&oe=67D4FCFA"
                        alt="Campus"
                        className="rounded-lg shadow-lg"
                    />
                </motion.div>

                {/* Image Section */}
                <motion.div className="flex" whileHover={{ scale: 1.05 }}>
                    <img
                        src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/480708368_1030629142430948_8052111319667662981_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFALvvSpMImGgbXYQ5JdfBi5HMv_cYQu-Xkcy_9xhC75fVkYxgVREcLRykgy2RtE5WKc61C9h3GuubDa4kpjlbt&_nc_ohc=hiCOB4xI1BkQ7kNvgFH7Dn3&_nc_oc=AdiGAIlvNrWqNLEu6HoiIEiJMjd9yLTIRsFSMU7G1MV4pMfcqjZmE4E5WFf1Rjfp8AI&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AABlZXLln2X_Y3kDxdr3L9M&oh=00_AYEyr4Gi8JFE_W5FbJPJwiMXB-ASJXihVhcwapESyTiPHA&oe=67D4FCFA"
                        alt="Campus"
                        className="rounded-lg shadow-lg"
                    />
                </motion.div>

                {/* Text Section */}
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl font-bold text-gray-900">Our Vision</h1>
                    <p className="text-gray-600">
                        On September 13, 2012, the voyage of AIUB Computer Club – ACC, had commenced.
                        The dream was to set a platform for AIUB students to spread out the light of technology,
                        and that dream was seen by six founder members of AIUB Computer Club.
                        It started with a mission and vision. ACC welcome every student of American International
                        University – Bangladesh.
                    </p>
                </motion.div>
            </div>

            <div className="px-4 py-16">
                <h1 className="text-center font-extrabold capitalize text-5xl text-[#2b7fff]">EXECUTIVE COMMITTEE</h1>
                
                <div className="mt-12">
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-40 h-40 cover rounded-full" src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/480708368_1030629142430948_8052111319667662981_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFALvvSpMImGgbXYQ5JdfBi5HMv_cYQu-Xkcy_9xhC75fVkYxgVREcLRykgy2RtE5WKc61C9h3GuubDa4kpjlbt&_nc_ohc=hiCOB4xI1BkQ7kNvgFH7Dn3&_nc_oc=AdiGAIlvNrWqNLEu6HoiIEiJMjd9yLTIRsFSMU7G1MV4pMfcqjZmE4E5WFf1Rjfp8AI&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AABlZXLln2X_Y3kDxdr3L9M&oh=00_AYEyr4Gi8JFE_W5FbJPJwiMXB-ASJXihVhcwapESyTiPHA&oe=67D4FCFA" alt="" />
                        <h1 className="text-xl font-bold text-[#000000] mt-2">Mullah Mohammad Shahjalal</h1>
                        <h1 className="text-base font-medium text-[#332b3f]">Presedent</h1>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-4 gap-5">
                    
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-40 h-40 cover rounded-full" src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/480708368_1030629142430948_8052111319667662981_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFALvvSpMImGgbXYQ5JdfBi5HMv_cYQu-Xkcy_9xhC75fVkYxgVREcLRykgy2RtE5WKc61C9h3GuubDa4kpjlbt&_nc_ohc=hiCOB4xI1BkQ7kNvgFH7Dn3&_nc_oc=AdiGAIlvNrWqNLEu6HoiIEiJMjd9yLTIRsFSMU7G1MV4pMfcqjZmE4E5WFf1Rjfp8AI&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AABlZXLln2X_Y3kDxdr3L9M&oh=00_AYEyr4Gi8JFE_W5FbJPJwiMXB-ASJXihVhcwapESyTiPHA&oe=67D4FCFA" alt="" />
                        <h1 className="text-xl font-bold text-[#000000] mt-2">Mullah Mohammad Shahjalal</h1>
                        <h1 className="text-base font-medium text-[#332b3f]">Presedent</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-40 h-40 cover rounded-full" src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/480708368_1030629142430948_8052111319667662981_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFALvvSpMImGgbXYQ5JdfBi5HMv_cYQu-Xkcy_9xhC75fVkYxgVREcLRykgy2RtE5WKc61C9h3GuubDa4kpjlbt&_nc_ohc=hiCOB4xI1BkQ7kNvgFH7Dn3&_nc_oc=AdiGAIlvNrWqNLEu6HoiIEiJMjd9yLTIRsFSMU7G1MV4pMfcqjZmE4E5WFf1Rjfp8AI&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AABlZXLln2X_Y3kDxdr3L9M&oh=00_AYEyr4Gi8JFE_W5FbJPJwiMXB-ASJXihVhcwapESyTiPHA&oe=67D4FCFA" alt="" />
                        <h1 className="text-xl font-bold text-[#000000] mt-2">Mullah Mohammad Shahjalal</h1>
                        <h1 className="text-base font-medium text-[#332b3f]">Presedent</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-40 h-40 cover rounded-full" src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/480708368_1030629142430948_8052111319667662981_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFALvvSpMImGgbXYQ5JdfBi5HMv_cYQu-Xkcy_9xhC75fVkYxgVREcLRykgy2RtE5WKc61C9h3GuubDa4kpjlbt&_nc_ohc=hiCOB4xI1BkQ7kNvgFH7Dn3&_nc_oc=AdiGAIlvNrWqNLEu6HoiIEiJMjd9yLTIRsFSMU7G1MV4pMfcqjZmE4E5WFf1Rjfp8AI&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AABlZXLln2X_Y3kDxdr3L9M&oh=00_AYEyr4Gi8JFE_W5FbJPJwiMXB-ASJXihVhcwapESyTiPHA&oe=67D4FCFA" alt="" />
                        <h1 className="text-xl font-bold text-[#000000] mt-2">Mullah Mohammad Shahjalal</h1>
                        <h1 className="text-base font-medium text-[#332b3f]">Presedent</h1>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <img className="w-40 h-40 cover rounded-full" src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/480708368_1030629142430948_8052111319667662981_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFALvvSpMImGgbXYQ5JdfBi5HMv_cYQu-Xkcy_9xhC75fVkYxgVREcLRykgy2RtE5WKc61C9h3GuubDa4kpjlbt&_nc_ohc=hiCOB4xI1BkQ7kNvgFH7Dn3&_nc_oc=AdiGAIlvNrWqNLEu6HoiIEiJMjd9yLTIRsFSMU7G1MV4pMfcqjZmE4E5WFf1Rjfp8AI&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AABlZXLln2X_Y3kDxdr3L9M&oh=00_AYEyr4Gi8JFE_W5FbJPJwiMXB-ASJXihVhcwapESyTiPHA&oe=67D4FCFA" alt="" />
                        <h1 className="text-xl font-bold text-[#000000] mt-2">Mullah Mohammad Shahjalal</h1>
                        <h1 className="text-base font-medium text-[#332b3f]">Presedent</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-40 h-40 cover rounded-full" src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/480708368_1030629142430948_8052111319667662981_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFALvvSpMImGgbXYQ5JdfBi5HMv_cYQu-Xkcy_9xhC75fVkYxgVREcLRykgy2RtE5WKc61C9h3GuubDa4kpjlbt&_nc_ohc=hiCOB4xI1BkQ7kNvgFH7Dn3&_nc_oc=AdiGAIlvNrWqNLEu6HoiIEiJMjd9yLTIRsFSMU7G1MV4pMfcqjZmE4E5WFf1Rjfp8AI&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AABlZXLln2X_Y3kDxdr3L9M&oh=00_AYEyr4Gi8JFE_W5FbJPJwiMXB-ASJXihVhcwapESyTiPHA&oe=67D4FCFA" alt="" />
                        <h1 className="text-xl font-bold text-[#000000] mt-2">Mullah Mohammad Shahjalal</h1>
                        <h1 className="text-base font-medium text-[#332b3f]">Presedent</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-40 h-40 cover rounded-full" src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/480708368_1030629142430948_8052111319667662981_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFALvvSpMImGgbXYQ5JdfBi5HMv_cYQu-Xkcy_9xhC75fVkYxgVREcLRykgy2RtE5WKc61C9h3GuubDa4kpjlbt&_nc_ohc=hiCOB4xI1BkQ7kNvgFH7Dn3&_nc_oc=AdiGAIlvNrWqNLEu6HoiIEiJMjd9yLTIRsFSMU7G1MV4pMfcqjZmE4E5WFf1Rjfp8AI&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AABlZXLln2X_Y3kDxdr3L9M&oh=00_AYEyr4Gi8JFE_W5FbJPJwiMXB-ASJXihVhcwapESyTiPHA&oe=67D4FCFA" alt="" />
                        <h1 className="text-xl font-bold text-[#000000] mt-2">Mullah Mohammad Shahjalal</h1>
                        <h1 className="text-base font-medium text-[#332b3f]">Presedent</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-40 h-40 cover rounded-full" src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/480708368_1030629142430948_8052111319667662981_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFALvvSpMImGgbXYQ5JdfBi5HMv_cYQu-Xkcy_9xhC75fVkYxgVREcLRykgy2RtE5WKc61C9h3GuubDa4kpjlbt&_nc_ohc=hiCOB4xI1BkQ7kNvgFH7Dn3&_nc_oc=AdiGAIlvNrWqNLEu6HoiIEiJMjd9yLTIRsFSMU7G1MV4pMfcqjZmE4E5WFf1Rjfp8AI&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AABlZXLln2X_Y3kDxdr3L9M&oh=00_AYEyr4Gi8JFE_W5FbJPJwiMXB-ASJXihVhcwapESyTiPHA&oe=67D4FCFA" alt="" />
                        <h1 className="text-xl font-bold text-[#000000] mt-2">Mullah Mohammad Shahjalal</h1>
                        <h1 className="text-base font-medium text-[#332b3f]">Presedent</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-40 h-40 cover rounded-full" src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/480708368_1030629142430948_8052111319667662981_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFALvvSpMImGgbXYQ5JdfBi5HMv_cYQu-Xkcy_9xhC75fVkYxgVREcLRykgy2RtE5WKc61C9h3GuubDa4kpjlbt&_nc_ohc=hiCOB4xI1BkQ7kNvgFH7Dn3&_nc_oc=AdiGAIlvNrWqNLEu6HoiIEiJMjd9yLTIRsFSMU7G1MV4pMfcqjZmE4E5WFf1Rjfp8AI&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AABlZXLln2X_Y3kDxdr3L9M&oh=00_AYEyr4Gi8JFE_W5FbJPJwiMXB-ASJXihVhcwapESyTiPHA&oe=67D4FCFA" alt="" />
                        <h1 className="text-xl font-bold text-[#000000] mt-2">Mullah Mohammad Shahjalal</h1>
                        <h1 className="text-base font-medium text-[#332b3f]">Presedent</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-40 h-40 cover rounded-full" src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/480708368_1030629142430948_8052111319667662981_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFALvvSpMImGgbXYQ5JdfBi5HMv_cYQu-Xkcy_9xhC75fVkYxgVREcLRykgy2RtE5WKc61C9h3GuubDa4kpjlbt&_nc_ohc=hiCOB4xI1BkQ7kNvgFH7Dn3&_nc_oc=AdiGAIlvNrWqNLEu6HoiIEiJMjd9yLTIRsFSMU7G1MV4pMfcqjZmE4E5WFf1Rjfp8AI&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AABlZXLln2X_Y3kDxdr3L9M&oh=00_AYEyr4Gi8JFE_W5FbJPJwiMXB-ASJXihVhcwapESyTiPHA&oe=67D4FCFA" alt="" />
                        <h1 className="text-xl font-bold text-[#000000] mt-2">Mullah Mohammad Shahjalal</h1>
                        <h1 className="text-base font-medium text-[#332b3f]">Presedent</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-40 h-40 cover rounded-full" src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/480708368_1030629142430948_8052111319667662981_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFALvvSpMImGgbXYQ5JdfBi5HMv_cYQu-Xkcy_9xhC75fVkYxgVREcLRykgy2RtE5WKc61C9h3GuubDa4kpjlbt&_nc_ohc=hiCOB4xI1BkQ7kNvgFH7Dn3&_nc_oc=AdiGAIlvNrWqNLEu6HoiIEiJMjd9yLTIRsFSMU7G1MV4pMfcqjZmE4E5WFf1Rjfp8AI&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AABlZXLln2X_Y3kDxdr3L9M&oh=00_AYEyr4Gi8JFE_W5FbJPJwiMXB-ASJXihVhcwapESyTiPHA&oe=67D4FCFA" alt="" />
                        <h1 className="text-xl font-bold text-[#000000] mt-2">Mullah Mohammad Shahjalal</h1>
                        <h1 className="text-base font-medium text-[#332b3f]">Presedent</h1>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <img className="w-40 h-40 cover rounded-full" src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/480708368_1030629142430948_8052111319667662981_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFALvvSpMImGgbXYQ5JdfBi5HMv_cYQu-Xkcy_9xhC75fVkYxgVREcLRykgy2RtE5WKc61C9h3GuubDa4kpjlbt&_nc_ohc=hiCOB4xI1BkQ7kNvgFH7Dn3&_nc_oc=AdiGAIlvNrWqNLEu6HoiIEiJMjd9yLTIRsFSMU7G1MV4pMfcqjZmE4E5WFf1Rjfp8AI&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AABlZXLln2X_Y3kDxdr3L9M&oh=00_AYEyr4Gi8JFE_W5FbJPJwiMXB-ASJXihVhcwapESyTiPHA&oe=67D4FCFA" alt="" />
                        <h1 className="text-xl font-bold text-[#000000] mt-2">Mullah Mohammad Shahjalal</h1>
                        <h1 className="text-base font-medium text-[#332b3f]">Presedent</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-40 h-40 cover rounded-full" src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/480708368_1030629142430948_8052111319667662981_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFALvvSpMImGgbXYQ5JdfBi5HMv_cYQu-Xkcy_9xhC75fVkYxgVREcLRykgy2RtE5WKc61C9h3GuubDa4kpjlbt&_nc_ohc=hiCOB4xI1BkQ7kNvgFH7Dn3&_nc_oc=AdiGAIlvNrWqNLEu6HoiIEiJMjd9yLTIRsFSMU7G1MV4pMfcqjZmE4E5WFf1Rjfp8AI&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AABlZXLln2X_Y3kDxdr3L9M&oh=00_AYEyr4Gi8JFE_W5FbJPJwiMXB-ASJXihVhcwapESyTiPHA&oe=67D4FCFA" alt="" />
                        <h1 className="text-xl font-bold text-[#000000] mt-2">Mullah Mohammad Shahjalal</h1>
                        <h1 className="text-base font-medium text-[#332b3f]">Presedent</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-40 h-40 cover rounded-full" src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/480708368_1030629142430948_8052111319667662981_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFALvvSpMImGgbXYQ5JdfBi5HMv_cYQu-Xkcy_9xhC75fVkYxgVREcLRykgy2RtE5WKc61C9h3GuubDa4kpjlbt&_nc_ohc=hiCOB4xI1BkQ7kNvgFH7Dn3&_nc_oc=AdiGAIlvNrWqNLEu6HoiIEiJMjd9yLTIRsFSMU7G1MV4pMfcqjZmE4E5WFf1Rjfp8AI&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AABlZXLln2X_Y3kDxdr3L9M&oh=00_AYEyr4Gi8JFE_W5FbJPJwiMXB-ASJXihVhcwapESyTiPHA&oe=67D4FCFA" alt="" />
                        <h1 className="text-xl font-bold text-[#000000] mt-2">Mullah Mohammad Shahjalal</h1>
                        <h1 className="text-base font-medium text-[#332b3f]">Presedent</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-40 h-40 cover rounded-full" src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/480708368_1030629142430948_8052111319667662981_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFALvvSpMImGgbXYQ5JdfBi5HMv_cYQu-Xkcy_9xhC75fVkYxgVREcLRykgy2RtE5WKc61C9h3GuubDa4kpjlbt&_nc_ohc=hiCOB4xI1BkQ7kNvgFH7Dn3&_nc_oc=AdiGAIlvNrWqNLEu6HoiIEiJMjd9yLTIRsFSMU7G1MV4pMfcqjZmE4E5WFf1Rjfp8AI&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AABlZXLln2X_Y3kDxdr3L9M&oh=00_AYEyr4Gi8JFE_W5FbJPJwiMXB-ASJXihVhcwapESyTiPHA&oe=67D4FCFA" alt="" />
                        <h1 className="text-xl font-bold text-[#000000] mt-2">Mullah Mohammad Shahjalal</h1>
                        <h1 className="text-base font-medium text-[#332b3f]">Presedent</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-40 h-40 cover rounded-full" src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/480708368_1030629142430948_8052111319667662981_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFALvvSpMImGgbXYQ5JdfBi5HMv_cYQu-Xkcy_9xhC75fVkYxgVREcLRykgy2RtE5WKc61C9h3GuubDa4kpjlbt&_nc_ohc=hiCOB4xI1BkQ7kNvgFH7Dn3&_nc_oc=AdiGAIlvNrWqNLEu6HoiIEiJMjd9yLTIRsFSMU7G1MV4pMfcqjZmE4E5WFf1Rjfp8AI&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AABlZXLln2X_Y3kDxdr3L9M&oh=00_AYEyr4Gi8JFE_W5FbJPJwiMXB-ASJXihVhcwapESyTiPHA&oe=67D4FCFA" alt="" />
                        <h1 className="text-xl font-bold text-[#000000] mt-2">Mullah Mohammad Shahjalal</h1>
                        <h1 className="text-base font-medium text-[#332b3f]">Presedent</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-40 h-40 cover rounded-full" src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/480708368_1030629142430948_8052111319667662981_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFALvvSpMImGgbXYQ5JdfBi5HMv_cYQu-Xkcy_9xhC75fVkYxgVREcLRykgy2RtE5WKc61C9h3GuubDa4kpjlbt&_nc_ohc=hiCOB4xI1BkQ7kNvgFH7Dn3&_nc_oc=AdiGAIlvNrWqNLEu6HoiIEiJMjd9yLTIRsFSMU7G1MV4pMfcqjZmE4E5WFf1Rjfp8AI&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AABlZXLln2X_Y3kDxdr3L9M&oh=00_AYEyr4Gi8JFE_W5FbJPJwiMXB-ASJXihVhcwapESyTiPHA&oe=67D4FCFA" alt="" />
                        <h1 className="text-xl font-bold text-[#000000] mt-2">Mullah Mohammad Shahjalal</h1>
                        <h1 className="text-base font-medium text-[#332b3f]">Presedent</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-40 h-40 cover rounded-full" src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/480708368_1030629142430948_8052111319667662981_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFALvvSpMImGgbXYQ5JdfBi5HMv_cYQu-Xkcy_9xhC75fVkYxgVREcLRykgy2RtE5WKc61C9h3GuubDa4kpjlbt&_nc_ohc=hiCOB4xI1BkQ7kNvgFH7Dn3&_nc_oc=AdiGAIlvNrWqNLEu6HoiIEiJMjd9yLTIRsFSMU7G1MV4pMfcqjZmE4E5WFf1Rjfp8AI&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AABlZXLln2X_Y3kDxdr3L9M&oh=00_AYEyr4Gi8JFE_W5FbJPJwiMXB-ASJXihVhcwapESyTiPHA&oe=67D4FCFA" alt="" />
                        <h1 className="text-xl font-bold text-[#000000] mt-2">Mullah Mohammad Shahjalal</h1>
                        <h1 className="text-base font-medium text-[#332b3f]">Presedent</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-40 h-40 cover rounded-full" src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/480708368_1030629142430948_8052111319667662981_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFALvvSpMImGgbXYQ5JdfBi5HMv_cYQu-Xkcy_9xhC75fVkYxgVREcLRykgy2RtE5WKc61C9h3GuubDa4kpjlbt&_nc_ohc=hiCOB4xI1BkQ7kNvgFH7Dn3&_nc_oc=AdiGAIlvNrWqNLEu6HoiIEiJMjd9yLTIRsFSMU7G1MV4pMfcqjZmE4E5WFf1Rjfp8AI&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AABlZXLln2X_Y3kDxdr3L9M&oh=00_AYEyr4Gi8JFE_W5FbJPJwiMXB-ASJXihVhcwapESyTiPHA&oe=67D4FCFA" alt="" />
                        <h1 className="text-xl font-bold text-[#000000] mt-2">Mullah Mohammad Shahjalal</h1>
                        <h1 className="text-base font-medium text-[#332b3f]">Presedent</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-40 h-40 cover rounded-full" src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/480708368_1030629142430948_8052111319667662981_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFALvvSpMImGgbXYQ5JdfBi5HMv_cYQu-Xkcy_9xhC75fVkYxgVREcLRykgy2RtE5WKc61C9h3GuubDa4kpjlbt&_nc_ohc=hiCOB4xI1BkQ7kNvgFH7Dn3&_nc_oc=AdiGAIlvNrWqNLEu6HoiIEiJMjd9yLTIRsFSMU7G1MV4pMfcqjZmE4E5WFf1Rjfp8AI&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AABlZXLln2X_Y3kDxdr3L9M&oh=00_AYEyr4Gi8JFE_W5FbJPJwiMXB-ASJXihVhcwapESyTiPHA&oe=67D4FCFA" alt="" />
                        <h1 className="text-xl font-bold text-[#000000] mt-2">Mullah Mohammad Shahjalal</h1>
                        <h1 className="text-base font-medium text-[#332b3f]">Presedent</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-40 h-40 cover rounded-full" src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/480708368_1030629142430948_8052111319667662981_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFALvvSpMImGgbXYQ5JdfBi5HMv_cYQu-Xkcy_9xhC75fVkYxgVREcLRykgy2RtE5WKc61C9h3GuubDa4kpjlbt&_nc_ohc=hiCOB4xI1BkQ7kNvgFH7Dn3&_nc_oc=AdiGAIlvNrWqNLEu6HoiIEiJMjd9yLTIRsFSMU7G1MV4pMfcqjZmE4E5WFf1Rjfp8AI&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=AABlZXLln2X_Y3kDxdr3L9M&oh=00_AYEyr4Gi8JFE_W5FbJPJwiMXB-ASJXihVhcwapESyTiPHA&oe=67D4FCFA" alt="" />
                        <h1 className="text-xl font-bold text-[#000000] mt-2">Mullah Mohammad Shahjalal</h1>
                        <h1 className="text-base font-medium text-[#332b3f]">Presedent</h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
