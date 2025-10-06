import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="bg-gradient-to-b from-[#fff8f0] to-[#fffaf5] py-16 px-4 md:px-8 lg:px-16 rounded-3xl shadow-sm mt-20">
      <SectionTitle heading="From Our Menu" subHeading="Popular Items" />

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="px-8 py-3 border-b-4 border-yellow-500 text-yellow-600 font-semibold tracking-wide uppercase transition-all duration-300 hover:bg-yellow-500 hover:text-white rounded-lg shadow-sm">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
