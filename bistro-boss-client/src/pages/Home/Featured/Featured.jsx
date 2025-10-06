import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <section className="featured-item text-white pt-8 my-20">
            <SectionTitle subHeading="Check it Out" heading="Featured Item" />
            <div className="featured-overlay">
                <div className="featured-content">
                    <div className="featured-img">
                        <img className="rounded-xl shadow-lg" src={featuredImg} alt="Featured Dish" />
                    </div>
                    <div className="featured-text">
                        <p className="text-sm text-orange-400 mb-2">Aug 20, 2029</p>
                        <h3 className="text-3xl md:text-4xl uppercase font-semibold mb-4">Where can I get some?</h3>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum!
                        </p>
                        <button className="btn btn-outline border-0 border-b-4 mt-4 hover:bg-orange-500 hover:border-none transition-all duration-300">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;
