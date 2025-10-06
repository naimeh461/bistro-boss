const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
      <div className="flex items-center gap-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 group cursor-pointer">
        <div className="overflow-hidden rounded-full w-[100px] h-[100px] flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
  
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">
              {name}
            </h3>
            <span className="text-yellow-600 font-bold text-lg">${price}</span>
          </div>
          <p className="text-sm text-gray-600 mt-1 leading-relaxed">
            {recipe.length > 90 ? recipe.slice(0, 90) + "..." : recipe}
          </p>
        </div>
      </div>
    );
  };
  
  export default MenuItem;
  