import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
            };
            axiosSecure.post("/carts", cartItem).then((res) => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    refetch();
                }
            });
        } else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
            {/* Image */}
            <div className="relative w-full h-60 sm:h-64 md:h-72 lg:h-80">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover object-center"
                />
                <span className="absolute top-3 right-3 px-3 py-1 bg-orange-500 text-white font-semibold rounded-lg shadow-md">
                    ${price}
                </span>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">{name}</h2>
                    <p className="text-gray-500 mt-2 text-sm sm:text-base">{recipe}</p>
                </div>

                <button
                    onClick={handleAddToCart}
                    className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-all duration-300"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default FoodCard;
