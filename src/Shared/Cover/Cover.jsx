import React from 'react';

const Cover = ({ img, title }) => {
    return (
        <div className="relative h-[700px] overflow-hidden">
            {/* Background image with parallax effect */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed blur-sm scale-110"
                style={{
                    backgroundImage: `url("${img}")`,
                }}
            ></div>

            {/* Overlay for dark effect */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Cover;
