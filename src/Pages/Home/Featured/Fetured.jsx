import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImage from "../../../assets/home/featured.jpg"
import backgroundImage from "../../../assets/home/featured.jpg"

const Featured = () => {
    return (
        <div className="relative featured-item text-white py-20 px-10">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.7 }}
            ></div>

            {/* Overlay Content */}
            <div className="relative  bg-black bg-opacity-60 p-4 rounded ">
                <SectionTitle
                    subHeading="check it out"
                    heading="Featured Item"
                />
                <div className="md:flex justify-center gap-7 p-8">
                    <div>
                        <img src={featuredImage} alt="Featured" />
                    </div>
                    <div className="md:ml-10">
                        <p>Aug 20, 2029</p>
                        <p className="uppercase">Where can I get some?</p>
                        <p className="py-4">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam illo minus totam adipisci velit corrupti, officia dicta possimus alias voluptatibus consequatur nemo fugiat beatae, necessitatibus quisquam dignissimos ipsam, ad eligendi aut enim illum dolorem architecto? Iusto saepe velit reiciendis ab, nam minima veniam dignissimos amet neque! Odit nostrum ad ea?
                        </p>
                        <button className="btn btn-outline border-0 border-b-4 text-white">Order now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
