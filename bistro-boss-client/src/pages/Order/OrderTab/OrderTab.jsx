import FoodCard from '../../../components/FoodCard/FoodCard';
import "swiper/css";
import "swiper/css/pagination";

const OrderTab = ({ items }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map(item => (
          <div key={item._id} className="transform hover:scale-105 transition-transform duration-300">
            <FoodCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTab;
