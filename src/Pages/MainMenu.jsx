import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../Context/ProductsProvider";
import ProductCard from "./Home/ProductCard";
import { Loader } from "lucide-react";

function MainMenu() {
  const { categories, menuItems, isLoading, error } =
    useContext(ProductsContext);
  const [filteredItems, setFilteredItems] = useState([]);

  const filteredMenuItems = (catergoryId) => {
    console.log(catergoryId);

    if (catergoryId == "all") {
      setFilteredItems([]);
    }
     else {
      const filtered = menuItems.filter((item) => item.category === catergoryId);
       setFilteredItems(filtered);
        console.log(filtered);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-8 h-8 animate-spin mx-auto mb-4 text-mcdonalds-red" />
          <p className="text-lg text-gray-600">جاري تحميل القائمة...</p>
        </div>
      </div>
    );
  }
  return (
    <section className="my-20 flex flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-medium mb-5">قائمة الطعام</h2>
        <p className="md:text-[20px] text-gray-500 mb-5">
          اكتشف مجموعتنا الشاملة من الوجبات اللذيذة
        </p>
      </div>

      <div className="flex items-center md:gap-6 w-[70%] mx-auto">
        <div
          className={`cursor-pointer  md:px-2 pb-2.5 hover:bg-[#FF2200]  hover:text-white rounded-sm md:text-[20px] font-semibold`}
          onClick={() => filteredMenuItems("all")}
        >
          القائمة الكاملة
        </div>
        {categories.length > 0 &&
          categories.map((category) => {
            return (
              <div
                key={category.id}
                className=" cursor-pointer px-2 mr-2 md:px-2.5 pb-2.5 hover:bg-[#FF2200]  hover:text-white rounded-sm "
                onClick={() => filteredMenuItems(category.id)}
              >
                <p className=" md:text-[20px] font-semibold">{category.name}</p>
              </div>
            );
          })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {(filteredItems.length > 0 ? filteredItems : menuItems).map((item) => {
          return (
            <ProductCard
              key={item.id}
              name={item.name}
              image={item.image}
              description={item.description}
              price={item.price}
              rating={item.rating}
              popular={item.popular}
            />
          );
        })}
      </div>
    </section>
  );
}

export default MainMenu;
