import React from 'react';

const HomeAbout = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between py-10 bg-white">
            {/* Left Side: Text Content */}
            <div className="text-left">
                <h3 className="text-lg font-bold text-gray-600">ABOUT</h3>
                <h2 className="text-3xl font-bold text-gray-800 mt-2">Comptron - Creativity Assembled</h2>
                <p className="mt-4 text-gray-700 text-base leading-relaxed pr-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad blanditiis maiores minima sequi eos. Deserunt, nisi quod cum, expedita officia fugit aut eius magni nemo amet non aperiam temporibus. Aliquid animi labore similique a voluptate maiores est autem, error laudantium ea vitae blanditiis qui assumenda repudiandae itaque Minima.
                </p>
                <p className="mt-4 text-gray-700 text-base leading-relaxed pr-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur omnis explicabo nesciunt nemo at eius deleniti saepe nam adipisci fugit, voluptatibus rerum dolorum molestias obcaecati temporibus laborum dicta esse iste nisi exercitationem ducimus? Laboriosam at ipsa reprehenderit voluptas exercitationem adipisci aliquid quaerat, quam labore accusamus, nihil provident enim deleniti autem assumenda dignissimos quas id vero fugiat.
                </p>
            </div>
            
            {/* Right Side: Image */}
            <div className="mt-6 md:mt-0">
                <img
                    src="https://aiubcc.org/wp-content/uploads/2020/12/1-Webp.net-compress-image-1024x683.jpg"
                    alt="AIUB Computer Club"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
};

export default HomeAbout;
